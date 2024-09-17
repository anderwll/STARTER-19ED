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
  const [indefinido, setIndefinido] = useState();

  const [count, setCount] = useState(0);

  const [nome, setNome] = useState("");

  const [pessoa, setPessoa] = useState({
    id: "id",
    nome: "Anderson",
    idade: 18,
  });

  const [open, setOpen] = useState(false);

  const [lista, setLista] = useState([]);

  const [estadoTipado, setEstadoTipado] = useState<number>(0);

  console.log(open);

  const toggleModal = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <DefaultLayout>
      <Container>
        <h1>{pessoa.nome}</h1>

        <Button
          onClick={() => {
            // setOpen(!open);
            // setOpen((prevState) => !prevState);

            toggleModal();
          }}
        >
          ABRIR
        </Button>

        {open && <h1>Aqui é o meu modal</h1>}
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
