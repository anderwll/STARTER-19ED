import { Transaction } from "../types";
import { Button } from "./styleds/Button";
import { List } from "./styleds/List";

interface ListTransactionsProps {
  transactions: Transaction[];
}

export function ListTransactions({ transactions }: ListTransactionsProps) {
  function formatDate(date: Date) {
    return date.toLocaleDateString();
  }

  return (
    <List>
      <thead>
        <th>ID</th>
        <th>TIPO</th>
        <th>VALOR</th>
        <th>DESCRIÇÃO</th>
        <th>DATA DE CRIAÇÃO</th>
        <th>AÇÃO</th>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={transaction.id}>
            <td>{index + 1}</td>
            <td>{transaction.tipo}</td>
            <td>{transaction.valor}</td>
            <td>{transaction.descricao}</td>
            <td>{formatDate(transaction.criadoEm)}</td>
            <td className="acao">
              <Button
                size="medium"
                onClick={() => alert(`Deletando transação ${transaction.id}`)}
              >
                Editar
              </Button>
              <Button
                size="medium"
                variant="error"
                onClick={() => alert(`Deletando transação ${transaction.id}`)}
              >
                Deletar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </List>
  );
}
