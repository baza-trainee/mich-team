import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import ProductList from './components/ProductList/ProductList.jsx';
const MainPage = lazy(() => import('./pages/MainPage/MainPage.jsx'));
const RegisterPage = lazy(
  () => import('./pages/RegisterPage/RegisterPage.jsx')
);
const LoginPage = lazy(() => import('./pages/RegisterPage/LoginPage.jsx'));
const ProductCard = lazy(() => import('./pages/ProducatPage/ProductPage.jsx'));
const Cart = lazy(() => import('./pages/CartPage/CartPage.jsx'));
const Error = lazy(() => import('./pages/ErrorPage/ErrorPage.jsx'));
const PersonalAccountPage = lazy(
  () => import('./pages/PersonalAccountPage/PersonalAccountPage.jsx')
);
const PrivacyPolicy = lazy(() => import('./pages/Policy/PrivacyPolicy.jsx'))
const UserAgreement = lazy(() => import('./pages/Policy/UserAgreement.jsx'))
const GoogleAuth = lazy(() => import('./pages/SocialAuth/GoogleAuth.jsx'))
const FacebookAuth = lazy(() => import('./pages/SocialAuth/FacebookAuth.jsx'))

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/merch" element={<ProductList/>} />
        <Route path="/merch/:productId" element={<ProductCard />} />
        
        <Route path="/cart" element={<Cart />} />
        <Route path="/personal-account" element={<PersonalAccountPage />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/user-agreement" element={<UserAgreement />} />
        <Route path="/google-autorization" element={<GoogleAuth />} />
        <Route path="/facebook-autorization" element={<FacebookAuth />} />
      </Route>
    </Routes>
  );
};

export default App;
