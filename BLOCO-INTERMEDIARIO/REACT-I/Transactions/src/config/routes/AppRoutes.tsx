import { Home } from "../../pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Error Page</h1>,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
