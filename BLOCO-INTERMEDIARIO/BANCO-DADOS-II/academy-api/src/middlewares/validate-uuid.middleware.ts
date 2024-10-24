import { NextFunction, Request, Response } from "express";

export class ValidateUuidMiddleware {
  static validate(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    // Validar o formato desse nosso id = 880e9f34-d3d7-44e2-a12e-038450cafcef
    // Regex = Expressões que buscam padrões.
    const regexUuid =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

    if (!regexUuid.test(id)) {
      res.status(400).json({
        ok: false,
        message: "Identificador precisa ser um UUID.",
      });
    }

    next();
  }
}
