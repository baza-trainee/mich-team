import styled from "@emotion/styled"
import { ReactSVG } from "react-svg"

export const DivPasword = styled.div`
    position: relative;
     &:hover label,
  
    &:focus label,
    &:active label{
        
            
            top:-8px;
            color: #0B0000;
            font-size: 12px;
            font-weight: 400;
            letter-spacing: 0.5px;
           
    }
    
    
`

export const LabelInput = styled.label`
    position: absolute;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #878787  ;
    left: 8px;
    top:12px;
    transition: top 70ms linear, font-size 50ms linear, font-weight 50ms linear, letter-spacing 50ms linear, color 50ms linear; 
    
    

    
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

    
    &:not(:placeholder-shown) + label
    {
        
            
            top:-8px;
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
  width: 22.4px;
    
    }

  @media screen and (max-width: 768px) {
    left: 296px;
  }
`