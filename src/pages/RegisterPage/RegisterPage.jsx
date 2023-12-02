import RegisterForm from '../../components/RegisterForm/RegisterForm';
import {
  BtnNetwork,
  DivSignIn,
  LinkSignIn,
  OrElem,
  RegistQuestion,
  RegisterContainer,
  RegisterNav,
  StyledNavLink,
} from './RegisterPage.styled';
import React, { useEffect, useState } from 'react';

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
      <RegisterNav>
        <StyledNavLink to="/">Головна /</StyledNavLink>
        <StyledNavLink to="/signup">Реєстрація</StyledNavLink>
      </RegisterNav>

      
      <RegisterForm />

      <OrElem>або</OrElem>

      {(screenWidth<768)?<BtnNetwork>УВІЙТИ З GOOGLE</BtnNetwork>:<BtnNetwork>УВІЙТИ ЗА ДОПОМОГОЮ GOOGLE</BtnNetwork>}
      {(screenWidth < 768) ? <BtnNetwork>УВІЙТИ З FACEBBOK</BtnNetwork> : <BtnNetwork>УВІЙТИ ЗА ДОПОМОГОЮ FACEBBOK</BtnNetwork>}
            
      <DivSignIn>
        <RegistQuestion>Вже маєте аккаунт?</RegistQuestion>
        <LinkSignIn to="/signin">Увійти!</LinkSignIn>
       </DivSignIn>
    </RegisterContainer>
  );
};

export default RegisterPage;
