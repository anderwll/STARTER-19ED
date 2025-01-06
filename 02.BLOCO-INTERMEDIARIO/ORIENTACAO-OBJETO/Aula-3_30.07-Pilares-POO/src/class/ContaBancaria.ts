/**
 * CONTA BANCARIA
 *
 * nome, cpf, tipoConta, saldo
 *
 *
 * ENCAPSULAMENTO
 *
 * public = público (default)
 * protected = dentro da classe e quem herda
 * private = somente dentro da classe, (usamos o _ para dizer que é privado)
 *
 *
 * getters()
 * setters()
 */

// | Para tipagem
// || Validação + atribuição

type TipoConta = "CORRENTE" | "POUPANCA";

export interface CriarConta {
  nome: string;
  cpf: string;
  tipoConta: TipoConta;
  saldo?: number;
}

export class ContaBancaria {
  // ATRIBUTOS
  private _nome: string;
  private _cpf: string;
  private _tipoConta: TipoConta;
  private _saldo: number;

  // Getters sempre deve retornar algo.
  // Usamos para diponibilizar como leitura os valores dos nossos atributos.
  public get nome(): string {
    return this._nome;
  }

  public get getCpf(): string {
    return this._cpf;
  }

  public get tipoConta(): TipoConta {
    return this._tipoConta;
  }

  public get saldo(): number {
    return this._saldo;
  }

  // Setters utilizamos para modificarmos os valores dos nossos atributos
  // Podemos criar validações dentro dele.
  // Obrigátorio recever o novo valor (parametro)
  public set nome(novoNome: string) {
    if (novoNome.length >= 3) {
      this._nome = novoNome;
    } else {
      console.log("Opa, para alterar, temq ter 3 caracteres....");
    }
  }

  public set saldo(novoSaldo: number) {
    if (novoSaldo <= this._saldo) {
      console.log(
        "Para sobrescrever o saldo, ele precisa ser maior que o atual"
      );
      return;
    }

    this._saldo = novoSaldo;
  }

  constructor(parametro: CriarConta) {
    this._nome = parametro.nome;
    this._cpf = parametro.cpf;
    this._tipoConta = parametro.tipoConta;

    if (parametro.saldo) {
      this._saldo = parametro.saldo;
    } else {
      this._saldo = 0;
    }
  }

  // METODOS
  public mostrarSaldo() {
    console.log(`Seu saldo é de: R$ ${this._saldo}`);
  }

  public depositar(valor: number): void {
    if (valor <= 0) {
      console.log("O valor precisa ser maior que R$0,00");
      return;
    }

    this._saldo += valor;
    this.mostrarSaldo();
  }

  public mostrarConta() {
    return {
      nome: this._nome,
      //   cpf: this._cpf,
      tipoConta: this._tipoConta,
      saldo: this._saldo,
    };
  }
}
