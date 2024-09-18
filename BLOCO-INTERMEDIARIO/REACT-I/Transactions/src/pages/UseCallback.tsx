import { useCallback, useState } from "react";
import { DefaultLayout } from "../config/layouts/DefaultLayout";
import { Container } from "../components/styleds/Container";
import { Title } from "../components/styleds/Title";
import { Input } from "../components/styleds/Input";
import { Button } from "../components/styleds/Button";
import ListData from "../components/ListData";

/**
 * useCallback
 *
 * O useCallback é um hook que serve para memorizar uma função.
 *
 * const funcao = useCallback(() => {
 * // código
 * }, [dependencias]);
 *
 * Se o array de dependências não for passado, a função será memorizada e não será recriada.
 * Se o array de dependências estiver vazio, a função será recriada a cada renderização.
 * Se o array de dependências tiver valores, a função será recriada quando esses valores mudarem.
 *
 * Exemplos de uso:
 * - passar funções para componentes filhos;
 * - passar funções para useEffect;
 */
export default function UseCallback() {
  const [input, setInput] = useState("");
  const [type, setType] = useState("posts");

  const getData = useCallback(async () => {
    console.log("Buscando dados.....", type);

    const results = await fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => json);

    return results;
  }, [type]);

  return (
    <DefaultLayout>
      <Container>
        <Title>useCallback</Title>

        <Input
          placeholder="Buscar..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <div>
          <Button onClick={() => setType("posts")}>Posts</Button>
          <Button onClick={() => setType("comments")}>Comments</Button>
        </div>

        <ListData getData={getData} />
      </Container>
    </DefaultLayout>
  );
}
