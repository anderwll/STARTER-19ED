import { Modal } from "./styleds/Modal";
import { Title } from "./styleds/Title";

type TTipoTransacao = "Criar" | "Editar" | "Excluir";

interface ModalTransactionsProps {
  tipo: TTipoTransacao;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function ModalDoEma({
  tipo,
  isOpen,
  children,
  onClose,
}: ModalTransactionsProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <>
      {isOpen && (
        <Modal onClick={onClose}>
          <div onClick={handleClick}>
            <Title>{tipo}</Title>
            {children}
          </div>
        </Modal>
      )}
    </>
  );
}
