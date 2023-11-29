import React from "react"
import { RegistForm, RegistInput } from "./RegisterForm.styled";

export const RegisterForm = () => {
    return (
        <RegistForm action="">
            <RegistInput type="email" placeholder="E-mail"/>
            <RegistInput type="password" placeholder="Пароль"/>
            <RegistInput type="password" placeholder="Повторіть пароль" />
        </RegistForm>
        
    )
};