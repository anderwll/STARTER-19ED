import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid2,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { style } from "./styles";
import { useEffect, useState } from "react";
import {
  FieldsErrors,
  validateFormAssessment,
} from "../../utils/validators/assessment.validator";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { createAssessment } from "../../store/modules/assessments/assessmentsSlice";

// UP => Update
// SERT => Insert

/**
 *  id: string (gerado pelo sistema) lista.length
 *  title: string
 *  description: string
 *  grade: number (nota)
 *  createdAt: Date (gerado pelos sistema) new Date()
 */

interface UpsertModalProps {
  open: boolean;
  handleClose: () => void;
}

export function UpsertModal({ open, handleClose }: UpsertModalProps) {
  const dispatch = useAppDispatch();
  const assessmentsRedux = useAppSelector((state) => state.assessments);

  const [fieldsErrors, setFieldsErrors] = useState<FieldsErrors>({
    title: "",
    description: "",
    grade: "",
  });

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const title = event.currentTarget["title-assessment"].value;
    const grade = Number(event.currentTarget["grade-assessment"].value);
    const description = event.currentTarget["desc-assessment"].value;

    const errors = validateFormAssessment(title, description, grade);
    // Converter um objeto em array
    const hasError = Object.keys(errors);
    if (hasError.length) {
      setFieldsErrors(errors);
      return;
    }

    // Se passar, limpar os errors
    setFieldsErrors({} as FieldsErrors);

    // dispatch => estado avaliações
    const data = { title, grade, description };
    dispatch(createAssessment(data));
  }

  useEffect(() => {
    if (!assessmentsRedux.errors) {
      alert("Assessments created!");
      setTimeout(() => {
        handleClose();
      }, 200);
    }
  }, [assessmentsRedux]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={onSubmit}>
          <Grid2 container spacing={1}>
            <Grid2 size={12}>
              <Typography variant="h6">New Assessments</Typography>
            </Grid2>

            {/** Titulo */}
            <Grid2 size={12}>
              <FormControl fullWidth error={!!fieldsErrors.title}>
                <FormLabel htmlFor="title-assessment">Title</FormLabel>
                <TextField
                  id="title-assessment"
                  name="title-assessment"
                  type="text"
                  placeholder="My title..."
                  variant="outlined"
                  fullWidth
                  required
                  error={!!fieldsErrors.title}
                  helperText={fieldsErrors.title}
                />
              </FormControl>
            </Grid2>

            {/** Nota */}
            <Grid2 size={12}>
              <FormControl fullWidth error={!!fieldsErrors.grade}>
                <FormLabel htmlFor="grade-assessment">Grade</FormLabel>
                <TextField
                  id="grade-assessment"
                  name="grade-assessment"
                  type="number"
                  placeholder="10"
                  variant="outlined"
                  fullWidth
                  required
                  error={!!fieldsErrors.grade}
                  helperText={fieldsErrors.grade}
                />
              </FormControl>
            </Grid2>

            {/** Descrição */}
            <Grid2 size={12} mb={2}>
              <FormControl fullWidth error={!!fieldsErrors.description}>
                <FormLabel htmlFor="desc-assessment">Description</FormLabel>
                <TextField
                  id="desc-assessment"
                  name="desc-assessment"
                  type="text"
                  placeholder="My description..."
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={3}
                  required
                  error={!!fieldsErrors.description}
                  helperText={fieldsErrors.description}
                />
              </FormControl>
            </Grid2>

            <Grid2 size={6}>
              <Button
                variant="contained"
                color="warning"
                fullWidth
                type="reset"
              >
                Cancel
              </Button>
            </Grid2>
            <Grid2 size={6}>
              <Button variant="contained" fullWidth type="submit">
                Submit
              </Button>
            </Grid2>
          </Grid2>
        </form>
      </Box>
    </Modal>
  );
}
