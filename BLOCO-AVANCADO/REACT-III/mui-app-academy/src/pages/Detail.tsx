import { Button, Grid2, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router-dom";
import { resetAssessmentDetail } from "../store/modules/assessmentDetail/assessmentDetailSlice";
import SnackbarAlert from "../components/SnackbarAlert";

export function Detail() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const assessmentDetailRedux = useAppSelector(
    (state) => state.assessmentDetail
  );

  function handleReturn() {
    dispatch(resetAssessmentDetail());
    navigate("/home");
  }

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={12}>
        <Typography>Detalhes de uma avaliação</Typography>
      </Grid2>
      <Grid2 size={12}>
        <Typography>{assessmentDetailRedux.title}</Typography>
      </Grid2>
      <Grid2 size={12}>
        <Button onClick={handleReturn}>Voltar</Button>
      </Grid2>

      <SnackbarAlert />
    </Grid2>
  );
}
