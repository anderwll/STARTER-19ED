import { useState } from "react";
import { v4 as generateUuid } from "uuid";
import { Input } from "../components/styleds/Input";
import { Button } from "../components/styleds/Button";
import { Container } from "../components/styleds/Container";
import { DefaultLayout } from "../config/layouts/DefaultLayout";
import { Title } from "../components/styleds/Title";
import { ModalExclude } from "../components/ModalExclude";
import { ModalForm } from "../components/ModalUpdate";

/**
 *  1 - Adicionar estilos a nossa tabela
 *
 *  2 - Criar um modal para confirmar a exclusão de uma presença
 *      2.1 - Passar functions por props
 *
 *  3 - Adicionar a funcionalidade de excluir uma presença
 *  4 - Adicionar a funcionalidade de editar uma presença
 *  5 - Adicionar um texto caso não tenha nenhuma presença cadastrada
 */

interface Presenca {
  id: string;
  nome: string;
  criadoEm: Date;
}

export function Presence() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isOpenModalUpdated, setIsOpenModalUpdated] = useState<boolean>(false);
  const [idSelected, setIdSelected] = useState<string>("");
  const [nomeSelecionado, setNomeSelecionado] = useState<string>("");

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

  function openModalUpdated(id: string) {
    setIsOpenModalUpdated(true);
    setIdSelected(id);

    console.log(id);

    const nomePresenca = listaPresenca.find((np) => np.id === id);
    if (!nomePresenca) {
      alert("Presença não encontrada");
      return;
    }

    setNomeSelecionado(nomePresenca.nome);
  }

  function closeModalUpdated(): void {
    setIsOpenModalUpdated(false);
    setIdSelected("");
  }

  function openModalExclude(id: string): void {
    setIsOpenModal(true);
    setIdSelected(id);
  }

  function closeModalExclude(): void {
    setIsOpenModal(false);
    setIdSelected("");
  }

  function confirmExclude(): void {
    /// findIndex + splice
    /// filter

    // --------------------------------- Excluir com FILTER
    setListaPresenca((prevState) =>
      prevState.filter((p) => p.id !== idSelected)
    );

    // const index = listaPresenca.findIndex((p) => p.id === idSelected);
    // if (index === -1) {
    //   alert("Id não encontrado!");
    //   closeModalExclude();
    //   return;
    // }

    // --------------------------------- Excluir com SPLICE
    // setListaPresenca((prevState) => {
    //   const temp = [...prevState];
    //   temp.splice(index, 1);
    //   return temp;
    // });

    // ---------------------------------- Excluir com SLICE
    // setListaPresenca((prevState) => {
    //   return [...prevState.slice(0, index), ...prevState.slice(index + 1)];
    // });

    // Reseta o id selecionado
    // setIdSelected("");
    // setIsOpenModal(false);
    closeModalExclude();
  }

  function updatedPresenca(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    if (!nomeSelecionado.length) {
      alert("Nome invalido");
      return;
    }

    // prevState => [{}{}{}{}{}{}{}]
    // push -> ...prevState, newState

    // map percorre e tras uma copia do array -> pega o objeto e substituir pelo novo
    // forEach e map

    setListaPresenca((prevState) =>
      prevState.map((presenca) =>
        presenca.id === idSelected
          ? { ...presenca, nome: nomeSelecionado }
          : presenca
      )
    );

    closeModalUpdated();
  }

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
                    <Button
                      size="small"
                      onClick={() => openModalUpdated(presenca.id)}
                    >
                      Atualizar
                    </Button>
                    <Button
                      size="small"
                      variant="error"
                      onClick={() => openModalExclude(presenca.id)}
                    >
                      Excluir
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Container>

      <ModalExclude
        isOpen={isOpenModal}
        onCancel={closeModalExclude}
        onConfirm={confirmExclude}
      />
      <ModalForm
        isOpen={isOpenModalUpdated}
        onCancel={closeModalUpdated}
        title="Atualizar aluno da lista de presença"
      >
        <form onSubmit={updatedPresenca}>
          <Input
            type="text"
            name="nome"
            value={nomeSelecionado}
            onChange={(e) => setNomeSelecionado(e.target.value)} // O meu estado de isNomeSelecionado
          />
          <Button type="submit">Atualizar</Button>
        </form>
      </ModalForm>
    </DefaultLayout>
  );
}
