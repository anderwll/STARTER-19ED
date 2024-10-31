import { prisma } from "../database/prisma.database";
import { CreateAssessmentDto } from "../dtos/assessment.dto";
import { ResponseApi } from "../types";

export class AssessmentService {
  public async create(
    createAssessment: CreateAssessmentDto
  ): Promise<ResponseApi> {
    const { title, description, grade, studentId } = createAssessment;

    const assessmentCreated = await prisma.assessment.create({
      data: {
        title: title,
        description: description,
        grade: grade,
        studentId: studentId,
      },
    });

    return {
      ok: true,
      code: 201,
      message: "Avaliação cadastrada com sucesso!",
      data: assessmentCreated,
    };
  }

  public async findAll(id: string): Promise<ResponseApi> {
    const assessmentList = await prisma.assessment.findMany({
      where: { studentId: id },
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
      data: assessmentList,
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
}
