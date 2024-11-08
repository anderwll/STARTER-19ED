import { Assessment } from "../../types/assessment.type";
import { Button } from "../Button";
import { TableStyled } from "./styled";

const columns = ["Id", "Titulo", "Descrição", "Nota", "Criado Em", "Ações"];

interface TableAssessmentsProps {
  loading?: boolean;
  rows: Assessment[];
  onEdit: (row: Assessment) => void;
}

export function TableAssessments({
  loading,
  rows,
  onEdit,
}: TableAssessmentsProps) {
  if (loading) {
    return <p>Buscando avaliações...</p>;
  }

  return (
    <TableStyled>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{row.title}</td>
            <td>{row?.description}</td>
            <td>{row.grade}</td>
            <td>{new Date(row.createdAt).toLocaleDateString("pt-br")}</td>
            <td>
              <Button $color="info" onClick={() => onEdit(row)}>
                Editar
              </Button>
              <Button $color="error">Excluir</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </TableStyled>
  );
}
