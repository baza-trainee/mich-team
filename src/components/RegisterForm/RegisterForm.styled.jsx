import styled from "@emotion/styled";

export const RegistForm = styled.form`
    margin:0 auto;
    max-width: 328px;
    text-align: center;

    @media screen and (min-width: 768px) {
        padding: 0 54px;
        max-width: 704px;
    }

    @media screen and (min-width: 1440px) {
       max-width: 628px; 
       padding: 0 54px;
    }

    
`

export const RegistInput = styled.input`
    background-color: #FAFAFA;
    min-width: 327px;
    padding: 12px 8px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #878787;
    border-block-end: 1px solid #565656; 

    @media screen and (min-width: 768px) {
        margin-bottom: 24px;
        width: 553px;
       
    }

    @media screen and (min-width: 1440px) {
       width: 537px; 

    }

`