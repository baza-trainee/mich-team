
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { RegisterContainer, RegisterNav, RegisterTitle, StyledNavLink} from "./RegisterPage.styled"
import React from "react";



export const RegisterPage = () => {
    
    return (<RegisterContainer className="container">
        <RegisterNav>
            <StyledNavLink>Головна /</StyledNavLink>
            <StyledNavLink>Реєстрація</StyledNavLink>
        </RegisterNav>

        <RegisterTitle>РЕЄСТРАЦІЯ</RegisterTitle>
        <RegisterForm/>
    </RegisterContainer>
)}