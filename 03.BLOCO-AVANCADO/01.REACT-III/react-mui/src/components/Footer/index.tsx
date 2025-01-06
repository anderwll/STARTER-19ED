import { Box, Typography } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <Box
      component="footer"
      height="auto"
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      py={2}
    >
      <Typography variant="body1">Developed by 19ª edition.</Typography>
      <CopyrightIcon sx={{ width: 15, mx: 0.5 }} />
      <Link to="https://www.growdev.com.br/" target="_blank">
        Growdev
      </Link>
    </Box>
  );
}
