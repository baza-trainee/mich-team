import ButtonClose from '../../components/ButtonClose/ButtonClose';
import BtnSingInFacebook from '../../components/ButtonsSingIn/BtnSingInFacebook';
import BtnSingInGoogle from '../../components/ButtonsSingIn/BtnSingInGoogle';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

import {
  DivSignIn,
  LinkSignIn,
  OrElem,
  RegistQuestion,
  RegisterContainer,
  RegisterNav,
  StyledNavLink,
} from './RegisterPage.styled';
import React, { useEffect, useState }  from 'react';

const RegisterPage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
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
        <StyledNavLink to="/">Головна /</StyledNavLink>
        <StyledNavLink to="/signup">Реєстрація</StyledNavLink>
      </RegisterNav>    
      )}
      

      
      <RegisterForm />

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
