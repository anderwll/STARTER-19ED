import { Button } from "./styleds/Button";
import { ModalRoot } from "./styleds/ModalRoot";

/**
 *  Rederização condicional
 *
 *  se a condição for verdadeira eu exibo o meu conteúdo
 *
 * { condicao && (html) }
 *
 * { condicao ? (html) : null }
 */

interface ModalExcludeProps {
  isOpen: boolean;
  onCancel: () => void; // Tipando que será um function retornando void
  onConfirm: () => void;
}

export function ModalExclude({
  isOpen,
  onCancel,
  onConfirm,
}: ModalExcludeProps) {
  return (
    <>
      {isOpen && (
        <ModalRoot onClick={onCancel}>
          <div
            onClick={(e) => {
              e.stopPropagation(); // Não propaga a ação de click para o a div filho
            }}
          >
            <h3>Deseja realmente excluir?</h3>
            <p>Essa alteração não podera ser desfeita.</p>

            <div>
              <Button size="small" onClick={onCancel}>
                Cancelar
              </Button>
              <Button size="small" variant="error" onClick={onConfirm}>
                Confirmar
              </Button>
            </div>
          </div>
        </ModalRoot>
      )}
    </>
  );
}
