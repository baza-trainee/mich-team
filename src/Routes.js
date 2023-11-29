import * as React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader';

const MainPage = React.lazy(() => import('./pages/MainPage'));
const RegisterPage = React.lazy(
  () => import('./pages/RegisterPage/RegisterPage')
);
const LoginPage = React.lazy(() => import('./pages/SingUpPage'));
const ProductCard = React.lazy(
  () => import('./components/ProductCard/ProductCard')
);

const NavRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/merch" element={<ProductCard />} />
      </Routes>
    </Suspense>
  );
};

export default NavRoutes;
