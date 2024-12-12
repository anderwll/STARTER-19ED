import { Button, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router-dom";
import { resetAssessmentDetail } from "../store/modules/assessmentDetail/assessmentDetailSlice";

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
    <div>
      <Typography>Detalhes de uma avaliação</Typography>
      <Typography>{assessmentDetailRedux.title}</Typography>
      <Button onClick={handleReturn}>Voltar</Button>
    </div>
  );
}
