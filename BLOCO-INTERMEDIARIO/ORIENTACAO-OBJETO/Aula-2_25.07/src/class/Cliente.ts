type Setor = "moveis" | "ferramentas" | "eletronicos";

export class Cliente {
  // ATRIBUTOS
  nome: string;
  telefone: number;
  setor: Setor;

  // CONSTRUTOR
  constructor(nomeQualquer: string, phone: number, setor: Setor) {
    this.nome = nomeQualquer;
    this.telefone = phone;
    this.setor = setor;
  }

  // METODOS
  mostrarCliente(): void {
    console.log("mostrarCliente()");
    console.log(this); // Contém tudo que tem na classe
  }
}
