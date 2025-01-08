import jwt from "jsonwebtoken";
import { AuthStudent } from "../types/student.type";

/**
 *  jwt.sign(dados, palavraSecreta, configs) // Gerar um token
 *  jwt.decode() // Decodificar o token
 *  jwt.verify() // Verificarmos e decodificarmos o token
 */

export class JWT {
  // Gerar o token
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

  // Verificar o token
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
