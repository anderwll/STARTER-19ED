import { NextFunction, Request, Response } from "express";
import { JWT } from "../../utils/jwt";

// Bearer => Portador
// headers: {
//   Authorizathion: `Bearer ${token}`
// }

export class AuthMiddleware {
  public static async validate(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const authorization = req.headers.authorization; // token

    if (!authorization) {
      res.status(401).json({
        ok: false,
        message: "Não autenticado!",
      });
      return;
    }

    // Bearer aisjdmasopikdasokdp
    const [_, token] = authorization.split(" "); // => ["Bearer", "aspodkasopkdasopk"]
    // const token = authorization.split(" ")[1]

    const jwt = new JWT();
    const studentDecoded = jwt.verifyToken(token);

    if (!studentDecoded) {
      res.status(401).json({
        ok: false,
        message: "Não autenticado!",
      });
      return;
    }

    // Repassa essa informação.
    req.body.student = {
      id: studentDecoded.id,
      name: studentDecoded.name,
      email: studentDecoded.email,
      type: studentDecoded.type,
    };

    next();
  }
}
