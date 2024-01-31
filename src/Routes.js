import * as React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader';

const MainPage = React.lazy(() => import('./pages/MainPage/MainPage.jsx'));
const RegisterPage = React.lazy(
  () => import('./pages/RegisterPage/RegisterPage')
);
const LoginPage = React.lazy(() => import('./pages/RegisterPage/LoginPage'));
const ProductCard = React.lazy(() => import('./pages/ProductPage'));
const Cart = React.lazy(() => import('./pages/CartPage/CartPage'));
const Error = React.lazy(() => import('./pages/ErrorPage/ErrorPage.jsx'));

const NavRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/merch" element={<ProductCard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </Suspense>
  );
};

export default NavRoutes;
