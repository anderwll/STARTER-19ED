import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../../pages/Home";
import UseEffect from "../../pages/UseEffect";
import UseRef from "../../pages/UseRef";

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
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
