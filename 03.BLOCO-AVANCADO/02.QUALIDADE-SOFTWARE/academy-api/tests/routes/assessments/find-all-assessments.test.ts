import supertest from "supertest";
import { createServer } from "../../../src/express.server";
import { makeToken } from "../make-token";
import { AssessmentService } from "../../../src/services/assessments.service";
import { ResponseApi } from "../../../src/types";
import { StudentType } from "@prisma/client";

describe("GET /assesments", () => {
  const server = createServer();
  const endpoint = "/assessments";

  it("Deve retornar 401 quando não for informado o token", async () => {
    const response = await supertest(server).get(endpoint);

    expect(response).toHaveProperty("statusCode", 401);
    expect(response).toHaveProperty("body", {
      ok: false,
      message: "Não autenticado!",
    });
  });

  it("Deve retornar 401 quando for informado o token inválido", async () => {
    const response = await supertest(server)
      .get(endpoint)
      .set("Authorization", "Bearer any_token");

    expect(response).toHaveProperty("statusCode", 401);
    expect(response).toHaveProperty("body", {
      ok: false,
      message: "Não autenticado!",
    });
  });

  it("Deve retornar 200 quando informado o token válido", async () => {
    const token = makeToken({ type: StudentType.M });
    const mockService = {
      ok: true,
      code: 200,
      message: "Avaliações buscadas com sucesso !!!",
      data: [],
    };

    jest
      .spyOn(AssessmentService.prototype, "findAll")
      .mockResolvedValue(mockService);

    const response = await supertest(server)
      .get(endpoint)
      .set("Authorization", `Bearer ${token}`);

    expect(response).toHaveProperty("statusCode", 200);
  });
});
