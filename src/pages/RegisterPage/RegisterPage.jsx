import ButtonClose from '../../components/ButtonClose/ButtonClose';
import BtnSingInFacebook from '../../components/ButtonsSingIn/BtnSingInFacebook';
import BtnSingInGoogle from '../../components/ButtonsSingIn/BtnSingInGoogle';
import NavLinkComponent from '../../components/NavLinkComponent/NavLinkComponent';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

import {
  DivSignIn,
  LinkSignIn,
  OrElem,
  RegistQuestion,
  RegisterContainer,
  RegisterNav,
} from './RegisterPage.styled';
import React, { useEffect, useState }  from 'react';

const RegisterPage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [googleAuthError, setGooglAuthError] = useState(false)
  const [facebookAuthError, setFacebookAuthError] = useState(false)

  useEffect(() => {
  const  googleAuth = localStorage.getItem('googleAuthError');
  const  FacebbokAuth = localStorage.getItem('FacebbokAuthError');

    if (googleAuth) {
      setGooglAuthError(true);
    }

    if (FacebbokAuth) {
      setFacebookAuthError(true);
    }
    
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <RegisterContainer className="container">

      {(screenWidth < 768) ? (
        <ButtonClose 
          propTo="/"
        />
      ): (
      <RegisterNav>
        <NavLinkComponent
              propTo="/"
              title ="Головна /"
        />
        <NavLinkComponent
              propTo="/signup"
              title ="Реєстрація"
        />    
      </RegisterNav>    
      )}
      

      
      <RegisterForm
        GoogleError={googleAuthError}
        FacebookError={facebookAuthError}
      />

      <OrElem>або</OrElem>
      <BtnSingInGoogle />
      <BtnSingInFacebook />
            
      <DivSignIn>
        <RegistQuestion>Вже маєте аккаунт?</RegistQuestion>
        <LinkSignIn to="/signin">Увійти!</LinkSignIn>
      </DivSignIn>

      
    </RegisterContainer>
    
  );
};

export default RegisterPage;
