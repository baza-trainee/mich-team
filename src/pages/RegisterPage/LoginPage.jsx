import React, { useEffect, useState } from 'react';
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
import ButtonClose from '../../components/ButtonClose/ButtonClose';


const LoginPage = () => {
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

  return (
    <RegisterContainer className="container">
       {(screenWidth < 768) ? (
        <ButtonClose 
          propTo="/"
        />
      ):  (<RegisterNav>
            <NavLinkComponent
                propTo="/"
                title ="Головна /"
            />
            <NavLinkComponent
                propTo="/signin"
                title ="Увійти"
            />
          </RegisterNav>)}
      

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
