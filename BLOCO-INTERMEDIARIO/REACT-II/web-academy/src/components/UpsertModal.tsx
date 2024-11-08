// Update
// Insert

import { useState } from "react";
import { createAssessment } from "../configs/services/assessment.service";
import { getToken } from "../utils/getToken";
import { Button } from "./Button";
import { Form } from "./Form";
import { Modal } from "./Modal";

interface UpsertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFetch: () => void;
}

export function UpsertModal({ isOpen, onClose, onFetch }: UpsertModalProps) {
  const token = getToken();

  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!token) {
      return;
    }

    const data = {
      title: event.currentTarget["title-ass"].value,
      description: event.currentTarget["description-ass"].value,
      grade: Number(event.currentTarget["grade-ass"].value),
    };

    setLoading(true);
    const respose = await createAssessment(token, data);
    setLoading(false);

    if (!respose.ok) {
      alert(respose.message);
      return;
    }

    alert(respose.message);
    onFetch();
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Cadastrar Avaliação">
      <Form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Titulo"
          name="title-ass"
          required
          min="3"
        />
        <input
          type="text"
          placeholder="Descrição"
          name="description-ass"
          min="6"
        />
        <input
          type="number"
          placeholder="Nota"
          name="grade-ass"
          min="0"
          max="10"
          step="0.01"
          required
        />

        <div>
          <Button type="button" $color="error" onClick={onClose}>
            Cancelar
          </Button>
          <Button type="submit" $color="success" disabled={loading}>
            Criar
          </Button>
        </div>
      </Form>
    </Modal>
  );
}
