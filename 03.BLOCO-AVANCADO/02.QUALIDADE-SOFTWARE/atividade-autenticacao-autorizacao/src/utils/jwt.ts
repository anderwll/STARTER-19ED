import { StudentToken } from "../types/student.types";
import jwt from "jsonwebtoken";

export class Jwt {
  public generateToken(student: StudentToken) {
    if (!process.env.JWT_SECRET) {
      throw new Error("Não foi definido a variavel de ambiente JWT_SECRET");
    }
    const token = jwt.sign(student, process.env.JWT_SECRET, {
      algorithm: "HS256",
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    return token;
  }

  public validateToken(token: string): StudentToken | null {
    try {
      if (!process.env.JWT_SECRET) {
        throw new Error("Não foi definido a variavel de ambiente JWT_SECRET");
      }

      const studentVerified = jwt.verify(
        token,
        process.env.JWT_SECRET
      ) as StudentToken;

      return studentVerified;
    } catch {
      return null;
    }
  }
}
