import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const FooterLogo = styled.img`
  display: block;
  margin-bottom: 20px;
`;
export const StyledFooter = styled.footer`
  background-color: #110003;
  color: #fdfdfd;
  padding: 15px;
`;

export const FooterContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FooterNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fdfdfd;
  margin-bottom: 20px;
`;

export const StyledLink = styled(NavLink)`
  color: #fdfdfd;
  margin-bottom: 20px;

  /* &.active {
    color: orange;
  } */
`;
export const FooterLink = styled.a`
  color: #fdfdfd;
  margin-bottom: 20px;
`;
