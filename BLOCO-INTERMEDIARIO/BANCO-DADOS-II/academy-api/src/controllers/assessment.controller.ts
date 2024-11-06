import { Request, response, Response } from "express";
import { CreateAssessmentDto } from "../dtos/assessment.dto";
import { AssessmentService } from "../services/assessments.service";
import { log } from "console";

export class AssessmentController {
  public static async create(req: Request, res: Response): Promise<void> {
    try {
      const { title, description, grade, student } = req.body; // Validado

      const data: CreateAssessmentDto = {
        title,
        description,
        grade,
        studentId: student.id,
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

  public static async findAll(req: Request, res: Response): Promise<void> {
    try {
      const { student } = req.body; // TOKEN => { student: { id, type } } QUERY => ?studentId=
      const { page, take } = req.query; // string

      const service = new AssessmentService();
      const result = await service.findAll(student.id, {
        page: page ? Number(page) - 1 : undefined, // converter p/ number
        take: take ? Number(take) : undefined,
      });

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
