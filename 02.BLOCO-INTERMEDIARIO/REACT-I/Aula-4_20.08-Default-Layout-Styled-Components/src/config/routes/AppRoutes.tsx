import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { SobreNos } from '../../pages/SobreNos';
import { Error } from '../../pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/about',
    element: <SobreNos />,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
