import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { Container } from "../components/styleds/Container";
import { DefaultLayout } from "../config/layouts/DefaultLayout";
import { FloatButton } from "../components/styleds/FloatButton";
import { Select } from "../components/styleds/Select";
import { Toast, Transaction } from "../types";
import { ToastResposta } from "../config/hooks/ToastRespostas";
import { ModalTransactions } from "../components/ModalTransactions";
import { ListTransactions } from "../components/ListTransactions";
import { BalanceDisplay } from "../components/BalanceDisplay";
import { SelectModal } from "../components/SelectModal";
import { Box } from "../components/styleds/Box";

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

  const handleCloseToast = () => {
    setShowToast(false);
  };

  function handleModal() {
    setOpenModal(!openModal);
  }

  // ADICIONAR/CRIAÇÃO DE TRANSAÇÃO
  const handleAdd = (trans: Transaction) => {
    setTransactions((prevState) => [...prevState, trans]);

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
    console.log("VALOR SELECIONADO =>", selected);

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
  const handleDelete = (id: string) => {
    console.log("DELETANDO....  =>", id);
  };

  const handleUpdate = (id: string) => {
    console.log("ATUALIZANDO....  =>", id);
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
          onUpdate={handleUpdate}
        />
      </Container>

      <FloatButton onClick={handleModal}>+</FloatButton>

      <ModalTransactions
        isOpen={openModal}
        onClose={handleModal}
        onSave={handleAdd}
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
