import React, { lazy, useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';

import ProductList from './components/ProductList/ProductList.jsx';

import { requesRefreshToken } from './services/user-autor-app.js';

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
//   localStorage.removeItem("refreshToken")   
//     localStorage.removeItem("userRemember")

// sessionStorage.removeItem("refreshToken")
//     sessionStorage.removeItem("accessToken")
    const [refreshToken, setRefreshToken] = useState('');

   const fetchAndSetTokens = async () => {
      setRefreshToken(sessionStorage.getItem("refreshToken"))

      if (refreshToken) {
        const userRefreshToken = {
          "refresh": `${refreshToken}`
        }

        console.log(userRefreshToken);
        try {
          const resp = await requesRefreshToken(userRefreshToken);

          
          sessionStorage.setItem("accessToken", resp.access);
          sessionStorage.setItem("refreshToken", resp.refresh);
          console.log(localStorage.getItem("userRemember"))
          if (localStorage.getItem("userRemember")) {
            localStorage.setItem("refreshToken", resp.refresh)
            console.log(resp.refresh)
            console.log(localStorage.getItem("refreshToken"))
          }
        } catch (error) { console.log(error) };
      }

  }
  useEffect(() => {
    if (localStorage.getItem("refreshToken")) {
      sessionStorage.setItem("refreshToken", localStorage.getItem("refreshToken"));
      console.log('помилка 1')
      fetchAndSetTokens();
    }
  },[])

  useEffect(() => {
     console.log('помилка 2')
    const intervalId = setInterval(fetchAndSetTokens , 10 * 60 * 1000);
      

      return () => clearInterval(intervalId); // Очищення інтервалу при розмонтуванні компонента
  
    
  }, [refreshToken]);
  

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
