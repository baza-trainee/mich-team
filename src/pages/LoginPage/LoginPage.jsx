import React from 'react';
import EnterForm from '../../components/EnterForm/EnterForm';
import { Title, LoginContainer } from './LoginPage.styled';
import {
  RegisterNav,
  StyledNavLink,
} from '../RegisterPage/RegisterPage.styled';

const LoginPage = () => {
  return (
    <LoginContainer>
      <div className="container">
        <RegisterNav>
          <StyledNavLink to="/">Головна /</StyledNavLink>
          <StyledNavLink to="/signin">Увійти</StyledNavLink>
        </RegisterNav>
      </div>

      <Title>УВІЙТИ</Title>
      <EnterForm />
    </LoginContainer>
  );
};
export default LoginPage;
