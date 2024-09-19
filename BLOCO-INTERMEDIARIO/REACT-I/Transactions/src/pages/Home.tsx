import { useState } from 'react';
import { Button } from '../components/styleds/Button';
import { Container } from '../components/styleds/Container';
import { DefaultLayout } from '../config/layouts/DefaultLayout';
import { List } from '../components/styleds/List';
import { FloatButton } from '../components/styleds/FloatButton';
import { Select } from '../components/styleds/Select';
import { Transactions } from '../config/types';
import { ModalTransactions } from '../components/ModalTransactions';

// type Transactions = {
//   id: string;
//   tipo: string;
//   valor: number;
//   descricao: string;
// };

export function Home() {
	const [transactions, setTransactions] = useState<Transactions[]>([
		{
			id: '1',
			tipo: 'Entrada',
			descricao: 'Salário',
			valor: 1600,
			criadoEm: new Date(),
		},
	]);
	const [selected, setSelected] = useState<string | number>();
	const [open, setOpen] = useState(false);

	const handleSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelected(e.target.value);
		console.log(selected);
	};

	function openModal() {
		setOpen(!open);
	}

	function submitTransactions(e: React.FormEvent<HTMLFormElement>) {
		e.stopPropagation();
		e.preventDefault();
		console.log(e);
	}

	return (
		<DefaultLayout>
			<Container>
				<Select
					value={selected}
					onChange={handleSelection}>
					<option
						value=''
						selected
						disabled>
						Selecione um tipo
					</option>
					<option value='Entrada'>Entrada</option>
					<option value='Saída'>Saída</option>
				</Select>
				<p>Tipo selecionado: {selected}</p>
				<List>
					<thead>
						<th>ID</th>
						<th>TIPO</th>
						<th>VALOR</th>
						<th>DESCRIÇÃO</th>
						<th>AÇÃO</th>
					</thead>
					<tbody>
						{transactions.map((transaction) => (
							<tr key={transaction.id}>
								<td>{transaction.id}</td>
								<td>{transaction.tipo}</td>
								<td>{transaction.valor}</td>
								<td>{transaction.descricao}</td>
								<td className='acao'>
									<Button
										size='medium'
										onClick={() =>
											alert(`Deletando transação ${transaction.id}`)
										}>
										Editar
									</Button>
									<Button
										size='medium'
										variant='error'
										onClick={() =>
											alert(`Deletando transação ${transaction.id}`)
										}>
										Deletar
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</List>
			</Container>
			<FloatButton onClick={openModal}>+</FloatButton>
			<ModalTransactions
				tipo='entrada'
				isOpen={open}
				onClose={() => {
					setOpen(!open);
				}}
				onSubmit={() => submitTransactions}
			/>
		</DefaultLayout>
	);
}
