import { Animal } from "./class/Animal";
import { ContaBancaria, CriarConta } from "./class/ContaBancaria";
import { Leao } from "./class/Leao";

console.log("SISTEMA BANCARIO");

const dados: CriarConta = {
  nome: "João da Silva",
  cpf: "102913213",
  tipoConta: "CORRENTE",
};

const contaUm = new ContaBancaria(dados);

// console.log(contaUm);

// contaUm.nome = "Gabriela Silva Santos Perreira";
// contaUm.saldo = -1000;

// console.log(contaUm);

// contaUm.saldo = 500;

contaUm.mostrarSaldo();

// Apenas consigo acessar e ler o valor (GETTER)
const nome = contaUm.nome;
const cpf = contaUm.getCpf;

const clienteUm = {
  nome: contaUm.nome,
  cpf: contaUm.getCpf,
  tipoConta: contaUm.tipoConta,
  saldo: contaUm.saldo,
};

console.log(clienteUm);

// Podemos alterar usando setters
contaUm.nome = "Anderson";
contaUm.saldo = 10;

contaUm.depositar(0);

console.log(contaUm.mostrarConta());

// const animal = new Animal("Rei Leão", "Felino", "Carramelo", 5, 50, 1);

const reiLeao = new Leao(
  "Rei Leão",
  "Felino",
  "Carramelo",
  // 5,
  50,
  1,
  "Pelagem boa"
);

reiLeao.dormir();
reiLeao.comer();
reiLeao.emitirSom();
