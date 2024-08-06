export interface PessoaInterface {
  nome: string;
  _cpf: string;
  endereco: string;
}

export class Pessoa {
  nome: string;
  private _cpf: string;
  protected endereco: string;

  public get getCpf(): string {
    return this._cpf;
  }

  public get getEndereco(): string {
    return this.endereco;
  }

  constructor(dados: PessoaInterface) {
    this.nome = dados.nome;
    this._cpf = dados._cpf;
    this.endereco = dados.endereco;
  }
}
