import React, { useState } from "react";

import { BtnSignIn, CheckbBoxDiv, LabelCheck, LinkDocument,RegistForm, RegistInputCheck,RegisterDivInput, RegisterTitle, SpanElem } from "./RegisterForm.styled";
import DivPasswordComponet from "../DivPasswordComponent/DivPasswordComponent";


const RegisterForm = () => {
    const [password, setPassword] = useState(true);
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPassvordValue] = useState('');
    const [passwordValueCheck, setPassvordValueCheck] = useState('');

    const handleOnClick = (e) => {
        e.preventDefault();
        e.target.classList.add('active')
    }

    const handleOnChangeEmail = (value) => {
        setEmailValue(value);
    }

    const handleOnChange = (value) => {
        setPassvordValue(value);
    }

    const handleOnChangeCheck = (value) => {
        setPassvordValueCheck(value);
    }

    return (
      <RegistForm action="">
            <RegisterTitle>РЕЄСТРАЦІЯ</RegisterTitle>

            
            <DivPasswordComponet
                type="email"
                titleInput="Введіть e-mail"
                onChange={(e) => handleOnChangeE(e.target.value)}
            />

            <DivPasswordComponet
                type={password ? 'password' : 'text'}
                titleInput="Введіть пароль"
                onChange={(e) => handleOnChange(e.target.value)}
                value={passwordValue}
                onClick={() => setPassword(!password)}
                password={password}
            />

            <DivPasswordComponet
                className={(passwordValue===passwordValueCheck)?'':'redError'}
                type={password ? 'password' : 'text'}
                titleInput="Повторіть пароль"
                onChange={(e) =>handleOnChangeCheck(e.target.value)}
                value={passwordValueCheck}
                onClick={() => setPassword(!password)}
                password={password}
            />
            

            <CheckbBoxDiv>
                <RegisterDivInput>
                    <RegistInputCheck type="checkbox" id="rememb" /> 
                    <LabelCheck htmlFor="rememb">Запам&rsquo;ятати мене </LabelCheck>
                </RegisterDivInput>
                <RegisterDivInput>
                    <RegistInputCheck type="checkbox" id="subckribe"/> 
                    <LabelCheck htmlFor="subckribe">Так, я хочу підписатися на розсилку та отримувати інформацію про оновлення </LabelCheck>
                </RegisterDivInput>
                <RegisterDivInput>
                    <RegistInputCheck type="checkbox" id="agrre"/> 
                    <LabelCheck htmlFor="agrre">Я згоден з <LinkDocument>Політикою конфіденційності</LinkDocument> та <LinkDocument>Правилами користування сайтом</LinkDocument><SpanElem>*</SpanElem></LabelCheck>
                </RegisterDivInput>
            </CheckbBoxDiv>

            <BtnSignIn onClick = {handleOnClick} type="submit">ЗАРЕЄСТРУВАТИСЯ</BtnSignIn>
            
        
        </RegistForm>
        
    )
};

export default RegisterForm