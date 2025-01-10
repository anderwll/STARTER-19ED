import { NextFunction, Request, Response } from "express";
import { Jwt } from "../../utils/jwt";

export class AuthMiddleware {
  public static async validate(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const authorization = req.headers.authorization; // Bearer token -> `Bearer ${token}`

    if (!authorization) {
      res.status(401).json({
        ok: false,
        message: "Não autenticado!",
      });
      return;
    }

    const token = authorization.split(" ")[1]; // [bearer, token]

    if (!token) {
      res.status(401).json({
        ok: false,
        message: "Não autenticado!",
      });
      return;
    }

    const jwt = new Jwt();

    const studentValidated = jwt.validateToken(token);

    if (!studentValidated) {
      res.status(401).json({
        ok: false,
        message: "Não autenticado!",
      });
      return;
    }

    // Repassa essa informação.
    req.authStudent = {
      id: studentValidated.id,
      name: studentValidated.name,
      email: studentValidated.email,
      type: studentValidated.type,
    };

    next();
  }
}
