import { Provider } from "react-redux";
import { GlobalStyled } from "./configs/global/GlobalStyled";
import { AppRoutes } from "./configs/routes/AppRoutes";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyled />
      <AppRoutes />
    </Provider>
  );
}

export default App;
