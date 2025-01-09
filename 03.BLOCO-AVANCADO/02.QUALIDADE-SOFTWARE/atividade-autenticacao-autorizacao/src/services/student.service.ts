import {
  Assessment as AssessmentPrisma,
  Prisma,
  Student as StudentPrisma,
} from "@prisma/client";
import { prisma } from "../database/prisma.database";
import {
  CreateStudentDto,
  QueryFilterDto,
  StudentDto,
  UpdateStudentDto,
} from "../dtos";
import { ResponseApi } from "../types";

export class StudentService {
  public async create(createStudent: CreateStudentDto): Promise<ResponseApi> {
    const { name, email, password, type, age, cpf } = createStudent;

    const student = await prisma.student.findFirst({
      where: {
        OR: [{ email: email }, { cpf: cpf }], // = // EMAIL OU CPF
      },
    });

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

  public async findAll({ name, cpf }: QueryFilterDto): Promise<ResponseApi> {
    const where: Prisma.StudentWhereInput = {};

    if (name) {
      where.name = { contains: name, mode: "insensitive" };
    }

    if (cpf) {
      where.cpf = { contains: cpf };
    }

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
    const student = await prisma.student.findUnique({
      where: { id },
      include: {
        assessments: true,
      },
    });

    if (!student) {
      return {
        ok: false,
        code: 404, // Not Found
        message: "Estudante não encontrado!",
      };
    }

    return {
      ok: true,
      code: 200,
      message: "Estudante encontrado!",
      data: this.mapToDto(student),
    };
  }

  public async update(
    id: string,
    updateStudent: UpdateStudentDto
  ): Promise<ResponseApi> {
    const student = await prisma.student.findUnique({
      where: { id },
    });

    if (!student) {
      return {
        ok: false,
        code: 404,
        message: "Estudante não encontrado!",
      };
    }

    const studentUpdated = await prisma.student.update({
      where: { id },
      data: { ...updateStudent },
    });

    return {
      ok: true,
      code: 200,
      message: "Estudante atualizado com sucesso!",
      data: this.mapToDto(studentUpdated),
    };
  }

  public async remove(id: string): Promise<ResponseApi> {
    const student = await prisma.student.findUnique({ where: { id } });

    if (!student) {
      return {
        ok: false,
        code: 404,
        message: "Estudante não encontrado!",
      };
    }

    const studentDeleted = await prisma.student.delete({
      where: { id },
    });

    return {
      ok: true,
      code: 200,
      message: "Estudante removido com sucesso!",
      data: this.mapToDto(studentDeleted),
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
        grade: Number(assessment.grade),
        description: assessment?.description,
      })),
    };
  }
}
