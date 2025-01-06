import { Animal } from "./Animal";

export class Leao extends Animal {
  ///....
  private _pelagem: string;

  constructor(
    nome: string,
    especie: string,
    cor: string,
    peso: number,
    altura: number,
    pelagem: string
  ) {
    super(nome, especie, cor, "N/A", peso, altura);
    this._pelagem = pelagem;
  }

  public alterarIdade(novaIdade: number): void {
    this.idade = novaIdade;
  }

  // POLIMORFISMO
  public emitirSom() {
    // Tem o mesmo nome que herdou do pai (Animal)
    // Porém com um comportamento (lógica) diferente, particular dele.
    console.log("Rugidooooooo..........");
  }

  public comer(tipoDeAlimento: string): string {
    console.log("Leão comendo ....", tipoDeAlimento);
    return `Leão comendo.... ${tipoDeAlimento}`;
  }
}
