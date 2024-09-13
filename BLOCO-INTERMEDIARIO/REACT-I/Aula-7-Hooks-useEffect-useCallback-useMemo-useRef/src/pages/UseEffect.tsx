import { useEffect, useState } from "react";
import { Container } from "../components/styleds/Container";
import { Title } from "../components/styleds/Title";
import { DefaultLayout } from "../config/layouts/DefaultLayout";
import { Button } from "../components/styleds/Button";

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

  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("Executou.... S/ ARRAY", open);
  }, [open]);

  useEffect(() => {
    document.title = "useEffect";
    console.log("Montou o componete");

    return () => {
      document.title = "Titulo original";
      console.log("Desmontou o componete");
    };
  }, []);

  useEffect(() => {
    async function buscarDados() {
      console.log("Buscando dados");
      // logica para busca da api com o meu await
    }

    buscarDados();
  }, []);

  return (
    <DefaultLayout>
      <Container>
        <Title>useEffect - Exemplo</Title>

        <Button
          onClick={() => {
            setOpen(!open); // se true => false || se false => true
          }}
        >
          Abrir
        </Button>
      </Container>
    </DefaultLayout>
  );
}
