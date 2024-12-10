import { Add } from "@mui/icons-material";
import { Fab } from "@mui/material";

interface FloatButtonProps {
  onClick: () => void;
}

export function FloatButton({ onClick }: FloatButtonProps) {
  return (
    <Fab
      sx={{ position: "fixed", bottom: 20, right: 20 }}
      color="primary"
      aria-label="add"
      onClick={onClick}
    >
      <Add />
    </Fab>
  );
}
