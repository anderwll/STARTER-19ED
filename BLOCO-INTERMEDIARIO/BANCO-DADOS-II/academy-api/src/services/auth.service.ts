import { randomUUID } from "crypto";
import { prisma } from "../database/prisma.database";
import { LoginDto } from "../dtos";
import { ResponseApi } from "../types";
import { Bcrypt } from "../utils/bcrypt";
import { Student } from "@prisma/client";

export class AuthService {
  public async login(data: LoginDto): Promise<ResponseApi> {
    const { email, password } = data;

    // 1 - Verificar o email
    const student = await prisma.student.findUnique({
      where: { email },
    });

    if (!student) {
      return {
        ok: false,
        code: 404,
        message: "E-mail ou senha incorretos. (email)",
      };
    }

    // 2 - Verficar a senha (hash - bcrypt)
    const hash = student.password;
    const bcrypt = new Bcrypt();
    const isValidPassword = await bcrypt.verify(password, hash);

    if (!isValidPassword) {
      return {
        ok: false,
        code: 404,
        message: "E-mail ou senha incorretos. (password)",
      };
    }

    // 3 - Gerar o token (uid)
    const token = randomUUID();

    // 4 - Atualizar a coluna authToken
    await prisma.student.update({
      where: { id: student.id },
      data: {
        authToken: token,
      },
    });

    // 5 - Feed de sucesso retornando o token (uid)
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
