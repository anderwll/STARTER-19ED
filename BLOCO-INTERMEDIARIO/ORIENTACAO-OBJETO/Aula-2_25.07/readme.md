### Paradigmas de Programação

Um paradigma de programação é um estilo ou abordagem que define como estruturar e organizar o código de um software. Ele fornece um modelo mental e um conjunto de práticas que guiam os desenvolvedores na criação de programas.

- `Imperativo:` Você diz exatamente o que fazer, passo a passo. Foca em como o programa deve realizar tarefas.

```bash
let numbers = [1, 2, 3, 4, 5, 6];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    sum += numbers[i] * 2;
  }
}

console.log("Soma dos números pares duplicados:", sum);
```

- `Procedural:` Você cria uma receita (função) que explica como fazer ao invés de dizer passo a passo. Divide o programa em funções ou procedimentos para realizar tarefas específicas.

```bash
function isEven(num) {
  return num % 2 === 0;
}

function double(num) {
  return num * 2;
}

function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter(isEven);
let doubledNumbers = evenNumbers.map(double);
let sum = sumArray(doubledNumbers);

console.log("Soma dos números pares duplicados:", sum);
```

- `Funcional:` Você usa uma máquina (função) que faz o trabalho automaticamente. Usa funções matemáticas e evita estados mutáveis.

```bash
const isEven = (num) => num % 2 === 0;

const double = (num) => num * 2;

const sumArray = array => array.reduce((acc, num) => acc + num, 0);

const numbers = [1, 2, 3, 4, 5, 6];

const sumOfDoubledEvenNumbers = sumArray(numbers.filter(isEven).map(double));

console.log("Soma dos números pares duplicados:", sumOfDoubledEvenNumbers);
```
