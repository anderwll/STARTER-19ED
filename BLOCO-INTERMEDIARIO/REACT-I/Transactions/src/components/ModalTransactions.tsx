import { SelectModal } from "./SelectModal";
import { Button } from "./styleds/Button";
import { Input } from "./styleds/Input";
import { Modal } from "./styleds/Modal";

type TTipoTransacao = "entrada" | "saída";

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
  return (
    <>
      {isOpen && (
        <Modal onClick={onClose}>
          <div>
            <form
              action=""
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Input type="number" placeholder="valor" />
              <Input type="text" placeholder="descrição" />
              <SelectModal value={""} />
              <div>
                <Button>Adicionar</Button>
                <Button>Cancelar</Button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
}
