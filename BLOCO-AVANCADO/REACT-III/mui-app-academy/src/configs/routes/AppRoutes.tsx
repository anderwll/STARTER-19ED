import { createBrowserRouter, Navigate } from "react-router";
import { Login } from "../../pages/Login";
import { RouterProvider } from "react-router-dom";
import { Home } from "../../pages/Home";
import { DefaultLayout } from "../layout/DefaultLayout";

// Definição das rotas
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <DefaultLayout children={<Home />} />,
  },

  {
    path: "/",
    element: <Navigate to="/login" />,
  },
]);

// Prover essa rotas
export function AppRoutes() {
  return <RouterProvider router={router} />;
}
