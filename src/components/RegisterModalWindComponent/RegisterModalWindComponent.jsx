import React from "react";
import { ButtonLink, CloseBtn, EmailIcon, MessageOfemail, MessageTitle, RegisterModalContent, RegisterModalWind } from "./RegisterModalWindComponent.style";
import smsTracking from '../../icons/sms-tracking.svg';
import closeBtn from '../../icons/close.svg';


const RegisterModalWindComponent = () => {
    return <RegisterModalWind>
        <RegisterModalContent>
            <ButtonLink to="/"><CloseBtn src={closeBtn} alt="closeBtn"></CloseBtn></ButtonLink>
            <EmailIcon src={smsTracking} />
            <MessageTitle>Електронний лист надіслано!</MessageTitle>
            <MessageOfemail>Для завершення реєстрації, будь ласка, перевірте свою електронну пошту та підтвердіть свою адресу, клікнувши на посилання у листі від нас</MessageOfemail>
        </RegisterModalContent>
        
    </RegisterModalWind>
}

export default RegisterModalWindComponent;