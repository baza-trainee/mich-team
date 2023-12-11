import React from 'react';
import EnterForm from '../../components/EnterForm/EnterForm';
import { Title, LoginContainer } from './LoginPage.styled';
import {
  RegisterNav,
} from '../RegisterPage/RegisterPage.styled';
import NavLinkComponent from '../../components/NavLinkComponent/NavLinkComponent';

const LoginPage = () => {
  return (
    <LoginContainer className="container">
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
      

      <Title>УВІЙТИ</Title>
      <EnterForm />
    </LoginContainer>
  );
};
export default LoginPage;
