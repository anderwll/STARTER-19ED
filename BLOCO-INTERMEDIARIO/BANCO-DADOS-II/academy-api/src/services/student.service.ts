import { Student as StudentPrisma } from "@prisma/client";
import { prisma } from "../database/prisma.database";
import { CreateStudentDto, StudentDto } from "../dtos";
import { ResponseApi } from "../types";

export class StudentService {
  public async create(createStudent: CreateStudentDto): Promise<ResponseApi> {
    try {
      const { name, email, password, type, age, cpf } = createStudent;

      // 2 - Verificarmos as colunas unicas
      const student = await prisma.student.findFirst({
        where: {
          OR: [{ email: email }, { cpf: cpf }], // = // EMAIL OU CPF
        },
      });

      // Valida E-mail e CPF unicos
      if (student) {
        if (student.email === email) {
          return {
            ok: false,
            code: 409,
            message: "E-mail já está em uso.",
          };
        }

        if (student.cpf === cpf) {
          return {
            ok: false,
            code: 409,
            message: "CPF já está em uso.",
          };
        }
      }

      // 3 - Criação do nosso estudante no banco de dados
      const studentCreated = await prisma.student.create({
        data: {
          name: name,
          cpf: cpf,
          email: email,
          password: password,
          age: age,
        },
      });

      return {
        ok: true,
        code: 201,
        message: "Estudante cadastrado com sucesso!",
        data: this.mapToDto(studentCreated),
      };
    } catch (error: any) {
      return {
        ok: false,
        code: 500,
        message: `Erro do servidor: ${error.message}`,
      };
    }
  }

  private mapToDto(student: StudentPrisma): StudentDto {
    return {
      id: student.id,
      email: student.email,
      name: student.name,
      cpf: student.cpf,
      type: student.type,
      age: student.age,
    };
  }
}
