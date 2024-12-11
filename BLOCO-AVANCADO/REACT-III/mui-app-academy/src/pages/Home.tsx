import { Divider, Grid2, Typography } from "@mui/material";
import { useAppSelector } from "../store/hooks";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FloatButton } from "../components/FloatButton";
import { UpsertModal } from "../components/UpsertModal";
import { TableAssessments } from "../components/TableAssessments";

export function Home() {
  const navigate = useNavigate();

  const userLoggedRedux = useAppSelector((state) => state.userLogged);

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (!userLoggedRedux.id) {
      // navego para login
      navigate("/login");
    }
  }, [userLoggedRedux, navigate]);

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={12}>
        <Typography variant="h6">
          Wellcome,{" "}
          <Typography component="span" variant="h6" sx={{ fontWeight: "bold" }}>
            {userLoggedRedux.name}
          </Typography>
        </Typography>
      </Grid2>
      <Grid2 size={12}>
        <Divider />
      </Grid2>
      <Grid2 size={12}>
        <TableAssessments />
      </Grid2>

      <FloatButton onClick={() => setOpenModal(true)} />
      <UpsertModal open={openModal} handleClose={() => setOpenModal(false)} />
    </Grid2>
  );
}
