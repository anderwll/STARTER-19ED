import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./config/global/GlobalStyles";
import { AppRoutes } from "./config/routes/AppRoutes";
import { lightTheme } from "./config/themes/light";
import { darkTheme } from "./config/themes/dark";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppRoutes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
