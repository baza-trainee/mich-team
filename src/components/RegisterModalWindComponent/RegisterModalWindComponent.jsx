import React from "react";
import PropTypes from 'prop-types';
import { ButtonLink, ButtonUserActive, CloseBtn, EmailIcon, MessageOfemail, MessageTitle, RegisterModalContent, RegisterModalWind } from "./RegisterModalWindComponent.style";
import smsTracking from '../../icons/sms-tracking.svg';
import closeBtn from '../../icons/close.svg';
import checkIcon from '../../icons/checkIcon.svg'
import { useNavigate } from "react-router-dom";


const RegisterModalWindComponent = ({ onChange, isActive }) => {
    
    const history = useNavigate();
    
    const handleCloseModal = () => {
        const openWindow = false;
        onChange(openWindow);
        localStorage.removeItem('showModal');
        history('/?activate=true');
    }

    const handleOnClick = () => {
        const openWindow = false;
        onChange(openWindow);
        history('/');
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
        
    </RegisterModalWind>
}


RegisterModalWindComponent.propTypes = {
    onChange: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired
};

export default RegisterModalWindComponent;