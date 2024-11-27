import { GlobalStyle } from "./config/global/GlobalStyles";
import { AppRoutes } from "./config/routes/AppRoutes";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <GlobalStyle />
      <AppRoutes />
    </>
  );
}

export default App;
