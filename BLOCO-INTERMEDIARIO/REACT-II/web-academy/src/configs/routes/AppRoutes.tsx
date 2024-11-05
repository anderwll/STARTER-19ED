import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../../pages/Home";

const router = createBrowserRouter([
  // .. Rotas
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "*", // Tudo menos o que está ali em cima
    element: <h1>Página não encontrada</h1>,
    errorElement: <h1>Not found 404</h1>,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
