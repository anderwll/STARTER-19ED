import Item from "./Item";

export interface DataPedito {
  items: Item[];
  valorTotal: number;
}

export default class Pedido {
  items: Item[];
  valorTotal?: number;

  constructor(parametro: DataPedito) {
    this.items = parametro.items;
    this.somarValor();
  }

  public set adicionarItem(parametro: DataPedito) {
    if (parametro.items.length === 0) {
      throw new Error("Não existe itens no pedido");
    }
    this.items = parametro.items;
    this.somarValor();
  }

  private somarValor() {
    this.valorTotal = this.items.reduce((total, item) => total + item.valor, 0);
  }

  public get listarPedidos() {
    const dataPedido: DataPedito = {
      items: this.items,
      valorTotal: this.valorTotal!,
    };

    const respostaGet = console.log(dataPedido);

    return respostaGet;
  }
}
