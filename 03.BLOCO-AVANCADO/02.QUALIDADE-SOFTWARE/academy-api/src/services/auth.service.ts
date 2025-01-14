import { prisma } from "../database/prisma.database";
import { LoginDto } from "../dtos";
import { ResponseApi } from "../types";
import { Bcrypt } from "../utils/bcrypt";
import { JWT } from "../utils/jwt";
import { AuthStudent } from "../types/student.type";

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
    const jwt = new JWT();

    const payload: AuthStudent = {
      id: student.id,
      name: student.name,
      email: student.email,
      type: student.type,
    };

    const token = jwt.generateToken(payload);

    // 4 - Feed de sucesso retornando o token (uid)
    return {
      ok: true,
      code: 200,
      message: "Login efetuado com sucesso!",
      data: {
        student: payload,
        token,
      },
    };
  }
}
