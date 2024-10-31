import { NextFunction, Request, Response } from "express";

export class CreateAssessmentMiddleware {
  public static validateRequired(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { title, grade, studentId, student } = req.body;

    console.log("Middleware ->", student);

    if (!title) {
      res.status(400).json({
        ok: false,
        message: "Título é obrigatório.",
      });
      return;
    }
    if (!grade) {
      res.status(400).json({
        ok: false,
        message: "Nota é obrigatória.",
      });
      return;
    }
    if (!studentId) {
      res.status(400).json({
        ok: false,
        message: "ID do estudante é obrigatório.",
      });
      return;
    }
    return next();
  }

  public static validateTypes(req: Request, res: Response, next: NextFunction) {
    const { title, description, grade, studentId } = req.body;

    if (typeof title !== "string") {
      res.status(400).json({
        ok: false,
        message: "Título deve ser uma string.",
      });
      return;
    }
    if (description && typeof description !== "string") {
      res.status(400).json({
        ok: false,
        message: "Descrição deve ser uma string.",
      });
      return;
    }
    if (typeof grade !== "number") {
      res.status(400).json({
        ok: false,
        message: "Nota deve ser um Number.",
      });
      return;
    }
    if (typeof studentId !== "string") {
      res.status(400).json({
        ok: false,
        message: "ID do estudante deve ser uma string.",
      });
      return;
    }
    const regexUuid =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

    if (!regexUuid.test(studentId)) {
      res.status(400).json({
        ok: false,
        message: "Identificador precisa ser um UUID.",
      });
    }
    return next();
  }

  public static validateData(req: Request, res: Response, next: NextFunction) {
    const { title, description } = req.body;

    if (title.length < 3) {
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
