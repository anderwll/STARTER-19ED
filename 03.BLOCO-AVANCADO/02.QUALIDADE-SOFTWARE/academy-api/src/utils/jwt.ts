import jwt from "jsonwebtoken";
import { AuthStudent } from "../types/student.type";

/**
 * @class JWT - Adaptação da biblioteca jwt
 * @see Documentação {@link https://jwt.io/}
 */
export class JWT {
  /**
   * Método para gerar um token a partir de um estudante fornecido
   * @param data Objeto no formato *AuthStudent*
   * @see {@link AuthStudent}
   * @returns Token assinado no formato jwt
   *
   * @example
   * import { JWT } from "../utils/jwt";
   *
   * const jwt = new JWT()
   * const token = jwt.generateToken(payload);
   */

  public generateToken(data: AuthStudent): string {
    if (!process.env.JWT_SECRET) {
      throw new Error("Secret not defined");
    }

    const token = jwt.sign(data, process.env.JWT_SECRET, {
      algorithm: "HS256",
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    return token;
  }

  /**
   * Método para verificação e decodificação do token recebido
   * @param token - string recibida para verificação
   * @returns Estudante em caso de sucesso
   * @returns null em caso de erro
   *
   * @example
   * import { JWT } from "../../utils/jwt";
   *
   * const jwt = new JWT();
   * const studentDecoded = jwt.verifyToken(token);
   */
  public verifyToken(token: string): AuthStudent | null {
    try {
      if (!process.env.JWT_SECRET) {
        throw new Error("Secret not defined");
      }

      const data = jwt.verify(token, process.env.JWT_SECRET) as AuthStudent;
      return data;
    } catch {
      return null;
    }
  }
}
