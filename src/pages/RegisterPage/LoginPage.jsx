import React from 'react';
import EnterForm from '../../components/RegisterForm/EnterForm';
import {
  DivSignIn,
  LinkSignIn,
  OrElem,
  RegistQuestion,
  RegisterContainer,
  RegisterNav,
} from '../RegisterPage/RegisterPage.styled';
import NavLinkComponent from '../../components/NavLinkComponent/NavLinkComponent';
import BtnSingInGoogle from '../../components/ButtonsSingIn/BtnSingInGoogle';
import BtnSingInFacebook from '../../components/ButtonsSingIn/BtnSingInFacebook';

const LoginPage = () => {
  return (
    <RegisterContainer className="container">
        <RegisterNav>
          <NavLinkComponent
              propTo="/"
              title ="Головна /"
          />
          <NavLinkComponent
              propTo="/signin"
              title ="Увійти"
          />
        </RegisterNav>
      

      <EnterForm />
      <OrElem>або</OrElem>
      
      <BtnSingInGoogle />
      <BtnSingInFacebook />
            
      <DivSignIn>
        <RegistQuestion>Ще не маєте облікового запису?</RegistQuestion>
        <LinkSignIn to="/signup">Зареєструйтеся!</LinkSignIn>
      </DivSignIn>

    </RegisterContainer>
  );
};
export default LoginPage;
