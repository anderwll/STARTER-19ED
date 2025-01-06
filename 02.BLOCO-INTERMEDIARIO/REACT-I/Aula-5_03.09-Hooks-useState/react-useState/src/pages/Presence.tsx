import { useState } from "react";
import { v4 as generateUuid } from "uuid";
import { Input } from "../components/styleds/Input";
import { Button } from "../components/styleds/Button";
import { Container } from "../components/styleds/Container";
import { DefaultLayout } from "../config/layouts/DefaultLayout";

/**
 * ID
 * NOME
 * DATA CRIAÇÃO
 */

interface Presenca {
  id: string;
  nome: string;
  criadoEm: Date;
}

export function Presence() {
  const [listaPresenca, setListaPresenca] = useState<Presenca[]>([]);

  function submitForm(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    // nome2: evento.currentTarget["nome"].value,

    const newPresenca: Presenca = {
      id: generateUuid(),
      nome: evento.currentTarget.nome.value,
      criadoEm: new Date(),
    };

    if (!newPresenca.nome.length) {
      alert("Nome inválido");
      return;
    }

    // setListaPresenca([...listaPresenca, newPresenca]);
    setListaPresenca((prevState) => {
      return [...prevState, newPresenca];
    });

    evento.currentTarget.reset();
  }

  console.log(listaPresenca);

  return (
    <DefaultLayout>
      <Container flexDirection="column">
        <h1>Lista de presenças</h1>

        <form onSubmit={submitForm}>
          <Input type="text" name="nome" placeholder="Nome do aluno..." />
          <Button type="submit">Adicionar</Button>
        </form>

        <table style={{ width: 700 }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Criado Em</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {listaPresenca.map((presenca, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{presenca.nome}</td>
                  <td>{presenca.criadoEm.toLocaleDateString()}</td>
                  <td>
                    <Button variant="error" size="small">
                      Excluir
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Container>
    </DefaultLayout>
  );
}
