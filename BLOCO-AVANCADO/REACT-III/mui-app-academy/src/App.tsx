import { Provider } from "react-redux";
import { GlobalStyled } from "./configs/global/GlobalStyled";
import { AppRoutes } from "./configs/routes/AppRoutes";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";
import { ThemeProvider } from "@mui/material";
import { lightTheme } from "./configs/themes/lightTheme";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyled />
          <AppRoutes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
