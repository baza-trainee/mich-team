import React from "react";
import { CloseBtn, EmailIcon, MessageOfemail, MessageTitle, RegisterModalContent, RegisterModalWind } from "./RegisterModalWindComponent.style";
import errorSvg from '../../icons/info-circle.svg';
import closeBtn from '../../icons/close.svg';


const RegisterModalWindComponent = () => {
    return <RegisterModalWind>
        <RegisterModalContent>
            <CloseBtn src={closeBtn} alt="closeBtn"/>
            <EmailIcon src={errorSvg} />
            <MessageTitle>Електронний лист надіслано!</MessageTitle>
            <MessageOfemail>Для завершення реєстрації, будь ласка, перевірте свою електронну пошту та підтвердіть свою адресу, клікнувши на посилання у листі від нас</MessageOfemail>
        </RegisterModalContent>
        
    </RegisterModalWind>
}

export default RegisterModalWindComponent;