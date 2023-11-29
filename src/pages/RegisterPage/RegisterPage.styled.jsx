import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";


export const RegisterContainer = styled.div`
  background-color: #FAFAFA;
  min-width: 360px;
  heigth: 100%;

  padding: 16px 16px 40px 16px;
  color: #110003;
  font-family: Play;
  
  @media screen and (min-width: 768px) {
    
    padding: 32px 32px 148px 32px;
  }

  @media screen and (min-width: 1440px) {

    padding: 32px 80px 104px 80px;
  }
`;

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