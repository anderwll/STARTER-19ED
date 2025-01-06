import { Alert, Snackbar } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { hiddenAlert } from "../../store/modules/alert/alertSlice";

export default function SnackbarAlert() {
  const dispatch = useAppDispatch();
  const alert = useAppSelector((state) => state.alert);

  function handleClose() {
    dispatch(hiddenAlert());
  }

  return (
    <Snackbar
      open={alert.open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Alert
        onClose={handleClose}
        severity={alert.type}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {alert.message}
      </Alert>
    </Snackbar>
  );
}
