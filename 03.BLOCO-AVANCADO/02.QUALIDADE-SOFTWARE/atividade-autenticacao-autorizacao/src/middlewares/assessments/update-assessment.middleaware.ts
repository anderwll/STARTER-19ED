import { NextFunction, Request, Response } from "express";

export class UpdateAssessmentMiddleware {
  public static validateTypes(
    req: Request,
    res: Response,
    next: NextFunction
  ): void {
    const { title, description, grade } = req.body;

    if (title && typeof title !== "string") {
      res.status(400).json({
        ok: false,
        message: "Titulo deve ser um texto",
      });
    }
    if (description && typeof description !== "string") {
      res.status(400).json({
        ok: false,
        message: "Descrição deve ser uma string.",
      });
      return;
    }
    if (grade && typeof grade !== "number") {
      res.status(400).json({
        ok: false,
        message: "Nota deve ser um Number.",
      });
      return;
    }

    return next();
  }

  public static validateData(req: Request, res: Response, next: NextFunction) {
    const { title, description } = req.body;

    if (title && title.length < 3) {
      res.status(400).json({
        ok: false,
        message: "Título deve conter no mínimo 4 caracteres.",
      });
    }
    if (description && description.length < 5) {
      res.status(400).json({
        ok: false,
        message: "Descrição deve conter no minimo 6 caracteres.",
      });
    }
    return next();
  }
}
