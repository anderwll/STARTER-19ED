import { Calculator } from "./Calculator";

describe("Calculator", () => {
  // test
  // it
  const createSut = () => {
    return new Calculator();
  };

  test("A classe Calculadora deve existir", () => {
    // Arrange - SUT (System Under Test, Sistema sob testes)
    const sut = createSut();

    // Act -  Execução do método (não é necessário)
    // Assert - Validações
    expect(sut).toBeDefined();
    expect(sut).toBeInstanceOf(Calculator);
  });

  test("Deve retornar 2 quando somar 1 e 1", () => {
    // Aranjar
    const sut = createSut();

    // Agir
    const response = sut.sum(1, 1); // v1 e v2

    // Afirmar/validar
    expect(response).toBe(2);
  });

  test("Deve retornar 5 quando subtraido 10 e 5", () => {
    const sut = createSut();

    const response = sut.subtraction(10, 5);

    // espera-se que minha responsta seja = a 5
    expect(response).toBe(5);
    expect(response).toEqual(5); // {}
  });

  test("Deve retornar Error quando dividido 1 e 0", () => {
    // Arrange
    const sut = createSut();

    // Act
    /**
     * É necessário retornar em um callback,
     * para que o expect seja capaz de atribuir
     * esse bloco de código em um try/catch e assim consiga captura a exeção.
     */
    const response = () => sut.divider(1, 0);

    // Assert
    expect(response).toThrow("Não é possível dividir por 0.");
  });

  test("Dever retornar 2 quando dividido 4 e 2", () => {
    const sut = createSut();

    const response = sut.subtraction(4, 2);

    expect(response).toBe(2);
  });
});
