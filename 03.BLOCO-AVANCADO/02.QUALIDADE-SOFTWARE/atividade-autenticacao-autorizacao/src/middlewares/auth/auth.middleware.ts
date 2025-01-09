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
    const studentFound = await service.validateToken(token);

    if (!studentFound) {
      res.status(401).json({
        ok: false,
        message: "Não autenticado!",
      });
      return;
    }

    // Repassa essa informação.
    req.body.student = {
      id: studentFound.id,
      type: studentFound.type,
    };

    req.body.outro = "DEU BOM";

    next();
  }
}
