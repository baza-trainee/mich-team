import React, { useState } from "react";
import openEye from '../../icons/open-eye.svg';
import closeEye from '../../icons/close-eye.svg';
import { BtnSignIn, CheckbBoxDiv, DivPasword, LabelCheck, LabelInput, LinkDocument,RegistForm, RegistInput, RegistInputCheck,RegisterDivInput, RegisterTitle, ShowIcon, SpanElem } from "./RegisterForm.styled";


const RegisterForm = () => {
    const [password, setPassword] = useState(true);
    const [passwordValue, setPassvordValue] = useState('');
    const [passwordValueCheck, setPassvordValueCheck] = useState('');

    const handleOnClick = (e) => {
        e.preventDefault();
        e.target.classList.add('active')
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

            
            <DivPasword>
                <RegistInput type="email" placeholder="" />
                <LabelInput>Введіть e-mail</LabelInput>
            </DivPasword>
            
            <DivPasword>
                <RegistInput type={password ? 'password' : 'text'} placeholder="" onChange={(e)=>handleOnChange(e.target.value)} value={passwordValue}></RegistInput>
                <LabelInput>Введіть пароль</LabelInput>
                <ShowIcon src={password ? openEye : closeEye} onClick={() => setPassword(!password)} />
            </DivPasword>

            <DivPasword className={(passwordValue===passwordValueCheck)?'':'redError'}>
                <RegistInput type={password ? 'password' : 'text'} placeholder=""  onChange={(e) => handleOnChangeCheck(e.target.value)} value={passwordValueCheck}/>
                <LabelInput>Повторіть пароль</LabelInput>
                <ShowIcon  src={password ? openEye : closeEye}  onClick={() => setPassword(!password)}/>
            </DivPasword>
            
    

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