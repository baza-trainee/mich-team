import ButtonClose from '../../components/ButtonClose/ButtonClose';
import BtnSingInFacebook from '../../components/ButtonsSingIn/BtnSingInFacebook';
import BtnSingInGoogle from '../../components/ButtonsSingIn/BtnSingInGoogle';
import NavLinkComponent from '../../components/NavLinkComponent/NavLinkComponent';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import RegisterModalWindComponent from '../../components/RegisterModalWindComponent/RegisterModalWindComponent';

import {
  DivSignIn,
  LinkSignIn,
  OrElem,
  RegistQuestion,
  RegisterContainer,
  RegisterNav,
} from './RegisterPage.styled';
import React, { useEffect, useState }  from 'react';

const RegisterPage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  let openWindow = false;

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <RegisterContainer className="container">

      {(screenWidth < 768) ? (
        <ButtonClose 
          propTo="/"
        />
      ): (
      <RegisterNav>
        <NavLinkComponent
              propTo="/"
              title ="Головна /"
        />
        <NavLinkComponent
              propTo="/signup"
              title ="Реєстрація"
        />    
      </RegisterNav>    
      )}
      

      
      <RegisterForm />

      <OrElem>або</OrElem>
      <BtnSingInGoogle />
      <BtnSingInFacebook />
            
      <DivSignIn>
        <RegistQuestion>Вже маєте аккаунт?</RegistQuestion>
        <LinkSignIn to="/signin">Увійти!</LinkSignIn>
      </DivSignIn>

      {(openWindow)? (<RegisterModalWindComponent/>):""}
    </RegisterContainer>
    
  );
};

export default RegisterPage;
