import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Presence } from "../../pages/Presence";
import UseEffect from "../../pages/UseEffect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Error Page</h1>,
  },
  {
    path: "/presenca",
    element: <Presence />,
  },
  {
    path: "/use-effect",
    element: <UseEffect />,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
