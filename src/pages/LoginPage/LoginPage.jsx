import React from 'react';
import EnterForm from '../../components/EnterForm/EnterForm';
import { Title, LoginContainer } from './LoginPage.styled';

const LoginPage = () => {
  return (
    <LoginContainer>
      <Title>УВІЙТИ</Title>
      <EnterForm />
      
    </LoginContainer>
  );
};
export default LoginPage;
