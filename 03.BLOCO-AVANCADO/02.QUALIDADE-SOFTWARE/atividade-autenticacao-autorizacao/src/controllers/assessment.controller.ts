import { Request, response, Response } from "express";
import { CreateAssessmentDto } from "../dtos/assessment.dto";
import { AssessmentService } from "../services/assessments.service";

export class AssessmentController {
  public static async create(req: Request, res: Response): Promise<void> {
    try {
      const studentLogged = req.authStudent;
      const { title, description, grade, studentId } = req.body;

      const data: CreateAssessmentDto = {
        title,
        description,
        grade,
        studentId,
      };

      const service = new AssessmentService();
      const result = await service.create(data, studentLogged);

      const { code, ...response } = result;
      res.status(code).json(response);
    } catch (error: any) {
      res.status(500).json({
        ok: false,
        message: `Erro do servidor: ${error.message}`,
      });
    }
  }

  public static async findAll(req: Request, res: Response): Promise<void> {
    try {
      const studentLogged = req.authStudent;

      const service = new AssessmentService();
      const result = await service.findAll(studentLogged);

      const { code, ...response } = result;
      res.status(code).json(response);
    } catch (error: any) {
      res.status(500).json({
        ok: false,
        message: `Erro do servidor: ${error.message}`,
      });
    }
  }

  public static async findOneById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const service = new AssessmentService();
      const result = await service.findOneById(id);

      const { code, ...response } = result;

      res.status(code).json(response);
    } catch (error: any) {
      res.status(500).json({
        ok: false,
        message: `Erro do servidor: ${error.message}`,
      });
    }
  }

  public static async update(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { title, description, grade } = req.body;

      const service = new AssessmentService();
      const result = await service.update(id, { title, description, grade });

      const { code, ...response } = result;
      res.status(code).json(response);
    } catch (error: any) {
      res.status(500).json({
        ok: false,
        message: `Erro do servidor: ${error.message}`,
      });
    }
  }

  public static async remove(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const service = new AssessmentService();
      const result = await service.remove(id);

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
