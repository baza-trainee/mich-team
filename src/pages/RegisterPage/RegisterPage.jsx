import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import {
  RegisterContainer,
  RegisterNav,
  RegisterTitle,
  StyledNavLink,
} from './RegisterPage.styled';
import React from 'react';

const RegisterPage = () => {
  return (
    <RegisterContainer className="container">
      <RegisterNav>
        <StyledNavLink to="/">Головна /</StyledNavLink>
        <StyledNavLink to="/signup">Реєстрація</StyledNavLink>
      </RegisterNav>

      <RegisterTitle>РЕЄСТРАЦІЯ</RegisterTitle>
      <RegisterForm />
    </RegisterContainer>
  );
};

export default RegisterPage;
