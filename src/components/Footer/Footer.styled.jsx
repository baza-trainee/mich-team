import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const StyledFooter = styled.footer`
  background-color: var(--Black, #110003);
  color: #fdfdfd;
  padding: 20px;
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
  margin-top: 25px;
  margin-bottom: 8px;
`;

export const StyledLink = styled(NavLink)`
  color: var(--Wtite, #fdfdfd);
  font-size: 16px;
  font-weight: 400;
  line-height: 110%; /* 17.6px */
  text-transform: uppercase;
  margin-bottom: 16px;
`;
export const FooterLink = styled.a`
  color: var(--Wtite, #fdfdfd);
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 16px;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FooterList = styled.ul`
  display: flex;
  justify-content: space-between;
`;
export const TextConfid = styled.p`
  color: var(--White, #fafafa);
  font-family: Play;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 14px */
  letter-spacing: 0.1px;
  opacity: 0.48;
  width: 328px;
`;
export const Link = styled.a`
  color: var(--White, #fafafa);
  font-family: Play;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 14px */
  letter-spacing: 0.1px;
  opacity: 0.48;
`;
