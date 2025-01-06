import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../../pages/Home";
import { SobreNos } from "../../pages/SobreNos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <SobreNos />,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
