import { Request, Response } from "express";
import { prisma } from "../database/prisma.database";
import { StudentService } from "../services/student.service";
import { CreateStudentDto } from "../dtos";

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
  public static async create(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, password, type, age, cpf } = req.body;

      const data: CreateStudentDto = {
        name,
        email,
        password,
        cpf,
        type,
        age,
      };

      // Chamar o serviço responsável
      const service = new StudentService();
      const result = await service.create(req.body);

      // Retornar para o cliente as informações que o serviço retorna.
      // code | ok, message...
      const { code, ...response } = result;
      res.status(code).json(response); // { ok, message, data? }
    } catch (error: any) {
      res.status(500).json({
        ok: false,
        message: `Erro do servidor: ${error.message}`,
      });
    }
  }
}
