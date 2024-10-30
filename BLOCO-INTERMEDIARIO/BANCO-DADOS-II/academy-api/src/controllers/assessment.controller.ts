import { Request, response, Response } from "express";
import { CreateAssessmentDto } from "../dtos/assessment.dto";
import { AssessmentService } from "../services/assessments.service";

export class AssessmentController {
  public static async create(req: Request, res: Response): Promise<void> {
    try {
      const { title, description, grade, studentId } = req.body;

      const data: CreateAssessmentDto = {
        title,
        description,
        grade,
        studentId,
      };

      const service = new AssessmentService();
      const result = await service.create(data);

      const { code, ...response } = result;

      res.status(code).json(response);
    } catch (error: any) {
      res.status(500).json({
        ok: false,
        message: `Erro do servidor: ${error.message}`,
      });
    }
  }
}
