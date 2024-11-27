import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Blog } from "../../pages/Blog";
import { DefaultLayout } from "../layout/DefaultLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout children={<Home />} />,
  },
  {
    path: "/blog",
    element: <DefaultLayout children={<Blog />} />,
  },
  {
    path: "*",
    element: <h1>Not found</h1>,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
