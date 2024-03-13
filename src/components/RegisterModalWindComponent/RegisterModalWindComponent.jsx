import React, { useState } from "react";
import PropTypes from 'prop-types';
import { ButtonLink, ButtonUserActive, CloseBtn, EmailIcon, MessageOfemail, MessageTitle, RegisterModalContent, RegisterModalWind } from "./RegisterModalWindComponent.style";
import smsTracking from '../../icons/sms-tracking.svg';
import closeBtn from '../../icons/close.svg';
import checkIcon from '../../icons/checkIcon.svg'
import { useNavigate } from "react-router-dom";
import { requestLoginUser } from "../../services/user-autor-app";
import UserContext from '../../UserData/UserContext';
import { useContext } from "react";
import DivPasswordComponet from "../DivPasswordComponent/DivPasswordComponent";


const RegisterModalWindComponent = ({ onChange, isActive, forgotPassword  }) => {
    const userData = useContext(UserContext);
    const history = useNavigate();

    const [emailValue, setEmailValue] = useState('');

     const handleOnChangeEmail = (value) => {
        setEmailValue(value);

    }

    const handleOnClickSendEmail = () => {
        
    }
    
    const handleCloseModal = () => {
        const openWindow = false;
        onChange(openWindow);
        localStorage.removeItem('showModal');
        history('/?activate=true');
    }

    const handleCloseModalPasswordForgot = () => {
        const openWindow = false;
        onChange(openWindow);
        history('/');
    }

    const handleOnClick = () => {
        const openWindow = false;
        onChange(openWindow);
        const newUserData = {
            email: userData.UserData.userEmail,
            password: userData.UserData.userPassword
        }

        const responseData = requestLoginUser(newUserData);            
        responseData.then(result => {        
    
            history('/');
            console.log(result);
            return result;
        })
        .catch(error => {
            console.log(error)
            
           
            return;
        });

    }

    return <RegisterModalWind>
        {(!isActive) ?
        
        (<RegisterModalContent>
            <ButtonLink onClick={handleCloseModal} type="button"><CloseBtn src={closeBtn} alt="closeBtn"></CloseBtn></ButtonLink>
            <EmailIcon src={smsTracking} />
            <MessageTitle>ЕЛЕКТРОННИЙ ЛИСТ НАДІСЛАНО!</MessageTitle>
            <MessageOfemail>Для завершення реєстрації, будь ласка, перевірте свою електронну пошту та підтвердіть свою адресу, клікнувши на посилання у листі від нас</MessageOfemail>
        </RegisterModalContent>) :
            
        (<RegisterModalContent>
            <EmailIcon src={checkIcon} />
            <MessageTitle>РЕЄСТРАЦІЯ ЗАВЕРШЕНА УСПІШНО</MessageTitle>
            <MessageOfemail>Тепер ви можете користуватися всіма можливостями нашого сайту.</MessageOfemail>
            <ButtonUserActive onClick={handleOnClick} type="submit">ПЕРЕЙТИ ДО МАГАЗИНУ</ButtonUserActive>

        </RegisterModalContent>)}

        {(forgotPassword)?
            (<RegisterModalContent>
                <ButtonLink onClick={handleCloseModalPasswordForgot} type="button"><CloseBtn src={closeBtn} alt="closeBtn"></CloseBtn></ButtonLink>
                <MessageOfemail>Введіть свою електронну пошту, і ми надішлемо вам посилання для відновлення пароля</MessageOfemail>
                <DivPasswordComponet
                    className={''}
                    type="email"
                    titleInput="Введіть e-mail"
                    onChange={(e) => handleOnChangeEmail(e.target.value)}
                    value={emailValue}
                   
                />
                <ButtonUserActive onClick={handleOnClickSendEmail} type="submit">ОТРИМАТИ ПОСИЛАННЯ</ButtonUserActive>
            </RegisterModalContent>):''
        }
        
    </RegisterModalWind>
}


RegisterModalWindComponent.propTypes = {
    onChange: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
    forgotPassword: PropTypes.bool.isRequired
};

export default RegisterModalWindComponent;