import React from "react";
import { GlobalStyles } from "./configs/global/GlobalStyles";
import { AppRoutes } from "./configs/routes/AppRoutes";

function App() {
  return (
    <React.Fragment>
      <AppRoutes />
      <GlobalStyles />
    </React.Fragment>
  );
}

export default App;
