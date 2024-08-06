export interface DataItem {
  valor: number;
  nome: string;
  descricao: string;
}

class Item {
  valor: number;
  nome: string;
  descricao: string;

  constructor(parametro: DataItem) {
    this.valor = parametro.valor;
    this.nome = parametro.nome;
    this.descricao = parametro.descricao;
  }

  public set setValor(valor: number) {
    if (valor <= 25) {
      throw new Error("Valor inferior ao exigido");
    }

    this.valor = valor;
  }
  public set setNome(nome: string) {
    if (nome.length <= 3) {
      throw new Error("Valor inferior ao exigido");
    }

    this.nome = nome;
  }

  public set setDescricao(descricao: string) {
    if (descricao.length <= 3) {
      throw new Error("Valor inferior ao exigido");
    }

    this.descricao = descricao;
  }

  public get getItem() {
    const dataItem: DataItem = {
      valor: this.valor,
      nome: this.nome,
      descricao: this.descricao,
    };
    return dataItem;
  }
}

export default Item;
