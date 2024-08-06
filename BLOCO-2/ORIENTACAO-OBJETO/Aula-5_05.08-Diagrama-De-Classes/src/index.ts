import Item, { DataItem } from "./models/Item";
import Pedido, { DataPedito } from "./models/Pedido";

const item1: DataItem = {
  valor: 25.0,
  nome: "Pizza",
  descricao: "Calabresa",
};
const item2: DataItem = {
  valor: 26.0,
  nome: "Pizza",
  descricao: "Frango Cheddar",
};

const novoItem = new Item(item1);

// console.log(novoItem.getItem);

const pedido1: DataPedito = {
  items: [item1, item2],
};

const novoPedido = new Pedido(pedido1);

novoPedido.listarPedidos;
