import styled from "@emotion/styled";

export const PolycyContainer = styled.div`

  background-color: #FAFAFA;
  min-width: 360px;
  width:100%;
  max-width: 1440px;
  padding: 22px 16px 60px 16px;
  color: #110003;
  font-family: Play;
  
  @media screen and (min-width: 768px) {
    
    padding: 32px 32px 64px 32px;
  }

  @media screen and (min-width: 1440px) {

    padding: 32px 80px 86px 80px;
  }
`;

export const PolicyNav = styled.div`
        display:flex;
        gap: 8px;
        margin-bottom: 30px;
        
    

    @media screen and (min-width: 1440px) {
       margin-bottom: 24px; 
    }


`;

export const ContentOfPolicy = styled.p`
    color: #0F0000;
    margin-bottom: 24px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
`