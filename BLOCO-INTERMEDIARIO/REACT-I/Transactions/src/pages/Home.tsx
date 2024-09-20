import { useState } from "react";
import { Container } from "../components/styleds/Container";
import { DefaultLayout } from "../config/layouts/DefaultLayout";
import { FloatButton } from "../components/styleds/FloatButton";
import { Select } from "../components/styleds/Select";
import { Toast, Transaction } from "../types";
import { ToastResposta } from "../config/hooks/ToastRespostas";
import { ModalTransactions } from "../components/ModalTransactions";
import { ListTransactions } from "../components/ListTransactions";

const emptyToast: Toast = {
  type: "success",
  duration: 3000,
  message: "",
};

export function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [toastProps, setToastProps] = useState<Toast>(emptyToast);

  const [transationObject, setTransactionObject] = useState<Transaction>();
  const [selected, setSelected] = useState<string | number>();
  const [showToast, setShowToast] = useState(false);

  const handleSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
    console.log(selected);
  };

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

  return (
    <DefaultLayout>
      <Container>
        <Select value={selected} onChange={handleSelection}>
          <option value="" selected disabled>
            Selecione um tipo
          </option>
          <option value="Entrada">Entrada</option>
          <option value="Saída">Saída</option>
        </Select>
        <p>Tipo selecionado: {selected}</p>

        <ListTransactions
          transactions={transactions}
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
