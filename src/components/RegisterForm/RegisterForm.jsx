import React from "react"
import { BtnSignIn, CheckbBoxDiv, LabelInput, LinkDocument,RegistForm, RegistInput, RegistInputCheck,RegisterDivInput, RegisterTitle, SpanElem } from "./RegisterForm.styled";


const RegisterForm = () => {
    

    return (
      <RegistForm action="">
            <RegisterTitle>РЕЄСТРАЦІЯ</RegisterTitle>

            <RegistInput type="email" placeholder="E-mail"/>
            <RegistInput type="password" placeholder="Пароль"/>
            <RegistInput type="password" placeholder="Повторіть пароль" />

            <CheckbBoxDiv>
                <RegisterDivInput>
                    <RegistInputCheck type="checkbox" id="rememb" /> 
                    <LabelInput htmlFor="rememb">Запам&rsquo;ятати мене </LabelInput>
                </RegisterDivInput>
                <RegisterDivInput>
                    <RegistInputCheck type="checkbox" id="subckribe"/> 
                    <LabelInput htmlFor="subckribe">Так, я хочу підписатися на розсилку та отримувати інформацію про оновлення </LabelInput>
                </RegisterDivInput>
                <RegisterDivInput>
                    <RegistInputCheck type="checkbox" id="agrre"/> 
                    <LabelInput htmlFor="agrre">Я згоден з <LinkDocument>Правилами користування сайтом</LinkDocument><SpanElem>*</SpanElem></LabelInput>
                </RegisterDivInput>
            </CheckbBoxDiv>

            <BtnSignIn>ЗАРЕЄСТРУВАТИСЯ</BtnSignIn>
            
        
        </RegistForm>
        
    )
};

export default RegisterForm