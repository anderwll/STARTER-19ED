import { useState } from "react";
import { v4 as generateUuid } from "uuid";
import { Input } from "../components/styleds/Input";
import { Button } from "../components/styleds/Button";
import { Container } from "../components/styleds/Container";
import { DefaultLayout } from "../config/layouts/DefaultLayout";
import { Title } from "../components/styleds/Title";

/**
 *  1 - Adicionar estilos a nossa tabela
 *  2 - Criar um modal para confirmar a exclusão de uma presença
 *      2.1 - Passar functions por props
 *  3 - Adicionar a funcionalidade de excluir uma presença
 *  4 - Adicionar a funcionalidade de editar uma presença
 *  5 - Adicionar um texto caso não tenha nenhuma presença cadastrada
 *
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

    const newPresenca: Presenca = {
      id: generateUuid(),
      nome: evento.currentTarget.nome.value,
      criadoEm: new Date(),
    };

    if (!newPresenca.nome.length) {
      alert("Nome inválido");
      return;
    }

    setListaPresenca((prevState) => {
      return [...prevState, newPresenca];
    });

    evento.currentTarget.reset();
  }

  console.log(listaPresenca);

  return (
    <DefaultLayout>
      <Container flexDirection="column">
        <Title>Lista de presenças</Title>

        <form onSubmit={submitForm}>
          <Input type="text" name="nome" placeholder="Nome do aluno..." />
          <Button type="submit">Adicionar</Button>
        </form>
        <br />
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
