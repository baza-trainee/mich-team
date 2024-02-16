import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";

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

export const LabelInput = styled.label`
    position: absolute;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #878787  ;
    left: 8px;
    top:12px;
    

    
`

export const RegistInput = styled.input`
    background-color: #FAFAFA;
    min-width: 327px;
    width:100%;
    padding: 12px 8px;
    margin-bottom: 24px;
    
    border-block-end: 1px solid #565656; 
    outline:none;

    

    @media screen and (min-width: 768px) {
        
        max-width: 553px;
       
    }

    &:hover,
    &:focus,
    &:active{
        
        border-block-end: 1px solid #0B0000; 
        color: #0B0000;
        

    }

    &:hover+label,
    &:not(:placeholder-shown) + label,
    &:focus+label,
    &:active+label{
        
            
            top:-8px;
            z-index:-10;
            color: #0B0000;
            font-size: 12px;
            font-weight: 400;
            letter-spacing: 0.5px;
           
    }
    

`

export const ShowIcon = styled(ReactSVG)`
  position: absolute;
  top: 16px;
  right: 8px;
  width: 1.4rem;
  
  

   
    }

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

export const LinkRememb = styled(NavLink)`
    padding: 0 34px;
    font-size: 16px;
    color: #110003;
  
    font-weight: 700;
    line-height: 1.2%;
`

