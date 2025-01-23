import { Student, StudentType } from "@prisma/client";
import { CreateStudentDto } from "../../../src/dtos";
import { StudentService } from "../../../src/services/student.service";
import { prismaMock } from "../../config/prisma.mock";
import { randomUUID } from "crypto";
import { StudentMock } from "../mocks/student.mock";
import { Bcrypt } from "../../../src/utils/bcrypt";

// Testar e-mail unico - OK
// Testar CPF unico
// Estudante cadastrado com sucesso

const makeCreateStudent = (params?: Partial<CreateStudentDto>) => ({
  name: params?.name || "new_name",
  email: params?.email || "new_email",
  password: "new_password",
  type: params?.type || StudentType.T,
  age: 10,
  cpf: "new_cpf",
});

describe("Create Student Service", () => {
  // Sistema sob test
  const createSut = () => new StudentService();

  it("Deve retornar e-mail em uso quando for fornecido um e-mail já utilizado.", async () => {
    // Arrange
    const sut = createSut();
    const dto = makeCreateStudent({ email: "any_email" });
    const studentMock = StudentMock.build({ email: "any_email" });

    prismaMock.student.findFirst.mockResolvedValue(studentMock);

    // Act
    const result = await sut.create(dto);

    // Asserts
    // expect(result.ok).toBe(false);
    expect(result.ok).toBeFalsy(); // == FALSE
    expect(result.code).toBe(409);
    expect(result).toHaveProperty("message", "E-mail já está em uso.");
  });

  it("Deve retornar cpf em uso quando for fornecido um cpf já utilizado.", async () => {
    const sut = createSut();
    const dto = makeCreateStudent({ cpf: "any_cpf" });
    const studentMock = StudentMock.build({ cpf: dto.cpf });
    prismaMock.student.findFirst.mockResolvedValue(studentMock);

    const response = await sut.create(dto);

    // Se retornar um objeto ele tem que estar nesse formato!
    expect(response).toEqual({
      ok: false,
      code: 409,
      message: "CPF já está em uso.",
    });

    // Verificar se o a função foi chamada uma vez (executada)
    expect(prismaMock.student.findFirst).toHaveBeenCalledTimes(1);
  });

  it("Deve retornar o estudante criado quando sucesso", async () => {
    const sut = createSut();
    const dto = makeCreateStudent();
    const studentMock = StudentMock.build();
    prismaMock.student.findFirst.mockResolvedValue(null);

    // Mock do Bcrypt
    // jest.espião(Classe, "método").mockResolvedValue(valor_mock)
    jest.spyOn(Bcrypt.prototype, "generateHash").mockResolvedValue("any_hash");
    prismaMock.student.create.mockResolvedValue(studentMock);

    const response = await sut.create(dto);

    expect(response.data).toEqual({
      id: expect.any(String),
      name: studentMock.name,
      email: studentMock.email,
      cpf: studentMock.cpf,
      age: studentMock.age,
      type: studentMock.type,
    });
    expect(response.ok).toBe(true);
    expect(response.code).toBe(201);
    expect(response.message).toBe("Estudante cadastrado com sucesso!");

    // Verificar se os métodos foram chamados pelo menos uma vez
    expect(Bcrypt.prototype.generateHash).toHaveBeenCalledTimes(1);
    expect(prismaMock.student.findFirst).toHaveBeenCalledTimes(1);
    expect(prismaMock.student.create).toHaveBeenCalledTimes(1);
  });
});
