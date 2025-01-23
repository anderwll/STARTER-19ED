import { Student, StudentType } from "@prisma/client";
import { QueryFilterDto } from "../../../src/dtos";
import { StudentService } from "../../../src/services/student.service";
import { prismaMock } from "../../config/prisma.mock";
import { StudentMock } from "../mocks/student.mock";

// Busca de todos os estudante pelo nome
// Busca de todos os estudantes

describe("Find All Student", () => {
  const createSut = () => new StudentService();

  it("Deve retornar um estudante, quando filtrado pelo nome Nome Qualquer", async () => {
    // Arrange (SUT)
    const sut = createSut();
    const queries: QueryFilterDto = {
      name: "Nome Qualquer",
    };

    const studentsMock = Array.from({ length: 1 }, (_, index) => {
      return StudentMock.build({
        email: `email${index}@gmail.com`,
        cpf: `cpf-${index}`,
      });
    });

    prismaMock.student.findMany.mockResolvedValue(studentsMock);

    // Act
    const result = await sut.findAll(queries);

    // Asserts
    expect(result.ok).toBeTruthy(); // === true
    expect(result.code).toBe(200);
    expect(result.message).toBe("Estudantes buscados com sucesso!");

    expect(result.data).toHaveLength(1);
    expect(result.data).toEqual([
      {
        id: expect.any(String),
        name: "any_name",
        email: "email0@gmail.com",
        cpf: "cpf-0",
        age: 18,
        type: StudentType.T,
        assesments: undefined,
      },
    ]);
  });

  it("Deve retornar todos os estudantes", async () => {
    // Arrange
    const sut = createSut();
    const studentsMock = Array.from({ length: 10 }, (_, index) => {
      return StudentMock.build({
        email: `email${index}@gmail.com`,
        cpf: `cpf-${index}`,
      });
    });
    prismaMock.student.findMany.mockResolvedValue(studentsMock);

    // Act
    const result = await sut.findAll();

    // Asserts
    expect(result.ok).toBeTruthy(); // === true
    expect(result.code).toBe(200);
    expect(result.message).toBe("Estudantes buscados com sucesso!");

    expect(result.data).toHaveLength(10);
    result.data.forEach((student: Student, index: number) => {
      expect(student).toEqual({
        id: expect.any(String),
        name: "any_name",
        email: expect.any(String),
        cpf: `cpf-${index}`,
        age: 18,
        type: StudentType.T,
        assesments: undefined,
      });
    });
  });
});
