import { Assessment } from "../../types/assessment.type";
import { Button } from "../Button";
import { TableStyled } from "./styled";

const columns = ["Id", "Titulo", "Descrição", "Nota", "Criado Em", "Ações"];

interface TableAssessmentsProps {
  loading?: boolean;
  rows: Assessment[];
}

export function TableAssessments({ loading, rows }: TableAssessmentsProps) {
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
          <tr>
            <td>{index + 1}</td>
            <td>{row.title}</td>
            <td>{row?.description}</td>
            <td>{row.grade}</td>
            <td>{new Date().toLocaleDateString("pt-br")}</td>
            <td>
              <Button $color="info">Editar</Button>
              <Button $color="error">Excluir</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </TableStyled>
  );
}
