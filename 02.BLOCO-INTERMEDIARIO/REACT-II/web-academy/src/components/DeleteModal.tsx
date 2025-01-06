import { useState } from "react";
import { Button } from "./Button";
import { Modal } from "./Modal";
import { ModalActions } from "./Modal/styled";
import { deleteAssessment } from "../configs/services/assessment.service";
import { getToken } from "../utils/getToken";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFetch: () => void;
  id: string;
}

export function DeleteModal({
  isOpen,
  onClose,
  onFetch,
  id,
}: DeleteModalProps) {
  const [loading, setLoading] = useState(false);

  const token = getToken();

  async function onDelete() {
    setLoading(true);
    const response = await deleteAssessment(token!, id);
    setLoading(false);

    if (!response.ok) {
      alert(response.message);
      return;
    }
    alert(response.message);
    onFetch();
    onClose();
  }

  return (
    <Modal title="Excluir Avaliação" isOpen={isOpen} onClose={onClose}>
      <ModalActions>
        <Button type="button" $color="info" onClick={onClose}>
          Cancelar
        </Button>
        <Button
          type="button"
          $color="error"
          disabled={loading}
          onClick={onDelete}
        >
          Deletar
        </Button>
      </ModalActions>
    </Modal>
  );
}
