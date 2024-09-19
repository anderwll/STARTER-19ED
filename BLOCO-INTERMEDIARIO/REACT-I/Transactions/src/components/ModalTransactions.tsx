import { SelectModal } from './SelectModal';
import { Button } from './styleds/Button';
import { Input } from './styleds/Input';
import { Modal } from './styleds/Modal';

type TTipoTransacao = 'entrada' | 'saída';

interface ModalTransactionsProps {
	tipo: TTipoTransacao;
	isOpen: boolean;
	onClose: () => void;
	onSubmit: () => void;
}

export function ModalTransactions({
	tipo,
	isOpen,
	onClose,
	onSubmit
}: ModalTransactionsProps) {
	return (
		<>
			{isOpen && (
				<Modal onClick={onClose}>
					<div>
						<form onClick={(e) => e.stopPropagation()}>
							<SelectModal />

							<Input
								type='number'
								placeholder='valor'
							/>
							<Input
								type='text'
								placeholder='descrição'
							/>
							<div>
								<Button
									onClick={onSubmit}
									type='submit'>
									Adicionar
								</Button>
								<Button
									onClick={onClose}
									variant='error'>
									Cancelar
								</Button>
							</div>
						</form>
					</div>
				</Modal>
			)}
		</>
	);
}
