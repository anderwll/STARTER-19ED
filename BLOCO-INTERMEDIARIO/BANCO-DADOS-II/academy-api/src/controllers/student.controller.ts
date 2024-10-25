import { Request, response, Response } from "express";
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
      const result = await service.create(data);

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

  public static async findAll(req: Request, res: Response): Promise<void> {
    try {
      // 1- Pegar do query
      const { name, cpf } = req.query;

      // 2 - Chamar o responsável
      const service = new StudentService();
      const result = await service.findAll({
        name: name as string,
        cpf: cpf as string,
      });

      // 3 - Reponder para o cliente
      const { code, ...response } = result;
      res.status(code).json(response);
    } catch (error: any) {
      res.status(500).json({
        ok: false,
        message: `Erro do servidor: ${error.message}`,
      });
    }
  }

  public static async findOneById(req: Request, res: Response): Promise<void> {
    try {
      // 1- Pegar o identificador
      // /student/:id
      const { id } = req.params;

      // 2 - Chamar o responsável
      const service = new StudentService();
      const result = await service.findOneById(id);

      // 3 - Responder ao cliente
      const { code, ...response } = result;
      res.status(code).json(response);
    } catch (error: any) {
      res.status(500).json({
        ok: false,
        message: `Erro do servidor: ${error.message}`,
      });
    }
  }

  public static async update(req: Request, res: Response): Promise<void> {
    try {
      // 1 - Pegar os dados (params e do body)
      const { id } = req.params;
      const { name, password, type, age } = req.body;

      // 2 - Chamar o responsável (service)
      const service = new StudentService();
      const result = await service.update(id, { name, password, type, age });

      // 3 - Retornar para o cliente
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
