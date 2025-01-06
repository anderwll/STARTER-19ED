import React, { useEffect, useState } from "react";
import { generateId, Transaction } from "../types";
import { SelectModal } from "./SelectModal";
import { Button } from "./styleds/Button";
import { Input } from "./styleds/Input";
import { Modal } from "./styleds/Modal";
import { Title } from "./styleds/Title";

interface ModalTransactionsProps {
  isOpen: boolean;
  title?: string;
  titleButton?: string;
  updated?: Transaction;
  onClose: () => void;
  onSave?: (trans: Transaction) => void;
  onEdit?: (trans: Transaction) => void;
}

const emptyTransaction: Transaction = {
  id: "",
  tipo: "",
  descricao: "",
  valor: 0,
  criadoEm: new Date(),
};

export function ModalTransactions({
  isOpen,
  updated,
  title,
  titleButton,
  onClose,
  onSave,
  onEdit,
}: ModalTransactionsProps) {
  const [transaction, setTransaction] = useState<Transaction>(emptyTransaction);

  useEffect(() => {
    if (updated) {
      setTransaction(updated);
    } else {
      setTransaction(emptyTransaction);
    }
  }, [isOpen, updated]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const tipo = e.currentTarget.tipo.value;
    const valor = e.currentTarget.valor.value;
    const descricao = e.currentTarget.descricao.value;

    const valorNumber = Number(valor);

    if (!tipo || !valor || !descricao) {
      return;
    }

    if (onSave) {
      const objectTransactions: Transaction = {
        id: generateId(),
        tipo,
        descricao,
        valor: Number(valor),
        criadoEm: new Date(),
      };
      onSave(objectTransactions);
    } else {
      const objectTransaction: Transaction = {
        ...transaction,
        tipo,
        descricao,
        valor: valorNumber,
      };
      if (onEdit) onEdit(objectTransaction);
    }
  };

  //Change para poder alterar os inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTransaction((prevState) => ({
      ...prevState,
      [name]: name === "valor" ? Number(value) : value,
    }));
  };

  return (
    <>
      {isOpen && (
        <Modal>
          <div>
            <Title>{title ? title : "Criar"}</Title>
            <form onSubmit={handleSubmit}>
              <SelectModal
                name="tipo"
                value={transaction?.tipo || ""}
                onChange={handleChange}
              />
              <Input
                type="number"
                name="valor"
                value={transaction?.valor || ""}
                onChange={handleChange}
                placeholder="Valor"
              />
              <Input
                type="text"
                name="descricao"
                onChange={handleChange}
                value={transaction?.descricao || ""}
                placeholder="Descrição"
              />
              <div>
                <Button onClick={onClose} variant="error">
                  Cancelar
                </Button>
                <Button type="submit">
                  {titleButton ? titleButton : "Adicionar"}
                </Button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
}
