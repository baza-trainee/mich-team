import React from "react"
import { BtnNetwork, BtnSignIn, CheckbBoxDiv, LabelInput, LinkDocument, RegistForm, RegistInput, RegistInputCheck, RegisterDivInput, SpanElem } from "./RegisterForm.styled";
import { useEffect } from "react";
import { useState } from "react";

export const RegisterForm = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add a listener to update screenWidth on resize
    window.addEventListener('resize', handleResize);

    // Remove the listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
        <RegistForm action="">
            <RegistInput type="email" placeholder="E-mail"/>
            <RegistInput type="password" placeholder="Пароль"/>
            <RegistInput type="password" placeholder="Повторіть пароль" />

            <CheckbBoxDiv>
                <RegisterDivInput>
                    <RegistInputCheck type="checkbox" id="rememb" /> 
                    <LabelInput for="rememb">Запам&rsquo;ятати мене </LabelInput>
                </RegisterDivInput>
                <RegisterDivInput>
                    <RegistInputCheck type="checkbox" id="subckribe"/> 
                    <LabelInput for="subckribe">Так, я хочу підписатися на розсилку та отримувати інформацію про оновлення </LabelInput>
                </RegisterDivInput>
                <RegisterDivInput>
                    <RegistInputCheck type="checkbox" id="agrre"/> 
                    <LabelInput for="agrre">Я згоден з <LinkDocument>Правилами користування сайтом</LinkDocument><SpanElem>*</SpanElem></LabelInput>
                </RegisterDivInput>
            </CheckbBoxDiv>

            <BtnSignIn>ЗАРЕЄСТРУВАТИСЯ</BtnSignIn>
            {(screenWidth<768)?<BtnNetwork>УВІЙТИ З GOOGLE</BtnNetwork>:<BtnNetwork>УВІЙТИ ЗА ДОПОМОГОЮ GOOGLE</BtnNetwork>}
            {(screenWidth < 768) ? <BtnNetwork>УВІЙТИ З FACEBBOK</BtnNetwork> : <BtnNetwork>УВІЙТИ ЗА ДОПОМОГОЮ FACEBBOK</BtnNetwork>}
            
        </RegistForm>
        
    )
};