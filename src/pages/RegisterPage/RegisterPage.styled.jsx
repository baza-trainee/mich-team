import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";


export const RegisterContainer = styled.div`

  background-color: #FAFAFA;
  min-width: 360px;
  width:100%;
  max-width: 1440px;
  padding: 16px 16px 60px 16px;
  color: #110003;
  font-family: Play;
  
  @media screen and (min-width: 768px) {
    
    padding: 32px 32px 148px 32px;
  }

  @media screen and (min-width: 1440px) {

    padding: 32px 80px 104px 80px;
  }
`;

export const ButtonNavLink = styled(NavLink)`
  display: block;
  padding: 16px;
  margin-bottom: 6px;
  background-color: #FAFAFA;
  width: fit-content;
  margin-left: auto;
  
`

export const CloseBtn = styled(ReactSVG)`
  width:24px;
  height: 24px;

  path:nth-of-type(1),
  path:nth-of-type(2),
  path:nth-of-type(3){
        stroke: black;
      } 
  
`

export const RegisterNav = styled.div`
    display: none;
    
   
    @media screen and (min-width: 768px) {
        display:flex;
        gap: 8px;
        margin-bottom: 30px;
        
    }

    @media screen and (min-width: 1440px) {
       margin-bottom: 24px; 
    }


`;

export const StyledNavLink = styled(NavLink)`

font-size: 14px;

font-weight: 400;
line-height: 1.4;
color: #110003;
&.active{
  font-weight: 700;
}
`;

export const OrElem = styled.p`
  color: #B3B3B3;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 auto;
  margin-bottom: 24px;

  text-align: center;
   &:before,
   &:after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    box-sizing: border-box;
    width: 156px;
    height: 1px;
    background: #B3B3B3;
    border: solid #FAFAFA;
    border-width: 0 6px;
    
  }
  &:before{
    margin-left: -100%;
  }
  &:after{
    margin-right: -100%;
  }

  @media screen and (min-width: 768px) {
        &:before,
        &:after{
            width: 251px;
        }

`

export const BtnNetwork = styled(NavLink)`
    display:flex;
    margin:0 auto;
    width:100%;
    
    padding: 12px 36px;
    margin-bottom:24px;
    justify-content: center;
    align-items: center;
    background:  #FFF;
    color:  #110003;
    
    
    font-size: 18px;
    
    font-weight: 700;
    line-height: 1.2;
    border-radius: 4px;

    border:  1px solid #B3B3B3;

    @media screen and (min-width: 768px) {
    max-width:523px;
    padding: 16px 36px;
    font-size: 22px;
    line-height: 1.4;
    }
`

export const DivSignIn = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 18px;
    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
`

export const RegistQuestion = styled.h2`
  
  font-size: 16px;

  font-weight: 400;
  line-height: 1.2;
`

export const LinkSignIn = styled(NavLink)`
  
    font-size: 16px;
    color: #110003;
  
    font-weight: 700;
    line-height: 1.2%;
    text-decoration-line: underline;
`