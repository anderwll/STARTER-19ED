import { CssBaseline, CSSObject, GlobalStyles } from "@mui/material";

const styles: Record<string, CSSObject> = {
  body: {
    fontFamily: "Open Sans, sans-serif",
  },
  a: {
    color: "#000000",
  },
};

export function GlobalStyled() {
  return (
    <>
      <CssBaseline />
      <GlobalStyles styles={styles} />
    </>
  );
}
