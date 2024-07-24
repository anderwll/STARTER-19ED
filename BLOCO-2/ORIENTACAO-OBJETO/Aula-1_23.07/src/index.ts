import { Pessoa } from "./interface";
import { somar, printar, maioridade } from "./funcoes";

// STRING
const nome: string = "Anderson";

// NUMBERS
const soma: number = 12;

// BOOLEANS
const ativo: boolean = true;

// NULL
const souNull: null = null;

// UNDEFINED
const naoDefinido: undefined = undefined;

// ARRAYS
const numeros: number[] = [2, 34, 1, 0];
const listaMercado: Array<string> = ["Tomate", "Cebola"];
const arrayDinamico: (string | number | boolean)[] = ["Sou string", 1, true, 1];

// OBJECT
const objetoVazio: object = {};

const pessoa: object = {
  nome: "Anderson",
  cpf: "1232130-1203",
};

const pessoaDois: object = {
  cpf: "1232130-1203",
};

// CHAMADAS DE FUNÇÕES
console.log(somar(1, 2));
console.log(maioridade(17));
printar();

// Criando minhas variaveis do tipo da interface
const joao: Pessoa = {
  nome: "Anderson",
  cpf: "12312312",
  passaporte: "",
  skills: ["HTML", "CSS"],
};

const maria: Pessoa = {
  nome: "Maria",
  cpf: "12012032103",
  skills: ["Javascript"],
};

const lucas: Pessoa = {
  nome: "asodkasodk",
  cpf: "12039120312",
};

const usuarios = [joao, maria, lucas];

usuarios.find((pessoa) => pessoa.cpf === "");
