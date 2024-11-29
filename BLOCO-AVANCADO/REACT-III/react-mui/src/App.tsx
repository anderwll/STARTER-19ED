import { Provider } from "react-redux";
import { GlobalStyle } from "./config/global/GlobalStyles";
import { AppRoutes } from "./config/routes/AppRoutes";
import { CssBaseline } from "@mui/material";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <GlobalStyle />
      <AppRoutes />
    </Provider>
  );
}

export default App;
