import { Assessment, StudentType } from "@prisma/client";
import { prisma } from "../database/prisma.database";
import {
  AssessmentDto,
  CreateAssessmentDto,
  UpdateAssessmentDto,
} from "../dtos/assessment.dto";
import { ResponseApi } from "../types";
import { StudentToken } from "../types/student.types";

export class AssessmentService {
  public async create(
    createAssessment: CreateAssessmentDto,
    studentLogged: StudentToken
  ): Promise<ResponseApi> {
    const { title, description, grade, studentId } = createAssessment;

    const studentIdValidate =
      studentLogged.type === StudentType.M ? studentLogged.id : studentId;

    const student = await prisma.student.findUnique({
      where: { id: studentId },
    });

    if (!student) {
      return {
        ok: false,
        code: 404,
        message: "Estudante não encontrado!",
      };
    }

    const assessmentCreated = await prisma.assessment.create({
      data: {
        title: title,
        description: description,
        grade: grade,
        studentId: studentIdValidate,
      },
    });

    return {
      ok: true,
      code: 201,
      message: "Avaliação cadastrada com sucesso!",
      data: this.mapToDto(assessmentCreated),
    };
  }

  public async findAll(studentLogged: StudentToken): Promise<ResponseApi> {
    const studentId =
      studentLogged.type !== StudentType.T ? undefined : studentLogged.id;

    const assessmentList = await prisma.assessment.findMany({
      where: { studentId },
      orderBy: { createdAt: "asc" },
    });

    if (!assessmentList) {
      return {
        ok: false,
        code: 404,
        message: "Avaliação do estudante não encontrada",
      };
    }

    return {
      ok: true,
      code: 200,
      message: "Avaliações buscadas com sucesso !!!",
      data: assessmentList.map((ass) => this.mapToDto(ass)),
    };
  }

  public async findOneById(id: string): Promise<ResponseApi> {
    const assessment = await prisma.assessment.findUnique({
      where: { id },
    });

    if (!assessment) {
      return {
        ok: false,
        code: 404, // Not Found
        message: "Avaliaçao não encontrado!",
      };
    }

    return {
      ok: true,
      code: 200,
      message: "Avaliação buscada com sucesso!",
      data: assessment,
    };
  }

  public async update(
    id: string,
    updateAssessments: UpdateAssessmentDto
  ): Promise<ResponseApi> {
    const assessment = await prisma.assessment.findUnique({
      where: { id },
    });

    if (!assessment) {
      return {
        ok: false,
        code: 404,
        message: "Avaliação não encontrada!",
      };
    }

    const updateAssessment = await prisma.assessment.update({
      where: { id },
      data: { ...updateAssessments },
    });

    return {
      ok: true,
      code: 200,
      message: "Avaluação atualizada com sucesso!",
      data: this.mapToDto(updateAssessment),
    };
  }

  public async remove(id: string): Promise<ResponseApi> {
    const assessment = await prisma.assessment.findUnique({
      where: { id },
    });

    if (!assessment) {
      return {
        ok: false,
        code: 404,
        message: "Avaliação não encontrada!",
      };
    }

    const removeAssessment = await prisma.assessment.delete({
      where: { id },
    });
    return {
      ok: true,
      code: 200,
      message: "Avaliação excluída com sucesso!",
      data: this.mapToDto(removeAssessment),
    };
  }

  private mapToDto(assessment: Assessment): AssessmentDto {
    return {
      id: assessment.id,
      title: assessment.title,
      description: assessment.description,
      grade: Number(assessment.grade),
      studentId: assessment.studentId,
      createdAt: assessment.createdAt,
    };
  }
}
