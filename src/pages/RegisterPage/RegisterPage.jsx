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
import React  from 'react';

const RegisterPage = () => {
  

  return (
    <RegisterContainer className="container">
      <RegisterNav>
        <StyledNavLink to="/">Головна /</StyledNavLink>
        <StyledNavLink to="/signup">Реєстрація</StyledNavLink>
      </RegisterNav>

      
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
