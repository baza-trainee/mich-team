import React, { lazy, useContext, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';

import ProductList from './components/ProductList/ProductList.jsx';

import { requesRefreshToken } from './services/user-autor-app.js';
import UserContext from './UserData/UserContext.js';

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
//       sessionStorage.removeItem("accessToken")
  const userData = useContext(UserContext);

 

  const fetchAndSetTokens = async () => {
    console.log(userData.UserData.userRefreshToken)
      if (userData.UserData.userRefreshToken) {
        const userRefreshToken = {
          "refresh": `${userData.UserData.userRefreshToken}`
        }

        console.log(userRefreshToken);
        try {
          const resp = await requesRefreshToken(userRefreshToken);

           
          userData.UserData.setUserAccessToken(resp.access);
          userData.UserData.setUserRefreshToken(resp.refresh);

          sessionStorage.setItem("accessToken", resp.access);
          sessionStorage.setItem("refreshToken", resp.refresh);

          if (localStorage.getItem("userRemember")) {
            localStorage.setItem("refreshToken", resp.refresh)
            
          }
        } catch (error) { console.log(error) };
      }

  }
  useEffect(() => {
    if (localStorage.getItem("refreshToken")) {
      userData.UserData.setUserRefreshToken(localStorage.getItem("refreshToken"));
      sessionStorage.setItem("refreshToken", localStorage.getItem("refreshToken"));
      console.log('помилка 1')
            console.log(userData.UserData.userRefreshToken);

      fetchAndSetTokens();
    }
  },[])

  useEffect(() => {
          console.log(userData);

    if (userData.UserData.userRefreshToken) {
      console.log('помилка 2')
    
      const intervalId = setInterval(fetchAndSetTokens , 10 *60* 1000);
      

      return () => clearInterval(intervalId);
    } 
  
    
  }, [userData.UserData.userRefreshToken]);
  

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
