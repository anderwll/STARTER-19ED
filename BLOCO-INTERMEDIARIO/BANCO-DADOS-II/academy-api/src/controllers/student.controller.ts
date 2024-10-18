import { Request, Response } from "express";
import { prisma } from "../database/prisma.database";

// SELECT WHERE
// findFirts = ESTUDANTE | null
// findUnique = ESTUDATE | null
// findFirtsOrThrow = ESTUDANTE | Error
// findMany = ESTUDANTE[] | []

// INSET INTO | VALUES [(""), ("")] => SELECT
// create => Cria um | Retorna o dado criado
// createMany => Cria vários ESTUDANTE[] | Não retorna nada
// createManyAndReturn => Cria vários ESTUDANTE[] |Retorna os dados criados

export class StudentController {
  public static async create(req: Request, res: Response): any {
    const { name, email, password, type, age, cpf } = req.body;

    // 2 - Verificarmos as colunas unicas
    const student = await prisma.student.findFirst({
      where: {
        OR: [{ email: email }, { cpf: cpf }], // = // EMAIL OU CPF
      },
    });

    // Valida E-mail e CPF unicos
    if (student) {
      if (student.email === email) {
        return res.status(409).json({
          ok: false,
          message: "E-mail já esta em uso.",
        });
      }

      if (student.cpf === cpf) {
        return res.status(409).json({
          ok: false,
          message: "CPF já esta em uso.",
        });
      }
    }

    // 3 - Criação do nosso estudante no banco de dados
    const studentCreated = await prisma.student.create({
      data: {
        name: name,
        cpf: cpf,
        email: email,
        password: password,
        age: age,
      },
    });

    return res.status(201).json({
      ok: true,
      message: "Estudante cadastrado com sucesso!",
      data: studentCreated,
    });
  }
}
