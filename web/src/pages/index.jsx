import { Navigate, useRoutes } from 'react-router-dom';
import ProtectedPage from './app/ProtectedPage';
import NotFound from './misc/NotFound';
import Login from './auth/Login';

export const ProtectedRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <ProtectedPage /> },
    { path: '*', element: <NotFound /> },
  ]);

  return routes;
};
export const UnProtectedRoutes = () => {
  const routes = useRoutes([
    { path: '/login', element: <Login /> },
    { path: '*', element: <Navigate to='/login' replace /> },
  ]);

  return routes;
};
