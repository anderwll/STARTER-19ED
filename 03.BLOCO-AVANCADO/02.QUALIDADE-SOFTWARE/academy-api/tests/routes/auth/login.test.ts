import supertest from "supertest";
import { StudentMock } from "../../services/mocks/student.mock";
import { prismaMock } from "../../config/prisma.mock";
import { createServer } from "../../../src/express.server";
import { AuthService } from "../../../src/services";
import { Bcrypt } from "../../../src/utils/bcrypt";

/**
 * it.skip => Pular esse teste
 * it.only => Roda somente esse teste
 */

describe("POST /login", () => {
  // SUT
  const server = createServer();
  const endpoint = "/login";

  it("Deve retornar 400 quando não informado um e-mail no body", async () => {
    // Arrange - empty body
    const body = {};

    // Act
    const response = await supertest(server).post(endpoint).send(body);

    // Asserts
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      ok: false,
      message: "E-mail é obrigatório!",
    });
  });

  it("Deve retornar 400 quando não informado uma senha no body", async () => {
    // Arrange - empty body
    const body = { email: "email@email.com" };

    // Act
    const response = await supertest(server).post(endpoint).send(body);

    // Asserts
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      ok: false,
      message: "Senha é obrigatório!",
    });
  });

  it("Deve retornar BadRequest quando não informado um email do tipo string", async () => {
    // Arrange
    const body = { email: 1, password: "senha123" };

    // Act
    const response = await supertest(server).post(endpoint).send(body);

    // Asserts
    expect(response).toHaveProperty("statusCode", 400);
    expect(response.body.ok).toBeFalsy();
    expect(response.body.message).toBe("E-mail deve ser uma string!");
  });

  it("Deve retornar BadRequest quando não informado uma senha do tipo string", async () => {
    // Arrange
    const body = { email: "email@certo.com", password: [] };

    // Act
    const response = await supertest(server).post(endpoint).send(body);

    // Asserts
    expect(response).toHaveProperty("statusCode", 400);
    expect(response.body.ok).toBeFalsy();
    expect(response.body.message).toBe("Senha deve ser uma string!");
  });

  // Exemplo mockando o `Service`
  it("Deve retornar 200 quando fornecido um body válido - Mock Service", async () => {
    // Arrange
    const body = { email: "email@certo.com", password: "senha-certa" };
    // Mock do serviço
    const mockAuth = {
      ok: true,
      code: 200,
      message: "Login efetuado com sucesso!",
      data: {
        student: {},
        token: "any_token",
      },
    };
    jest.spyOn(AuthService.prototype, "login").mockResolvedValueOnce(mockAuth);

    // Act
    const response = await supertest(server).post(endpoint).send(body);

    // Asserts
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      ok: true,
      message: "Login efetuado com sucesso!",
      data: {
        student: expect.any(Object),
        token: expect.any(String),
      },
    });
  });

  // Exemplo mockando o `Prisma`
  it("Deve retornar 200 quando fornecido um body válido - Mock Prisma e Bcrypt", async () => {
    // Arrange
    const body = { email: "email@certo.com", password: "senha-certa" };
    // Mock do Prisma
    prismaMock.student.findUnique.mockResolvedValueOnce(StudentMock.build());
    // Mock do Bcrypt.verify
    jest.spyOn(Bcrypt.prototype, "verify").mockResolvedValue(true);

    // Act
    const response = await supertest(server).post(endpoint).send(body);

    // Asserts
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      ok: true,
      message: "Login efetuado com sucesso!",
      data: {
        student: expect.any(Object),
        token: expect.any(String),
      },
    });
  });

  it("Deve retornar 500 quando houver uma exceção - erro", async () => {
    // Arrage
    const body = { email: "email@certo.com", password: "senha-certa" };

    // Exemplo Error no Service
    // jest
    //   .spyOn(AuthService.prototype, "login")
    //   .mockRejectedValue(new Error("Exceção !!"));

    // Exemplo Error no Prisma (método)
    prismaMock.student.findUnique.mockRejectedValueOnce(
      new Error("Exceção !!")
    );

    // Act
    const response = await supertest(server).post(endpoint).send(body);

    // Asserts
    expect(response.statusCode).toBe(500);
    expect(response.body).toEqual({
      ok: false,
      message: "Erro do servidor: Exceção !!",
    });
  });
});
