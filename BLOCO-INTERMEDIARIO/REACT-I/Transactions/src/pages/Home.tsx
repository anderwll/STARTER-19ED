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

const emptyToast: Toast = {
  type: "success",
  duration: 3000,
  message: "",
};

export function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [toastProps, setToastProps] = useState<Toast>(emptyToast);
  const [showToast, setShowToast] = useState(false);

  // Esse estado controla o nosso valor do filter select
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

  const handleDelete = (id: string) => {
    console.log("DELETANDO....  =>", id);
  };

  const handleUpdate = (id: string) => {
    console.log("ATUALIZANDO....  =>", id);
  };

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
   *  1 - Componente filtro = entrada / saida OK
   *  2 - Estado para controlar o tipo selecionado = selected OK
   *  3 - Estado para aramazenar a listra filtrada. OK
   *  4 - Observar a mudança de estrada e filtrar a nossa lista
   *  5 - Ajustar para mostrar na DOM/HTML
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

  return (
    <DefaultLayout>
      <Container>
        <BalanceDisplay saldo={saldo} saldoFiltered={saldoFiltered} />

        <SelectModal
          width="30%"
          disabledFirtsOption={false}
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        />

        <ListTransactions
          transactions={transactionsFiltered} // Lista filtra
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
