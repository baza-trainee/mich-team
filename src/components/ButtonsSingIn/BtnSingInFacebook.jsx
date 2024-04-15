import React, { useEffect, useState } from 'react';
import { SingInFacebook } from './BtnSingIn.styled';
import facebook from '../../icons/facebook.svg';
import { contWithFacebook } from '../../services/facebook-auth';

const BtnSingInFacebook = () => {
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
    <SingInFacebook onClick={() => contWithFacebook()}>
      <img src={facebook} alt="facebook"></img>
      Увійти з facebook
    </SingInFacebook>
  ) : (
    <SingInFacebook onClick={() => contWithFacebook()}>
      <img src={facebook} alt="facebook"></img>
      Увійти за допомогою facebook
    </SingInFacebook>
  );
};

export default BtnSingInFacebook;
