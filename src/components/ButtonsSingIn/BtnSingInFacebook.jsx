import React from 'react';
import { SingInFacebook } from './BtnSingIn.styled';
import facebook from '../../icons/facebook.svg';

const BtnSingInFacebook = () => {
  return (
    <SingInFacebook>
      <img src={facebook} alt="facebook"></img>
      Увійти за допомогою facebook
    </SingInFacebook>
  );
};

export default BtnSingInFacebook;
