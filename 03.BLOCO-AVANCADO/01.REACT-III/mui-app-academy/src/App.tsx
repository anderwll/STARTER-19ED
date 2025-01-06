import { GlobalStyled } from "./configs/global/GlobalStyled";
import { AppRoutes } from "./configs/routes/AppRoutes";
import { ThemeProvider } from "@mui/material";
import { lightTheme } from "./configs/themes/lightTheme";
import { darkTheme } from "./configs/themes/darkTheme";
import { useAppSelector } from "./store/hooks";

function App() {
  const { mode } = useAppSelector((state) => state.settings);

  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <GlobalStyled />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
