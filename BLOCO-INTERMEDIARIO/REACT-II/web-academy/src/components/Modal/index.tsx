import { ModalContent, ModalHeader, ModalRoot } from "./styled";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, children, title, onClose }: ModalProps) {
  return (
    <>
      {isOpen ? (
        <ModalRoot onClick={onClose}>
          <ModalContent
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <ModalHeader>
              <h2>{title}</h2>
            </ModalHeader>

            <div>{children}</div>
          </ModalContent>
        </ModalRoot>
      ) : null}
    </>
  );
}
