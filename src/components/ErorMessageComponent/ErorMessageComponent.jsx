import React from "react";
import errorSvg from '../../icons/info-circle.svg';
import { ErorMessageDiv, ErrorIcon, ErrorMessage } from "./ErorMessageComponent.styled";

const ErorMessageComponent = () => {
    return <ErorMessageDiv>
        <ErrorIcon src={errorSvg} />
        <ErrorMessage>Вибачте, але ця електронна адреса вже зареєстрована в нашій системі. </ErrorMessage>
   </ErorMessageDiv>
}

export default ErorMessageComponent;