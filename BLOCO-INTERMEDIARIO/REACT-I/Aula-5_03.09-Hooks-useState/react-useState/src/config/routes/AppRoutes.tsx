import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../../pages/Home";

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
