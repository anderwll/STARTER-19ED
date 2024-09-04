import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Presence } from "../../pages/Presence";

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
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
