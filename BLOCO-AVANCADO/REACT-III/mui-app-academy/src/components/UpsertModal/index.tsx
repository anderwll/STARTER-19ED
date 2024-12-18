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
import { resetAssessmentDetail } from "../../store/modules/assessmentDetail/assessmentDetailSlice";
import { createAssessmentAsyncThunk } from "../../store/modules/assessments/assessmentsSlice";

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
  onClose: () => void;
}

export function UpsertModal({ open, onClose }: UpsertModalProps) {
  const dispatch = useAppDispatch();

  const userLoggedRedux = useAppSelector((state) => state.userLogged);
  const assessmentsRedux = useAppSelector((state) => state.assessments);
  const assessmentDetaiLRedux = useAppSelector(
    ({ assessmentDetail }) => assessmentDetail
  );

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
    const data = {
      title,
      grade,
      description,
      studentId: userLoggedRedux.student.id,
    };

    if (assessmentDetaiLRedux.id) {
      // MODO EDIT
      // dispatch(updateAssessment({ id: assessmentDetaiLRedux.id, ...data }));
    } else {
      // MODO CREATE
      // dispatch(createAssessment(data));
      dispatch(createAssessmentAsyncThunk(data));
    }
  }

  function handleClose() {
    console.log("Closed");
    dispatch(resetAssessmentDetail());
    onClose();
  }

  useEffect(() => {
    if (assessmentsRedux.ok && assessmentsRedux.message) {
      setTimeout(() => {
        onClose();
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              <Typography variant="h6">
                {assessmentDetaiLRedux.id ? "Edit" : "New"} Assessment
              </Typography>
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
                  defaultValue={assessmentDetaiLRedux.title}
                  // value={"Olá Mundo"}
                  // value={assessment.title} //
                  // onChange={(e) =>
                  //   setAssessment((prev) => ({
                  //     ...prev,
                  //     title: e.target.value,
                  //   }))
                  // }
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
                  defaultValue={assessmentDetaiLRedux.grade}
                  // value={assessment.grade}
                  // onChange={(e) =>
                  //   setAssessment((prev) => ({
                  //     ...prev,
                  //     grade: Number(e.target.value),
                  //   }))
                  // }
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
                  defaultValue={assessmentDetaiLRedux.description}
                  // value={assessment.description}
                  // onChange={(e) =>
                  //   setAssessment((prev) => ({
                  //     ...prev,
                  //     description: e.target.value,
                  //   }))
                  // }
                />
              </FormControl>
            </Grid2>

            <Grid2 size={6}>
              <Button
                variant="contained"
                color="warning"
                fullWidth
                type="reset"
                onClick={handleClose}
              >
                Cancel
              </Button>
            </Grid2>
            <Grid2 size={6}>
              <Button
                variant="contained"
                type="submit"
                disabled={assessmentsRedux.loading}
                fullWidth
              >
                {assessmentsRedux.loading ? "Awaiting..." : "Submit"}
              </Button>
            </Grid2>
          </Grid2>
        </form>
      </Box>
    </Modal>
  );
}
