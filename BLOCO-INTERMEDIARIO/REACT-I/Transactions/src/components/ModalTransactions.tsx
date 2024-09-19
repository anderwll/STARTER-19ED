import { useState } from "react";
import { generateId, Transaction } from "../types";
import { SelectModal } from "./SelectModal";
import { Button } from "./styleds/Button";
import { Input } from "./styleds/Input";
import { Modal } from "./styleds/Modal";
import { Title } from "./styleds/Title";

interface ModalTransactionsProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (trans: Transaction) => void;
}

export function ModalTransactions({
  isOpen,
  onClose,
  onSave,
}: ModalTransactionsProps) {
  const [transaction, setTransaction] = useState<Transaction>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const tipo = e.currentTarget.tipo.value;
    const valor = e.currentTarget.valor.value;
    const descricao = e.currentTarget.descricao.value;

    if (!tipo || !valor || !descricao) {
      return;
    }

    const objectTransactions: Transaction = {
      id: generateId(),
      tipo,
      descricao,
      valor: Number(valor),
      criadoEm: new Date(),
    };

    onSave(objectTransactions);
  };

  return (
    <>
      {isOpen && (
        <Modal>
          <div>
            <Title>Criar</Title>
            <form onSubmit={handleSubmit}>
              <SelectModal name="tipo" />
              <Input
                type="number"
                name="valor"
                // value={transaction?.valor}
                placeholder="Valor"
              />
              <Input
                type="text"
                name="descricao"
                // value={transaction?.descricao}
                placeholder="Descrição"
              />
              <div>
                <Button onClick={onClose} variant="error">
                  Cancelar
                </Button>
                <Button type="submit">Adicionar</Button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
}
