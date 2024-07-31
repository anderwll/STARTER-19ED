/**
 * Abstrair uma classe Animal
 *
 * Atributos: nome, especie, cor, idade, peso, altura
 *
 * Métodos: emitirSom, comer, dormir
 *
 */

export class Animal {
  protected nome: string;
  protected especie: string;
  protected cor: string;
  protected idade: number | string;
  protected peso: number;
  protected altura: number;

  constructor(
    nome: string,
    especie: string,
    cor: string,
    idade: number | string,
    peso: number,
    altura: number
  ) {
    this.nome = nome;
    this.especie = especie;
    this.cor = cor;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
  }

  public emitirSom(): void {
    console.log("Emitindo som...");
  }

  public comer(): string {
    console.log("Comendo...");
    return "";
  }

  public dormir(): void {
    console.log("Dormindo...");
  }
}
