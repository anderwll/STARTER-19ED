import { useEffect, useState } from "react";
import { Container } from "../components/styleds/Container";
import { DefaultLayout } from "../config/layouts/DefaultLayout";
import { Input } from "../components/styleds/Input";

export default function UseEffect() {
  /**
   * useEffect
   *
   * O useEffect é um hook que serve para executar efeitos colaterais em componentes funcionais.
   *
   * É executado quando:
   * - o componente é montado (didMount);
   * - o componente é atualizado (didUpdate);
   * - o componente é desmontado (willUnmount).
   *
   * useEffect(funcao, array_dependencias)
   *
   * useEffect(() => {
   *  // código (montagem)
   *
   *  return () => {
   *   // código (desmontagem)
   *  }
   * }, [dependencias]);
   *
   * Se o array de dependências não for passado, o useEffect será executado a cada renderização (didUpdate).
   * Se o array de dependências estiver vazio, o useEffect será executado apenas uma vez (didMount)
   * Se o array de dependências tiver valores, o useEffect será executado quando esses valores mudarem (didUpdate).
   *
   */
  const [id, setId] = useState<string>("");
  const [dados, setDados] = useState<any[]>([]);
  const [render, setRender] = useState(0);

  useEffect(() => {
    console.log("Componente foi renderizado...");
    // setRender((prev) => prev + 1);
  });

  useEffect(() => {
    console.log("Renderizou a primeira vez....");
    document.title = `Mudei o title - ${id}`;

    const getTodos = async () => {
      console.log("ID --->", id);
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setDados(json);
        });
    };

    getTodos();
  }, [id]);

  return (
    <DefaultLayout>
      <Container>
        <p>{render}</p>

        <Input
          placeholder="Buscar por id..."
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        {dados.length ? (
          dados.map((dado) => (
            <>
              <p>{dado.id}</p>
              <p>{dado.title}</p>
              <br />
            </>
          ))
        ) : (
          <>
            <p>{id}</p>
            <br />
          </>
        )}
      </Container>
    </DefaultLayout>
  );
}
