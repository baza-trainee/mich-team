import React, { useState } from "react";
import PropTypes from 'prop-types';
import { ButtonLink, ButtonUserActive, CloseBtn, EmailIcon, MessageOfemail,  MessageOfemailForgot,  MessageTitle, RegisterModalContent, RegisterModalWind } from "./RegisterModalWindComponent.style";
import smsTracking from '../../icons/sms-tracking.svg';
import closeBtn from '../../icons/close.svg';
import checkIcon from '../../icons/checkIcon.svg'
import { useNavigate } from "react-router-dom";
import {   requestResetPassword, requestResetPasswordConfirm } from "../../services/user-autor-app";
// import UserContext from '../../UserData/UserContext';
// import { useContext } from "react";
import DivPasswordComponet from "../DivPasswordComponent/DivPasswordComponent";
import { Notify } from "notiflix";


const RegisterModalWindComponent = ({ onChange, isActive, newUserMessage, forgotPassword, forgotPasswordSendEmail, newPassword, newPasswordResetSuccess  }) => {
    // const userData = useContext(UserContext);
    const history = useNavigate();
     const location = new URLSearchParams(window.location.search);
    
     //змінні для збереження email і passvord, re-password а також їх валідації
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPassvordValue] = useState('');
    const [truePassword, setTruePassword] = useState(true);
    const [passwordValueCheck, setPassvordValueCheck] = useState('');
    const [trueCheckPassword, setTrueCheckPassword] = useState(true);
    const [password, setPassword] = useState(true);

    // функція для валідації паролю
    const isValidPassword = (password) => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
        return passwordRegex.test(password);
    }

    // функції для передачі значення з інпуту у відповідну змінну: email, password, re-password
    const handleOnChangeEmail = (value) => {
        setEmailValue(value);
    }

    const handleOnChange = (value) => {
        setPassvordValue(value);
        setTruePassword(true);
    }
    
    const handleOnChangeCheck = (value) => {
        setPassvordValueCheck(value);
        setTrueCheckPassword(true);
    }

    
    
    
    // для відображення компонента RegisterModalWindComponent і закриття модальних вікон кнопкою х
    const handleCloseModal = () => {
        const openWindow = false;
        onChange(openWindow);
        localStorage.removeItem('showModalNewUser');
        localStorage.removeItem('showModalPasswordForgot');
        localStorage.removeItem('showModalPasswordReset');  
        history('/');  
    }

    // для переходу на сторінку loginPage після успішної активації
    const handleOnClick = () => {
        const openWindow = false;
        onChange(openWindow);
        localStorage.removeItem('showModalIsActive');
        history('/signin');

    }

    // для запиту на зміну пароля
    const handleOnClickSendEmail = (email) => {
        const userEmail = {
            email: `${email}`
        }

        requestResetPassword (userEmail)
        localStorage.removeItem("showModalPasswordForgot");

        history('/?user_password_reset=true')
    }

    // для запиту на відправку нового пароля
    const handleOnClickSendNewPassword = (password,passwordCheck) => {
        if (!isValidPassword(password)) {
            Notify.failure('Пароль не валідний');
            setTruePassword(false);
            return;
        }

        if (password != passwordCheck) {
            Notify.failure('Паролі не співпадають');
            setTrueCheckPassword(false);
            return;
        }
        const uidUser = location.get('uid');
        const tokenUser = location.get('token');
        const UserData = {
            uid: `${uidUser}`,
            token: `${tokenUser}`,
            new_password: `${password}`
        }
        localStorage.removeItem('showModalPasswordReset');
        requestResetPasswordConfirm(UserData);
        
        history('/?password_reset_success=true')
    }

    

    return <RegisterModalWind>
        {(newUserMessage)?
           (<RegisterModalContent>
            <ButtonLink onClick={() => handleCloseModal()} type="button"><CloseBtn src={closeBtn} alt="closeBtn"></CloseBtn></ButtonLink>
            <EmailIcon src={smsTracking} />
            <MessageTitle>ЕЛЕКТРОННИЙ ЛИСТ НАДІСЛАНО!</MessageTitle>
            <MessageOfemail>Для завершення реєстрації, будь ласка, перевірте свою електронну пошту та підтвердіть свою адресу, клікнувши на посилання у листі від нас</MessageOfemail>
        </RegisterModalContent>) : ""}
    
        {(isActive)?    
        (<RegisterModalContent>
            <EmailIcon src={checkIcon} />
            <MessageTitle>РЕЄСТРАЦІЯ ЗАВЕРШЕНА УСПІШНО</MessageTitle>
            <MessageOfemail>Тепер ви можете користуватися всіма можливостями нашого сайту.</MessageOfemail>
            <ButtonUserActive onClick={()=> handleOnClick()} type="button">ПЕРЕЙТИ ДО МАГАЗИНУ</ButtonUserActive>

        </RegisterModalContent>) : ""}

        {(forgotPassword) ?
            (<RegisterModalContent>
                <ButtonLink onClick={() => handleCloseModal()} type="button"><CloseBtn src={closeBtn} alt="closeBtn"></CloseBtn></ButtonLink>
                <MessageOfemailForgot>Введіть свою електронну пошту, і ми надішлемо вам посилання для відновлення пароля</MessageOfemailForgot>
                <DivPasswordComponet
                    className={''}
                    type="email"
                    titleInput="Введіть e-mail"
                    onChange={(e) => handleOnChangeEmail(e.target.value)}
                    value={emailValue}
                    onClick={() => ''}
                    password={true}
                   
                />
                <ButtonUserActive onClick={() => handleOnClickSendEmail(emailValue)} type="button">ОТРИМАТИ ПОСИЛАННЯ</ButtonUserActive>
            </RegisterModalContent>) : ""}

        {(forgotPasswordSendEmail)?        
           (<RegisterModalContent>
                <ButtonLink onClick={() => handleCloseModal()} type="button"><CloseBtn src={closeBtn} alt="closeBtn"></CloseBtn></ButtonLink>
                <EmailIcon src={smsTracking} />
                <MessageTitle>ЕЛЕКТРОННИЙ ЛИСТ НАДІСЛАНО!</MessageTitle>
                <MessageOfemail>Перевірте вашу електронну пошту та перейдіть за посиланням, яке ми надіслали, щоб продовжити</MessageOfemail>
            </RegisterModalContent>):"" }

        {(newPassword) ?
            (<RegisterModalContent>
                <ButtonLink onClick={() => handleCloseModal()} type="button"><CloseBtn src={closeBtn} alt="closeBtn"></CloseBtn></ButtonLink>
                <MessageTitle>ВІДНОВЛЕННЯ ПАРОЛЮ</MessageTitle>
                <DivPasswordComponet
                    className={(truePassword) ? '' : 'redError'}
                    type={password ? 'password' : 'text'}
                    titleInput="Введіть новий пароль"
                    onChange={(e) => handleOnChange(e.target.value)}
                    value={passwordValue}
                    onClick={() => setPassword(!password)}
                    password={password}
                />

                <DivPasswordComponet
                    className={(trueCheckPassword) ? '' : 'redError'}
                    type={password ? 'password' : 'text'}
                    titleInput="Повторіть пароль"
                    onChange={(e) => handleOnChangeCheck(e.target.value)}
                    value={passwordValueCheck}
                    onClick={() => setPassword(!password)}
                    password={password}
                />
                <ButtonUserActive onClick={() => handleOnClickSendNewPassword(passwordValue, passwordValueCheck)} type="button">ЗБЕРЕГТИ</ButtonUserActive>
            </RegisterModalContent>) : ""}
        
        {(newPasswordResetSuccess)?
            (<RegisterModalContent>
                <ButtonLink onClick={() => handleCloseModal()} type="button"><CloseBtn src={closeBtn} alt="closeBtn"></CloseBtn></ButtonLink>
                <EmailIcon src={checkIcon} />
                <MessageTitle>ПАРОЛЬ УСПІШНО ЗМІНЕНО</MessageTitle>
                <ButtonUserActive onClick={() => handleOnClick()} type="button">ПЕРЕЙТИ ДО МАГАЗИНУ</ButtonUserActive>

            </RegisterModalContent>):""
        }
        
    </RegisterModalWind>
}


RegisterModalWindComponent.propTypes = {
    onChange: PropTypes.func.isRequired,
    newUserMessage:PropTypes.bool.isRequired,
    isActive: PropTypes.bool.isRequired,
    forgotPassword: PropTypes.bool.isRequired,
    forgotPasswordSendEmail:PropTypes.bool.isRequired,
    newPassword: PropTypes.bool.isRequired,
    newPasswordResetSuccess: PropTypes.bool.isRequired
};

export default RegisterModalWindComponent;