import styled from "@emotion/styled";

export const RegisterModalWind = styled.div`
    position: fixed;
    z-index:100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(15, 0, 0, 0.7);
`

export const RegisterModalContent = styled.div`
    background-color: #fff;
    margin: 178px auto;
    padding: 32px 24px;
    border-radius: 4px;
    z-index: 1001; 
    width: 396px;

`

export const CloseBtn = styled.button`

`

export const EmailIcon = styled.img`
    width:24px;
    heigth: 24px;
    margin-bottom: 16px;
`

export const MessageTitle = styled.h2`
    color:  #000;
    text-align: center;
    margin-bottom: 8px;
    font-size: 18px;

    font-weight: 700;
    line-height: 1.2;
    text-transform: uppercase;
`


export const MessageOfemail = styled.p`
    color: #0F0000;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;

`