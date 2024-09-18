import { useEffect, useMemo, useState } from "react";
import { Container } from "../components/styleds/Container";
import { Title } from "../components/styleds/Title";
import { DefaultLayout } from "../config/layouts/DefaultLayout";
import { Input } from "../components/styleds/Input";
import { Button } from "../components/styleds/Button";

/**
 * useMemo
 *
 * O useMemo é um hook que serve para memorizar um valor.
 *
 * const valor = useMemo(() => {
 * // código
 * }, [dependencias]);
 *
 * Se o array de dependências não for passado, o valor será memorizado e não será recriado.
 * Se o array de dependências estiver vazio, o valor será recriado a cada renderização.
 * Se o array de dependências tiver valores, o valor será recriado quando esses valores mudarem.
 *
 * Exemplos de uso:
 * - cálculos pesados;
 * - formatação de dados.
 */

function calculate(valor: number) {
  console.log("Montou a minha função...");

  for (let i = 0; i < 100000000; i++) {
    //...
  }

  return valor * 2;
}

export default function UseMemo() {
  const [input, setInput] = useState("");
  const [valor, setValor] = useState(0);

  // const [valorD, setValorD] = useState(0);

  // const valorDobrado = calculate(valor);

  const valorDobrandoComMemo = useMemo(() => {
    return calculate(valor);
  }, [valor]);

  // deu ruim
  // useEffect(() => {
  //   const valorDobrado = calculate(valor);
  //   setValorD(valorDobrado);
  // }, []);

  return (
    <DefaultLayout>
      <Container>
        <Title>useMemo</Title>

        <Input
          placeholder="Buscar..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <h2>Nome: {input}</h2>

        <Button onClick={() => setValor((prev) => prev + 1)}>
          Incrementar
        </Button>
      </Container>
    </DefaultLayout>
  );
}
