import { Casa } from "./class/Casa";
import { Cliente } from "./class/Cliente";

console.log("------------------ Class Casa ------------------");

const casaUm = new Casa(); // new AlgumaCoisa() = instanciar

casaUm.janelas = 3;
casaUm.largura = 5;
casaUm.altura = 2.5;

console.log("CASA 1 --> ", casaUm);
casaUm.abrirJanela();
casaUm.fecharJanela("DA CASA 1...");

const casaDois = new Casa(); // new AlgumaCoisa() = instanciar

casaDois.janelas = 5;
casaDois.largura = 7;
casaDois.altura = 3;

console.log("CASA 2 --> ", casaDois);
casaDois.abrirJanela();
casaDois.fecharJanela("DA CASA 2...");

console.log("------------------ Class Cliente ------------------");

const clienteUm = new Cliente("Cliente 1", 12312321, "ferramentas");

console.log(clienteUm);

clienteUm.nome = "Agora mudou";
console.log(clienteUm);

clienteUm.mostrarCliente();
