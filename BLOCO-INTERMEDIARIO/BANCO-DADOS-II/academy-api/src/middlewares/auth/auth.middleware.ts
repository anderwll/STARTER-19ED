import { NextFunction, Request, Response } from "express";
import { AuthService } from "../../services";

export class AuthMiddleware {
  public static async validate(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const token = req.headers.authorization; // token

    if (!token) {
      res.status(401).json({
        ok: false,
        message: "Não autenticado!",
      });
      return;
    }

    const service = new AuthService();
    const isValidStudent = await service.validateToken(token);

    if (!isValidStudent) {
      res.status(401).json({
        ok: false,
        message: "Não autenticado!",
      });
      return;
    }

    // Repassa essa informação.
    req.body.student = {
      id: isValidStudent.id,
      type: isValidStudent.type,
    };

    next();
  }
}
