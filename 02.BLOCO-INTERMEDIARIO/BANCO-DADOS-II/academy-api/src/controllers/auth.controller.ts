import { Response, Request } from "express";
import { AuthService } from "../services";

export class AuthController {
  public static async login(req: Request, res: Response): Promise<void> {
    try {
      // 1 - Pegar os dados
      const { email, password } = req.body;

      // 2 - Chamara o responsável
      const service = new AuthService();
      const result = await service.login({ email, password });

      // 3 - Response para cliente
      const { code, ...response } = result;
      res.status(code).json(response);
    } catch (error: any) {
      res.status(500).json({
        ok: false,
        message: `Erro do servidor: ${error.message}`,
      });
    }
  }
}
