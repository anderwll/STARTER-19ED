import { NextFunction, Response, Request } from "express";

export class LoginMiddleware {
  // obrigatorio
  public static validateRequired(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { email, password } = req.body;

    if (!email) {
      res.status(400).json({
        ok: false,
        message: "E-mail é obrigatório!",
      });
      return;
    }

    if (!password) {
      res.status(400).json({
        ok: false,
        message: "Senha é obrigatório!",
      });
      return;
    }

    next();
  }

  // tipos
  public static validateTypes(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    if (typeof email !== "string") {
      res.status(400).json({
        ok: false,
        message: "E-mail deve ser uma string!",
      });
      return;
    }

    if (typeof password !== "string") {
      res.status(400).json({
        ok: false,
        message: "Senha deve ser uma string!",
      });
      return;
    }

    next();
  }
}
