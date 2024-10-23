import {
  Assessment as AssessmentPrisma,
  Prisma,
  Student as StudentPrisma,
} from "@prisma/client";
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

  // ?id=
  // /:id
  public async findAll({ name, cpf }: QueryFilterDto): Promise<ResponseApi> {
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

  public async findOneById(id: string): Promise<ResponseApi> {
    // 1 - Buscar => id é pk, id é unico
    const student = await prisma.student.findUnique({
      where: { id },
      include: {
        assessments: true,
      },
    });

    // 2 - Validar se existe
    if (!student) {
      return {
        ok: false,
        code: 404, // Not Found
        message: "Estudante não encontrado!",
      };
    }

    // 3 - Retornar o dado
    return {
      ok: true,
      code: 200,
      message: "Estudante encontrado!",
      data: this.mapToDto(student),
    };
  }

  private mapToDto(
    student: StudentPrisma & { assessments?: AssessmentPrisma[] }
  ): StudentDto {
    return {
      id: student.id,
      email: student.email,
      name: student.name,
      cpf: student.cpf,
      type: student.type,
      age: student.age,
      assessments: student.assessments?.map((assessment) => ({
        id: assessment.id,
        title: assessment.title,
        grade: Number(assessment.grade), // Decima(4, 2) => number (Number())
        description: assessment?.description,
      })),
    };
  }
}
