import { randomUUID } from "crypto";
import { prisma } from "../database/prisma.database";
import { LoginDto } from "../dtos";
import { ResponseApi } from "../types";
import { Student } from "@prisma/client";

export class AuthService {
  public async login(data: LoginDto): Promise<ResponseApi> {
    const { email, password } = data;

    const student = await prisma.student.findUnique({
      where: { email },
    });

    if (!student) {
      return {
        ok: false,
        code: 404,
        message: "E-mail ou senha incorretos.",
      };
    }

    if (password !== student.password) {
      return {
        ok: false,
        code: 404,
        message: "E-mail ou senha incorretos.",
      };
    }

    const token = randomUUID();

    await prisma.student.update({
      where: { id: student.id },
      data: {
        authToken: token,
      },
    });

    return {
      ok: true,
      code: 200,
      message: "Login efetuado com sucesso!",
      data: { token },
    };
  }

  public async validateToken(token: string): Promise<Student | null> {
    const student = await prisma.student.findFirst({
      where: { authToken: token },
    });

    return student;
  }
}
