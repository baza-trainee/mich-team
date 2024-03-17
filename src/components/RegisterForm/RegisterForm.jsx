import React, { useContext, useState } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useNavigate } from 'react-router-dom';

import { CheckbBoxDiv, LabelCheck, LinkDocument,RegistForm, RegistInputCheck,RegisterDivInput, RegisterTitle, SpanElem } from "./RegisterForm.styled";
import DivPasswordComponet from "../DivPasswordComponent/DivPasswordComponent";
import BtnSign from "../BtnSign/BtnSign";
import ErorMessageComponent from "../ErorMessageComponent/ErorMessageComponent";
import UserContext from '../../UserData/UserContext';
import { requestSignUpUser } from "../../services/user-autor-app";

const RegisterForm = () => {
    const userData = useContext(UserContext);

    const [password, setPassword] = useState(true);
    
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPassvordValue] = useState('');
    const [passwordValueCheck, setPassvordValueCheck] = useState('');
    
    const [trueEmail, setTrueEmail] = useState(true);
    const [truePassword, setTruePassword] = useState(true);
    const [trueCheckPassword, setTrueCheckPassword] = useState(true);
    
    const [isCheckedRemember, setIsCheckedRemember] = useState(false);
    const [isCheckedSubscribe, setIsCheckedSubscribe] = useState(false);
    const [isCheckedAgree, setIsCheckedAgree] = useState(false);
    
    const [isAgree, setIsAgree] = useState(true);
    const [newUser, setNewUser] = useState(true);
    
    const history = useNavigate();



    function isValidEmail(email) {
        if (!email) return false;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    function isValidPassword(password) {
        if (!password) return false;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
        return passwordRegex.test(password);
    }

    const handleOnClick = (e, email, password, passwordCheck) => {
        e.preventDefault();
        if ((!isValidEmail(email)) && (!isValidPassword(password))) {
            Notify.failure('Емейл не валідний');
            setTrueEmail(false);
            Notify.failure('Пароль не валідний');
            setTruePassword(false);
                return;
        }

        switch (false) {
            case isValidEmail(email):
                Notify.failure('Емейл не валідний');
                setTrueEmail(false);
                return;

            case isValidPassword(password):
                Notify.failure('Пароль не валідний');
                setTruePassword(false);
                return;

            case password === passwordCheck:
                Notify.failure('Паролі не співпадають');
                setTrueCheckPassword(false);
                return;

            case isCheckedAgree:
                setIsAgree(false);
                return;

            default:
                // Якщо всі умови виконані, не потрібно нічого робити
                break;
        }

        

        // if (!isValidEmail(email)) {
        //     Notify.failure('Емейл не валідний');
        //     setTrueEmail(false);
        //     return;
        // }


        // if (!isValidPassword(password)) {
        //     Notify.failure('Пароль не валідний');
        //     setTruePassword(false);
        //     return;
        // }

        // if (!(password === passwordCheck)) {
        //     Notify.failure('Паролі не співпадають');
        //     setTrueCheckPassword(false);
        //     return;
        // }

        // if (!isCheckedAgree) {
        //     setIsAgree(false);
        //     return;
        // }


        setTrueEmail(true);
        setTruePassword(true);
        setTrueCheckPassword(true);     

        const newUserData = {
            "password": passwordValue,
            "is_subscribed": isCheckedSubscribe,
            "email": emailValue,
            "re_password": passwordValueCheck,            
        }

        
        
        const responseData = requestSignUpUser(newUserData);   

        responseData.then(result => {
            localStorage.setItem("showModal", true)
            userData.UserData.setUserEmail(emailValue);
            
    
            history('/');
           
            return result;
        })
        .catch(error => {
            console.log(error)
            setNewUser(false);
            e.target.classList.remove('active');
            return;
        });

        


         e.target.classList.add('active');

    }

    const handleOnChangeEmail = (value) => {
        setEmailValue(value);
        setTrueEmail(true);

    }

    const handleOnChange = (value) => {
        setPassvordValue(value);
        setTruePassword(true);
    }

    const handleOnChangeCheck = (value) => {
        setPassvordValueCheck(value);
        setTrueCheckPassword(true);
    }

    const handleCheckboxChangeRemember = () => {
        setIsCheckedRemember(!isCheckedRemember);
    };

    const handleCheckboxChangedSubscribe = () => {
        setIsCheckedSubscribe(!isCheckedSubscribe);
    };

    const handleCheckboxChangedAgree = () => {
        setIsCheckedAgree(!isCheckedAgree);
        setIsAgree(true)
    };



    return (
      <RegistForm action="">
            <RegisterTitle>РЕЄСТРАЦІЯ</RegisterTitle>

            {(newUser) ? '' :
             (<ErorMessageComponent
                  message = "Вибачте, але ця електронна адреса вже зареєстрована в нашій системі."
             />)
            }
            
            {(isAgree) ? '': 
             (<ErorMessageComponent
                  message = "Вибачте, але Ви не погодились з Політикою конфіденційності та Правилами користування сайтом"
             />)
             }

           
            <DivPasswordComponet
                className={(trueEmail) ? '' : 'redError'}
                type="email"
                titleInput="Введіть e-mail"
                onChange={(e) => handleOnChangeEmail(e.target.value)}
                value={emailValue}
                onClick={() => setPassword(!password)}
                password={password}
            />

            <DivPasswordComponet
                className={(truePassword) ? '' : 'redError'}
                type={password ? 'password' : 'text'}
                titleInput="Введіть пароль"
                onChange={(e) => handleOnChange(e.target.value)}
                value={passwordValue}
                onClick={() => setPassword(!password)}
                password={password}
            />

            <DivPasswordComponet
                className={(trueCheckPassword) ? '' : 'redError'}
                type={password ? 'password' : 'text'}
                titleInput="Повторіть пароль"
                onChange={(e) =>handleOnChangeCheck(e.target.value)}
                value={passwordValueCheck}
                onClick={() => setPassword(!password)}
                password={password}
            />
            

            <CheckbBoxDiv>
                <RegisterDivInput>
                    <RegistInputCheck
                        type="checkbox"
                        id="rememb"
                        checked={isCheckedRemember}
                        onChange={handleCheckboxChangeRemember}
                    /> 
                    <LabelCheck htmlFor="rememb">Запам&rsquo;ятати мене </LabelCheck>
                </RegisterDivInput>
                <RegisterDivInput>
                    <RegistInputCheck
                        type="checkbox"
                        id="subckribe"
                        checked={isCheckedSubscribe}
                        onChange={handleCheckboxChangedSubscribe}
                    /> 
                    <LabelCheck htmlFor="subckribe">Так, я хочу підписатися на розсилку та отримувати інформацію про оновлення </LabelCheck>
                </RegisterDivInput>
                <RegisterDivInput  className={(isAgree) ? '' : 'redError'}>
                    <RegistInputCheck
                        type="checkbox"
                        id="agrre"
                        checked={isCheckedAgree}
                        onChange={handleCheckboxChangedAgree}
                    /> 
                    <LabelCheck htmlFor="agrre">Я згоден з <LinkDocument>Політикою конфіденційності</LinkDocument> та <LinkDocument>Правилами користування сайтом</LinkDocument><SpanElem>*</SpanElem></LabelCheck>
                </RegisterDivInput>
            </CheckbBoxDiv>

            <BtnSign
                onClick={(e) => handleOnClick(e, emailValue,passwordValue,passwordValueCheck)}
                title='ЗАРЕЄСТРУВАТИСЯ'
            />
                        
        </RegistForm>
        
    )
};

    export default RegisterForm;