import { NextFunction, Request, Response } from "express";

/**
 * req.params;   /student/:id
 * req.query;  /student?name=ander
 *
 */

export class FindAllStudentMidlleware {
  static validateTypes(req: Request, res: Response, next: NextFunction) {
    const { name, cpf } = req.query;

    if (name && typeof name !== "string") {
      res.status(400).json({
        ok: false,
        message: "Nome deve ser uma string.",
      });
    }

    if (cpf && typeof cpf !== "string") {
      res.status(400).json({
        ok: false,
        message: "CPF deve ser uma string.",
      });
    }

    next();
  }
}
