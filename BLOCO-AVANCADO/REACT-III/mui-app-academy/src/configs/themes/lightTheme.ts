import { createTheme } from "@mui/material";
import { blue, grey } from "@mui/material/colors";

export const lightTheme = createTheme({
  // CORES
  palette: {
    mode: "light",
    primary: {
      main: blue[300],
    },
    secondary: {
      main: grey[400],
    },
    // info: {
    //   main: "#2b385b",
    // },
    divider: blue[200],
  },

  // RESPONSIVIDADE
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1120,
      xl: 1536,
    },
  },

  // CUSTOMIZAÇÃO DOS COMPONENTES
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 18,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        // root: {
        //   fontStyle: "oblique",
        // },
        body1: {
          fontSize: "18px",
        },
        h6: {
          fontStyle: "italic",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          paddingBottom: 15,
        },
      },
    },
  },
});
