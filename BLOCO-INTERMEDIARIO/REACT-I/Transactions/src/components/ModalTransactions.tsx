import { useState } from "react";
import { Transactions } from "../config/types";
import { SelectModal } from "./SelectModal";
import { Button } from "./styleds/Button";
import { Input } from "./styleds/Input";
import { Modal } from "./styleds/Modal";
import { Title } from "./styleds/Title";

type TTipoTransacao = "Criar" | "Editar";

interface ModalTransactionsProps {
  tipo: TTipoTransacao;
  isOpen: boolean;
  onClose: () => void;
}

export function ModalTransactions({
  tipo,
  isOpen,
  onClose,
}: ModalTransactionsProps) {
  const [transaction, setTransaction] = useState<Transactions>();
  const criarTransacao = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const objectTransactions: Transactions = {
      id: Date.now().toString(),
      tipo: "",
      valor: e.target.valor.value,
      descricao: e.target.descricao.value,
      criadoEm: new Date().toISOString().replace("T", ""),
    };

    console.log("Transação", objectTransactions);

    return;
  };
  return (
    <>
      {isOpen && (
        <Modal>
          <div>
            <Title>{tipo}</Title>
            <form onSubmit={criarTransacao}>
              <SelectModal />
              <Input
                type="number"
                name="valor"
                value={transaction?.valor}
                placeholder="valor"
              />
              <Input
                type="text"
                name="descricao"
                value={transaction?.descricao}
                placeholder="descrição"
              />
              <div>
                <Button type="submit">Adicionar</Button>
                <Button onClick={onClose} variant="error">
                  Cancelar
                </Button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
}
