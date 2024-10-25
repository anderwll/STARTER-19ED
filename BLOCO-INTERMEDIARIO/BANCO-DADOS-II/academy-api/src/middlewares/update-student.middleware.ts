import { StudentType } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

export class UpdateStudentMiddleware {
  public static validateTypes(req: Request, res: Response, next: NextFunction) {
    const { name, password, type, age } = req.body;

    if (name && typeof name !== "string") {
      res.status(400).json({
        ok: false,
        message: "Nome deve ser uma string.",
      });
    }

    if (password && typeof password !== "string") {
      res.status(400).json({
        ok: false,
        message: "Senha deve ser uma string.",
      });
    }

    if (
      type &&
      type !== StudentType.F &&
      type !== StudentType.M &&
      type !== StudentType.T
    ) {
      res.status(400).json({
        ok: false,
        message: "Tipo deve ser T, M, F.",
      });
    }

    if (age && typeof age !== "number") {
      res.status(400).json({
        ok: false,
        message: "Idade deve ser um number.",
      });
    }

    return next();
  }

  public static validateData(req: Request, res: Response, next: NextFunction) {
    const { name, password } = req.body;

    if (name && name.length < 3) {
      res.status(400).json({
        ok: false,
        message: "Nome deve conter no minimo 3 caracteres.",
      });
    }

    if (password && password.length < 4) {
      res.status(400).json({
        ok: false,
        message: "Senha deve conter no minimo 4 caracteres.",
      });
    }

    return next();
  }
}
