import * as React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader';

const MainPage = React.lazy(() => import('./pages/MainPage'));
const RegisterPage = React.lazy(
  () => import('./pages/RegisterPage/RegisterPage')
);
const LoginPage = React.lazy(() => import('./pages/LoginPage/LoginPage'));
const ProductCard = React.lazy(() => import('./pages/ProductPage'));
const Cart = React.lazy(() => import('./pages/CartPage'));

const NavRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/merch" element={<ProductCard />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Suspense>
  );
};

export default NavRoutes;
