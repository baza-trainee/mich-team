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
    &.red{
        color: #d91f2d;
    }

    
`

export const RegistInput = styled.input`
    background-color: #FAFAFA;
    min-width: 327px;
    width:100%;
    padding: 12px 8px;
    margin-bottom: 24px;
    
    border-block-end: 1px solid #565656; 
    outline:none;

    &.red{
      color:var(--Main-red, #d91f2d);
      border-block-end: 1px solid  var(--Main-red, #d91f2d);
    }

    @media screen and (min-width: 768px) {
        
        max-width: 553px;
       
    }

    &:hover,
    &:focus,
    &:active{
        
        border-block-end: 1px solid #0B0000; 
        color: #0B0000;
        &.red{
                color:var(--Main-red, #d91f2d);
                border-block-end: 1px solid  var(--Main-red, #d91f2d);
            }

    }

    &:hover+label,
    &:not(:placeholder-shown) + label,
    &:focus+label,
    &:active+label{
        
            
            top:-8px;
            
            color: #0B0000;
            font-size: 12px;
            font-weight: 400;
            letter-spacing: 0.5px;
            &.red{
                color:var(--Main-red, #d91f2d);
            }

    }
    

`

export const ShowIcon = styled(ReactSVG)`
  position: absolute;
  top: 16px;
  right: 8px;
  width: 1.4rem;
  
  

  &.red{
      path:nth-of-type(1),
      path:nth-of-type(2),
      path:nth-of-type(3),
      path:nth-of-type(4),
      path:nth-of-type(5),
      path:nth-of-type(6) {
        stroke: var(--Main-red, #d91f2d);
      }  
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

export const BtnSignIn = styled.button`

  position: relative;
  display: flex;
  

  text-transform: uppercase;
    background: #0B0000;
  z-index: 1;
  transition: color 150ms ease-in-out;


    width:100%;
    padding: 12px 36px;
    margin-bottom:24px;
    justify-content: center;
    align-items: center;
    
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

    &:after {
        content: '';
        position: absolute;
        display: block;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 100%;
        background-color:  #D9D9D9;
        border-radius: 4px;
        z-index: -1;
        transition: width 150ms ease-in-out;
    }
    &:hover {
     color:  #0B0000;
    &:after {
      
      width: 100%;
    }

    
    }

    &.active{
        color:  #0B0000;
        background:#FDFDFD;
      
    &:after {
      
      width: 0;
    }
    } 

    &:active {
     color:  #0B0000;
      
    &:after {
      background:#FDFDFD;
      width: 100%;
    }


  }
    
`

