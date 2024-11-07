// Update
// Insert

import { Button } from "./Button";
import { Form } from "./Form";
import { Modal } from "./Modal";

interface UpsertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UpsertModal({ isOpen, onClose }: UpsertModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Cadastrar Avaliação">
      <Form>
        <input type="text" placeholder="Titulo" name="title" />
        <input type="text" placeholder="Descrição" name="description" />
        <input type="number" placeholder="Nota" name="grade" />

        <div>
          <Button type="button" $color="error" onClick={onClose}>
            Cancelar
          </Button>
          <Button type="submit" $color="success">
            Criar
          </Button>
        </div>
      </Form>
    </Modal>
  );
}
