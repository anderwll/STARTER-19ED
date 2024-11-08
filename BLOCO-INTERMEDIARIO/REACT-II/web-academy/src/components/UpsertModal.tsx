// Update
// Insert

import { useEffect, useRef, useState } from "react";
import {
  createAssessment,
  updateAssessment,
} from "../configs/services/assessment.service";
import { getToken } from "../utils/getToken";
import { Button } from "./Button";
import { Form } from "./Form";
import { Modal } from "./Modal";
import { Assessment } from "../types/assessment.type";
import { ResponseApi } from "../configs/services/api.service";
import { ModalActions } from "./Modal/styled";

const initialResponse: ResponseApi<Assessment> = {
  ok: false,
  message: "",
};

interface UpsertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFetch: () => void;
  assessment: Assessment | null; //
}

export function UpsertModal({
  isOpen,
  assessment,
  onClose,
  onFetch,
}: UpsertModalProps) {
  const token = getToken();
  const formRef = useRef<HTMLFormElement | null>(null);

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

    let response: ResponseApi<Assessment> = initialResponse;

    if (assessment) {
      response = await updateAssessment(token, { id: assessment.id, ...data });
    } else {
      response = await createAssessment(token, data);
    }

    setLoading(false);

    if (!response.ok) {
      alert(response.message);
      return;
    }

    alert(response.message);
    onFetch();
    onClose();
  }

  useEffect(() => {
    if (formRef.current && assessment) {
      formRef.current["title-ass"].value = assessment.title;
      formRef.current["description-ass"].value = assessment.description;
      formRef.current["grade-ass"].value = assessment.grade;
    }
  }, [assessment]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={assessment ? "Editar Avaliação" : "Cadastrar Avaliação"}
    >
      <Form ref={formRef} onSubmit={onSubmit}>
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

        <ModalActions>
          <Button type="button" $color="error" onClick={onClose}>
            Cancelar
          </Button>
          <Button
            type="submit"
            $color={assessment ? "info" : "success"}
            disabled={loading}
          >
            {assessment ? "Editar" : "Criar"}
          </Button>
        </ModalActions>
      </Form>
    </Modal>
  );
}
