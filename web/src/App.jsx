import { ProtectedRoutes, UnProtectedRoutes } from '@/pages';
import MainLayout from '@/layouts/MainLayout';
import AuthLayout from '@/layouts/AuthLayout';

const isAuthenticated = () => false;

const App = () => {
  if (isAuthenticated()) {
    return (
      <MainLayout>
        <ProtectedRoutes />
      </MainLayout>
    );
  } else {
    return (
      <AuthLayout>
        <UnProtectedRoutes />
      </AuthLayout>
    );
  }
};

export default App;
