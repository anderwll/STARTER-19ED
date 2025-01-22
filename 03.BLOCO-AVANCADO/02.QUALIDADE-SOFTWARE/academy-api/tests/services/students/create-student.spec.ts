import { Student, StudentType } from "@prisma/client";
import { CreateStudentDto } from "../../../src/dtos";
import { StudentService } from "../../../src/services/student.service";
import { prismaMock } from "../../config/prisma.mock";
import { randomUUID } from "crypto";

// Testar e-mail unico - OK
// Testar CPF unico
// Estudante cadastrado com sucesso

const studentMock: Student = {
  id: randomUUID(),
  name: "any_name",
  email: "any_email",
  cpf: "any_cpf",
  age: 18,
  password: "pass123",
  type: StudentType.T,
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe("Create Student Service", () => {
  // Sistema sob test
  const createSut = () => new StudentService();

  it("Deve retornar e-mail em uso quando for fornecido um e-mail já utilizado.", async () => {
    // Arrange
    const sut = createSut();
    const dto: CreateStudentDto = {
      name: "Qualquer nome",
      email: "any_email",
      cpf: "any_cpf",
      password: "senha123",
      type: StudentType.T,
    };

    prismaMock.student.findFirst.mockResolvedValue(studentMock);

    // Act
    const result = await sut.create(dto);

    // Asserts
    // expect(result.ok).toBe(false);
    expect(result.ok).toBeFalsy(); // == FALSE
    expect(result.code).toBe(409);
    expect(result).toHaveProperty("message", "E-mail já está em uso.");
  });
});
