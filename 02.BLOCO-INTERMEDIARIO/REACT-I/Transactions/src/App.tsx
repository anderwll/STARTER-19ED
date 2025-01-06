import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./config/global/GlobalStyle";
import { AppRoutes } from "./config/routes/AppRoutes";
import { light } from "./config/themes/light";
import { dark } from "./config/themes/dark";
import { ThemeContext } from "./config/contexts/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  // useEffect(() => {
  //   alert("Mudouu");
  // }, [theme]);

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
