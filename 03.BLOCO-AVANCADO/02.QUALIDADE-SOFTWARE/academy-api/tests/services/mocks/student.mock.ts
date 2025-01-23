import { Student, StudentType } from "@prisma/client";
import { randomUUID } from "crypto";

interface StudentMockParams {
  email?: string;
  cpf?: string;
  type?: StudentType;
}

/**
 * - Mock do retorno do estudante
 * - Pode ser utilizado em outros lugares para testes de services.
 */

export class StudentMock {
  // Método para construir um estudante mockado
  public static build(params?: StudentMockParams): Student {
    return {
      id: randomUUID(),
      name: "any_name",
      email: params?.email || "any_email",
      cpf: params?.cpf || "any_cpf",
      age: 18,
      password: "pass123",
      type: params?.type || StudentType.T,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
}
