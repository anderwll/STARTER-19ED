import { createBrowserRouter, Navigate } from "react-router";
import { Login } from "../../pages/Login";
import { RouterProvider } from "react-router-dom";

// Definição das rotas
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
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
