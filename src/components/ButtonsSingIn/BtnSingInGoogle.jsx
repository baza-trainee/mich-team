import React, { useEffect, useState } from 'react';
import { SingInGoogle } from './BtnSingIn.styled';
import google from '../../icons/google.svg';
import { contWithG } from '../../services/google-auth';


const BtnSingInGoogle = () => {

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

  return screenWidth < 768 ? (
    <SingInGoogle onClick ={contWithG}>
      <img src={google} alt="google"></img>
      Увійти з Google
    </SingInGoogle>
  ) : (
    <SingInGoogle onClick ={contWithG}>
    <img src={google} alt="google"></img>
    Увійти за допомогою Google
  </SingInGoogle>
  );

};
export default BtnSingInGoogle;
