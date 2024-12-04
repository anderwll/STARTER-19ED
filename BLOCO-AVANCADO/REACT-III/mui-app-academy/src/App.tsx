import { Provider } from "react-redux";
import { GlobalStyled } from "./configs/global/GlobalStyled";
import { AppRoutes } from "./configs/routes/AppRoutes";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyled />
        <AppRoutes />
      </PersistGate>
    </Provider>
  );
}

export default App;
