import { useState } from "react";
import { Button } from "../components/styleds/Button";
import { Container } from "../components/styleds/Container";
import { DefaultLayout } from "../config/layouts/DefaultLayout";
import { Title } from "../components/styleds/Title";

/**
 * Events
 *
 * Quando não necessita de paramentro
 * onClick={minhaFuncao}
 *
 * Quando necessitar
 * onClick={() => minhaFuncao(valo1)}
 */

/**
 * O useState retorna um array com 2 posições
 * 1ª posição: O estado atual
 * 2ª posição: Função para atualizar o estado
 *
 * SINTAXE - useState
 * const [meuEstado, setMeuEstado] = useState(valorInial)
 */

export function Home() {
  const [contador, setContador] = useState<number>(0);

  function incrementar() {
    setContador(contador + 1);
    console.log("Incrementando....", contador);
  }

  function decrementar() {
    setContador((prevState) => {
      console.log("PREV -->", prevState);

      if (prevState === 0) {
        return 0;
      }

      return prevState - 1;
    });

    console.log("Decrementando....");
  }

  return (
    <DefaultLayout>
      <Container>
        <Button onClick={() => decrementar()}>-</Button>

        <Title>Contador: {contador}</Title>

        <Button onClick={incrementar}>+</Button>
      </Container>
    </DefaultLayout>
  );
}

// CONTADOR SEM useState

// let contador: number = 0;

// function incrementar() {
//   contador++;
//   console.log("Incrementando....", contador);
// }

// function decrementar() {
//   contador--;
//   console.log("Decrementando....", contador);
// }
