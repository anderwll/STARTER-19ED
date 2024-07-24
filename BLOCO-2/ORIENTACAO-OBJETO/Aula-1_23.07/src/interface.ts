// Declarando minha interface
export interface Pessoa {
  nome: string;
  cpf: string;
  passaporte?: string; // Opcional ?
  skills?: Array<string>;
}
