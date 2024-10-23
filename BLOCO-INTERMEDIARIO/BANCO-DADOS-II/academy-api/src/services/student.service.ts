import { Prisma, Student as StudentPrisma } from "@prisma/client";
import { prisma } from "../database/prisma.database";
import { CreateStudentDto, QueryFilterDto, StudentDto } from "../dtos";
import { ResponseApi } from "../types";

export class StudentService {
  public async create(createStudent: CreateStudentDto): Promise<ResponseApi> {
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
  }

  public async findAll({ cpf, name }: QueryFilterDto): Promise<ResponseApi> {
    const where: Prisma.StudentWhereInput = {};

    if (name) {
      where.name = { contains: name, mode: "insensitive" };
    }

    if (cpf) {
      where.cpf = { contains: cpf };
    }

    // OU => OR ||
    // ILIKE LIKE

    // contains = conter
    // endsWith = terminar
    // startWith = começar
    // in = []
    const students = await prisma.student.findMany({
      where,
    });

    return {
      ok: true,
      code: 200,
      message: "Estudantes buscados com sucesso!",
      data: students.map((student) => this.mapToDto(student)), // StudentDto[]
    };
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
