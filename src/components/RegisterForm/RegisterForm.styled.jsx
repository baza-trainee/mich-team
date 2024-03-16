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

export const CheckbBoxDivRememb = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: baseline;
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

export const LabelCheck = styled.label`
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

export const LinkRememb = styled.button`
    padding: 0 34px;
    font-size: 16px;
    color: #110003;
  
    font-weight: 700;
    line-height: 1.2%;
    text-decoration-line: underline;
`

