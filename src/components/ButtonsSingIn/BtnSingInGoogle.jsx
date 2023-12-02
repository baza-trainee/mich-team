import React from 'react';
import { SingInGoogle } from './BtnSingIn.styled';
import google from '../../icons/google.svg';

const BtnSingInGoogle = () => {
  return (
    <SingInGoogle>
      <img src={google} alt="google"></img>
      Увійти за допомогою Google
    </SingInGoogle>
  );
};
export default BtnSingInGoogle;
