import { Button } from './styleds/Button';
import { ModalRoot } from './styleds/ModalRoot';

/**
 *  Rederização condicional
 *
 *  se a condição for verdadeira eu exibo o meu conteúdo
 *
 * { condicao && (html) }
 *
 * { condicao ? (html) : null }
 */

interface ModalUpdatProps {
	isOpen: boolean;
	onCancel: () => void;
	children: React.ReactNode;
	title: string;
}

export function ModalForm({
	isOpen,
	onCancel,
	children,
	title,
}: ModalUpdatProps) {
	return (
		<>
			{isOpen && (
				<ModalRoot onClick={onCancel}>
					<div
						onClick={(e) => {
							e.stopPropagation(); // Não propaga a ação de click para o a div filho
						}}>
						<h3>{title}</h3>

						{children}

						<div>
							<Button
								size='small'
								variant='error'
								onClick={onCancel}>
								Cancelar
							</Button>
						</div>
					</div>
				</ModalRoot>
			)}
		</>
	);
}
