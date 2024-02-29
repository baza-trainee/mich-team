import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
const MainPage = lazy(() => import('./pages/MainPage/MainPage.jsx'));
const RegisterPage = lazy(
  () => import('./pages/RegisterPage/RegisterPage.jsx')
);
const LoginPage = lazy(() => import('./pages/RegisterPage/LoginPage.jsx'));
const ProductCard = lazy(() => import('./pages/ProductPage.jsx'));
const Cart = lazy(() => import('./pages/CartPage/CartPage.jsx'));
const Error = lazy(() => import('./pages/ErrorPage/ErrorPage.jsx'));
const PersonalAccountPage = lazy(
  () => import('./pages/PersonalAccountPage/PersonalAccountPage.jsx')
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/merch" element={<h1>MERCH PAGE</h1>} />
        <Route path="/merch/:productId" element={<ProductCard />} />
        
        <Route path="/cart" element={<Cart />} />
        <Route path="/personal-account" element={<PersonalAccountPage />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default App;
