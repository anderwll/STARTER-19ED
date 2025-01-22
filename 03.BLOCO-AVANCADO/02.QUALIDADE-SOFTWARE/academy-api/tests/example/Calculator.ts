export class Calculator {
  public sum(v1: number, v2: number): number {
    return v1 + v2;
  }

  public subtraction(v1: number, v2: number): number {
    return v1 - v2;
  }

  public multiply(v1: number, v2: number): number {
    return v1 * v2;
  }

  public divider(v1: number, v2: number): number {
    if (v2 === 0) {
      throw new Error("Não é possível dividir por 0.");
    }

    return v1 / v2;
  }
}
