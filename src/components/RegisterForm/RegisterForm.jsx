import React, { useState } from "react";
import openEye from '../../icons/open-eye.svg';
import closeEye from '../../icons/close-eye.svg';
import { BtnSignIn, CheckbBoxDiv, DivPasword, LabelInput, LinkDocument,RegistForm, RegistInput, RegistInputCheck,RegisterDivInput, RegisterTitle, ShowIcon, SpanElem } from "./RegisterForm.styled";


const RegisterForm = () => {
    const [password, setPassword] = useState(true);

    return (
      <RegistForm action="">
            <RegisterTitle>РЕЄСТРАЦІЯ</RegisterTitle>

            <RegistInput type="email" placeholder="E-mail" />
            <DivPasword>
                <RegistInput type={password ? 'password' : 'text'} placeholder="Пароль"></RegistInput>
                <ShowIcon src={password ? openEye : closeEye} alt="eye" onClick={() => setPassword(!password)}/>
            </DivPasword>
            <DivPasword>
                <RegistInput type={password ? 'password' : 'text'}  placeholder="Повторіть пароль" />
                <ShowIcon src={password ? openEye : closeEye}  alt="eye"  onClick={() => setPassword(!password)}/>
            </DivPasword>
            
    

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