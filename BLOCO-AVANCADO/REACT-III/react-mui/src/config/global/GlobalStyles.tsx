import { GlobalStyles, CSSObject } from "@mui/material";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";

const styles: Record<string, CSSObject> = {
  "*": {
    margin: 0,
    padding: 0,
    fontFamily: "Poppins, sans-serif",
  },
  a: {
    textDecoration: "none",
    color: "black",
  },

  // Outros estilos compartilhados...
};

export function GlobalStyle() {
  return <GlobalStyles styles={styles} />;
}
