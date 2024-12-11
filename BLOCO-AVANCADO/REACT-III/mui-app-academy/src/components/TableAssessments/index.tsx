import { Delete, Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Assessment } from "../../utils/types/assessment";
import { useAppSelector } from "../../store/hooks";

export function TableAssessments() {
  // assessments => data ([])
  const { data } = useAppSelector((state) => state.assessments);

  function handleEdit(asssessment: Assessment) {
    console.log(asssessment);
  }

  function handleDelete(id: string, title: string) {
    console.log({ id, title });
  }

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>ID</TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              Title
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              Description
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              Grade
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              Created At
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.grade}</TableCell>
              <TableCell align="right">
                {new Date(row.createdAt).toLocaleDateString("pt-BR")}
              </TableCell>
              <TableCell align="right">
                <IconButton color="info" onClick={() => handleEdit(row)}>
                  <Edit />
                </IconButton>
                <IconButton
                  onClick={() => handleDelete(row.id, row.title)}
                  color="error"
                >
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
