// import PessoaInterface from "./interfaces/Pessoa";
import { Pessoa } from "./interfaces/Pessoa";
import { Cliente } from "./types/Cliente";

// TESTE SE DEU BOM

// console.log("Eba deu bom");

// INTERFACES

function criarPessoa(pessoa: Pessoa): void {
  console.log("Criando pessoa...");
  console.log(pessoa);
}

const anderson = {
  nome: "Anderson",
  email: "ander@mail.com",
  senha: "senha123",
  passaporte: 111,
};

// criarPessoa(anderson);

// TYPES

function mostraCliente(cliente: Cliente): void {
  console.log(`O nome do clinte é: ${cliente.nome}`);
  console.log(`O telefone do clinte é: ${cliente.telefone}`);
}

const cliente: Cliente = {
  nome: "Cliente 1",
  telefone: 1213213123,
  setor: "ferramentas",
};

// mostraCliente(cliente);

// PARADIGMAS DE PROGRAMAÇÃO

// - Imperativo

let numberss = [1, 2, 3, 4, 5, 6, 8, 3, 1];
let summ = 0;

for (let i = 0; i < numberss.length; i++) {
  console.log("Executou", i);
  if (numberss[i] % 2 === 0) {
    summ += numberss[i] * 2;
  }
}

let soma: number = 1;
let resultado: number = 0;

resultado += soma + 1;
resultado += soma + 1;
resultado += soma + 1;
resultado += soma + 1;
resultado += soma + 1;
resultado += soma + 1;

console.log("Soma dos números pares duplicados:", summ);

// PROCEDURAL

function isEven(num: number) {
  return num % 2 === 0;
}

function double(num: number) {
  return num * 2;
}

function sumArray(array: number[]) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

let numbers: Array<number> = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter(isEven);
let doubledNumbers = evenNumbers.map(double);
let sum = sumArray(doubledNumbers);

console.log("Soma dos números pares duplicados:", sum);

// FUNCIONAL

const isEvenn = (num: number) => num % 2 === 0;
const doublee = (num: number) => num * 2;
const sumArrayy = (array: number[]) => array.reduce((acc, num) => acc + num, 0);

const numeros = [1, 2, 3, 4, 5, 6];

const sumOfDoubledEvenNumbers = sumArray(numeros.filter(isEven).map(double));

console.log("Soma dos números pares duplicados:", sumOfDoubledEvenNumbers);
