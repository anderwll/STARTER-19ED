import { Delete, Edit } from "@mui/icons-material";
import { Box, CircularProgress, IconButton, Pagination } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Assessment } from "../../utils/types/assessment";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setAssessentDetail } from "../../store/modules/assessmentDetail/assessmentDetailSlice";
import { useEffect, useMemo, useState } from "react";
import { findAllAssessmentsAsyncThunk } from "../../store/modules/assessments/assessments.action";

const LIMIT = 4; // Variavel de ambiente

export function TableAssessments() {
  const dispatch = useAppDispatch();
  const { assessments, count, loading } = useAppSelector(
    (state) => state.assessments
  );
  const [page, setPage] = useState(1); // URL

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const numberPages = useMemo(() => {
    return Math.ceil(count / LIMIT);
  }, [count]);

  function handleEdit(asssessment: Assessment) {
    dispatch(setAssessentDetail(asssessment));

    // setTimeout(() => {
    //   navigate("/detail");
    // }, 500);
  }

  function handleDelete(id: string) {
    console.log({ id });
    // Disparar uma ação para remover da minha lista (estado global)
    // dispatch(deleteAssessment(id));
  }

  // Toda vez que esse componente renderizar, preciso buscar as avaliações
  useEffect(() => {
    dispatch(findAllAssessmentsAsyncThunk({ page: page, take: LIMIT }));
  }, [page]);

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
          {loading ? (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                colSpan={6}
                rowSpan={LIMIT}
                align="center"
              >
                <CircularProgress />
              </TableCell>
            </TableRow>
          ) : (
            assessments.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
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
                    onClick={() => handleDelete(row.id)}
                    color="error"
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Pagination
          color="primary"
          count={numberPages}
          page={page}
          onChange={handleChange}
        />
      </Box>
    </TableContainer>
  );
}
