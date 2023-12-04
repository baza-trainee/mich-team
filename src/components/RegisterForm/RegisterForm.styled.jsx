import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const RegistForm = styled.form`
    margin:0 auto;
    max-width: 328px;
    text-align: center;

    @media screen and (min-width: 768px) {
        padding: 0 54px;
        max-width: 628px;
    }

    
`

export const RegisterTitle = styled.h1`
text-align: center;
font-size: 28px;
margin-bottom: 24px;
font-weight: 700;
line-height: 1.2;

@media screen and (min-width: 768px) {
   font-size: 32px; 
        
    }

`;

export const DivPasword = styled.div`
    position: relative;
`

export const RegistInput = styled.input`
    
    background-color: #FAFAFA;
    min-width: 327px;
    width:100%;
    padding: 12px 8px;
    margin-bottom: 24px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #878787;
    border-block-end: 1px solid #565656; 
    outline:none;

    @media screen and (min-width: 768px) {
        
        max-width: 553px;
       
    }

    &:hover,
    &:focus,
    &:active{
        position:relative;
        ::placeholder{
            position: absolute;
            top:0;
            visible: true;
            color: #0B0000;
            font-size: 12px;
            font-weight: 400;
        
            
            letter-spacing: 0.5px;
        }
        border-block-end: 1px solid #0B0000; 
        color: #0B0000;

    }

    

`

export const ShowIcon = styled.img`
  position: absolute;
  top: 16px;
  right: 8px;
  width: 1.4rem;
  opacity: 0.7;
  @media screen and (max-width: 768px) {
    left: 18.5rem;
  }
`

export const CheckbBoxDiv = styled.div`
    margin-bottom: 44px;
    &:last-child{
       margin-bottom: 0px; 
    }
    @media screen and (min-width: 768px) {
        
       margin-bottom: 24px; 
       
    }
    
`

export const RegisterDivInput = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
    align-items: center;

`

export const RegistInputCheck = styled.input`

width: 16px;
height: 16px;
flex-direction: column;
align-items: flex-start;

@media screen and (min-width: 768px) {
        
    width: 20px;
    height:  20px; 
}

`

export const LabelInput = styled.label`
    text-align: left;
    font-size: 14px;
    line-height: 1.2;
    width:100%;
    @media screen and (min-width: 768px) {
    font-size: 16px;
    
}

`
export const LinkDocument = styled(NavLink)`
    font-weight: 700;
    color: #110003;
    text-decoration-line: underline;
`

export const SpanElem = styled.span`
    color:#CA040F;
`

export const BtnSignIn = styled.button`
    width:100%;
    padding: 12px 36px;
    margin-bottom:24px;
    justify-content: center;
    align-items: center;
    background:  #110003;
    color:  #FDFDFD;
    
    font-size: 18px;
    
    font-weight: 700;
    line-height: 1.2;
    border-radius: 4px;

    border: 1px solid  #110003;

    @media screen and (min-width: 768px) {
        
    padding: 16px 36px;
    font-size: 22px;
    line-height: 1.4;
    }
    &:hover {
    background-color: #fdfdfd;
    color: #110003;
  }
    
`

