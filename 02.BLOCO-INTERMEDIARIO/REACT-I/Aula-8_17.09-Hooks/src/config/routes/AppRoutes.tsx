import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../../pages/Home";
import UseEffect from "../../pages/UseEffect";
import UseRef from "../../pages/UseRef";
import UseMemo from "../../pages/UseMemo";
import UseCallback from "../../pages/UseCallback";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Error Page</h1>,
  },
  {
    path: "/use-effect",
    element: <UseEffect />,
  },
  {
    path: "/use-ref",
    element: <UseRef />,
  },
  {
    path: "/use-memo",
    element: <UseMemo />,
  },
  {
    path: "/use-callback",
    element: <UseCallback />,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
