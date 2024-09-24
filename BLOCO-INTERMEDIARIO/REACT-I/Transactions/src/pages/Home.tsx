import { useEffect, useMemo, useState } from "react";
import { Container } from "../components/styleds/Container";
import { DefaultLayout } from "../config/layouts/DefaultLayout";
import { FloatButton } from "../components/styleds/FloatButton";
import { Toast, Transaction } from "../types";
import { ToastResposta } from "../config/hooks/ToastRespostas";
import { ModalTransactions } from "../components/ModalTransactions";
import { ListTransactions } from "../components/ListTransactions";
import { BalanceDisplay } from "../components/BalanceDisplay";
import { SelectModal } from "../components/SelectModal";
import { Box } from "../components/styleds/Box";
import { ModalDelete } from "../components/ModalDelete";

const emptyToast: Toast = {
  type: "success",
  duration: 3000,
  message: "",
};

export function Home() {
  // Estado com as nossas transações
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // Estado que controla a abertura do modal de cadastro e edição
  const [openModal, setOpenModal] = useState(false);

  // Estado que controla a mensagem, duração e o tipo do alerta
  const [toastProps, setToastProps] = useState<Toast>(emptyToast);
  // Estado que mostra sim ou não o alerta
  const [showToast, setShowToast] = useState(false);

  // Esse estado controla o nosso valor do filter select (entrada|saida|"")
  const [selected, setSelected] = useState<string>("");
  // Responsavel por armazenar nossa lista filtrada.
  const [transactionsFiltered, setTransactionsFiltered] = useState<
    Transaction[]
  >([]);

  // Abre o modal para atualizar
  const [updateModal, setUpdateModal] = useState(false);

  //Estado para armazenar os valores do update que no nosso caso será um objeto
  const [upated, setUpdated] = useState<Transaction>();

  //Estado para armazenar o id do valor que vai ser deletado
  const [transId, setTransId] = useState<string>("");

  //Estado para abrir e fechar o modal de delete
  const [openDelete, setOpenDelete] = useState(false);

  const handleCloseToast = () => {
    setShowToast(false);
  };

  function handleModal() {
    setOpenModal(!openModal);
  }

  const handleCloseUpdate = () => {
    setUpdateModal(false);
    setUpdated(undefined);
  };

  // ADICIONAR/CRIAÇÃO DE TRANSAÇÃO
  const handleAdd = (trans: Transaction) => {
    setTransactions((prevState) => [...prevState, trans]); // Um hook do react

    setToastProps({
      message: "Transação criada com sucesso",
      duration: 3000,
      type: "success",
    });

    setShowToast(!showToast);
    handleModal();
  };

  /**
   *  ATUALIZAÇÃO DO SALDO
   *
   * 1 - Criar component para aprensentar o saldo - BalanceDisplay OK
   *  - valor/saldo: number OK
   *
   * 2 - Criar a função no componente pai p/ calcular o saldo OK
   *  OBS: useMemo**, com base na lista e no tipo (entrada/+ | saida/-) OK
   *
   */
  const saldo = useMemo(() => {
    return transactions.reduce((acc, transaction) => {
      if (transaction.tipo === "entrada") {
        return acc + transaction.valor;
      } else {
        return acc - transaction.valor;
      }
    }, 0);
  }, [transactions]);

  /**
   *  SALDO FILTRADO
   *
   *  1 - Componente filtro = entrada / saida OK
   *  2 - Estado para controlar o tipo selecionado = selected OK
   *  3 - Estado para aramazenar a listra filtrada. OK
   *  4 - Observar a mudança de estrada e filtrar a nossa lista OK
   *  5 - Ajustar para mostrar na DOM/HTML OK
   */
  useEffect(() => {
    // console.log("VALOR SELECIONADO =>", selected);

    // se o meu selected for diferente de "" = entrada ou saida
    if (selected) {
      const listFiltrada = transactions.filter(
        (trans) => trans.tipo === selected
      );
      setTransactionsFiltered(listFiltrada);
      return;
    }

    setTransactionsFiltered(transactions);
  }, [selected, transactions]);

  const saldoFiltered = useMemo(() => {
    if (!selected) {
      return undefined;
    }

    return transactionsFiltered.reduce((acc, transaction) => {
      if (transaction.tipo === "entrada") {
        return acc + transaction.valor;
      } else {
        return acc - transaction.valor;
      }
    }, 0);
  }, [transactionsFiltered, selected]);

  // UPDATE E DELETE

  //Abre o modal o e armazena o id no estado transId
  const handleDelete = (id: string) => {
    setTransId(id);
    setOpenDelete(!openDelete);
  };

  // Fecha o modal de delete e limpa o id
  const handleCloseDelete = () => {
    setOpenDelete(false);
    setTransId("");
  };

  // Confirmar a exclusão do item selecionado, onde o id esta armazenado no estado transId
  const handleConfirm = () => {
    const index = transactions.findIndex((t) => t.id === transId);

    if (index === -1) {
      setToastProps({
        message: "Transação não encontrada",
        duration: 3000,
        type: "error",
      });
      setShowToast(true);
    }

    setTransactions((prevState) => [
      ...prevState.slice(0, index),
      ...prevState.slice(index + 1),
    ]);

    setToastProps({
      message: "Transação excluida com sucesso",
      duration: 3000,
      type: "success",
    });

    setShowToast(true);
    setOpenDelete(!openDelete);
    setTransId("");
  };

  //Abre o modal de Update

  const handleModalUpdate = (id: string) => {
    const objeto = transactions.find((t) => t.id === id);

    setUpdated(objeto);
    setUpdateModal(!updateModal);
  };

  //Enviar o objeto que esta dentro do modal para atualizar no estado transactions
  const handleUpdate = (trans: Transaction) => {
    setTransactions((prevState) =>
      prevState.map((t) => (t.id === trans.id ? trans : t))
    );

    setToastProps({
      message: "Transação atualizada com sucesso",
      duration: 3000,
      type: "success",
    });

    setShowToast(true);
    handleCloseUpdate();
  };

  return (
    <DefaultLayout>
      <Container>
        <Box>
          <BalanceDisplay saldo={saldo} saldoFiltered={saldoFiltered} />
          <SelectModal
            width="25%"
            disabledFirtsOption={false}
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          />
        </Box>

        <ListTransactions
          transactions={transactionsFiltered} // Lista filtrada
          onDelete={handleDelete}
          onUpdate={handleModalUpdate}
        />
      </Container>

      <FloatButton onClick={handleModal}>+</FloatButton>

      <ModalTransactions
        isOpen={openModal}
        onClose={handleModal}
        onSave={handleAdd}
      />

      {/* Modal Update */}

      <ModalTransactions
        title="Atualizar"
        titleButton="Salvar"
        isOpen={updateModal}
        onClose={handleCloseUpdate}
        onEdit={handleUpdate}
        updated={upated}
      />

      {/* Modal Delete */}

      <ModalDelete
        isOpen={openDelete}
        onCancel={handleCloseDelete}
        onConfirm={handleConfirm}
      />

      {showToast && (
        <ToastResposta
          message={toastProps.message}
          duration={toastProps.duration}
          type={toastProps.type}
          onClose={handleCloseToast}
        />
      )}
    </DefaultLayout>
  );
}
