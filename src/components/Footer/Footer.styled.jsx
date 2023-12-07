import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const StyledFooter = styled.footer`
  background-color: var(--Black, #110003);
  color: #fdfdfd;
  padding: 20px;
  @media screen and (min-width: 768px) {
    padding: 40px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 40px 80px;
  }
`;

export const FooterContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const FooterCover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
  }
`;

export const FooterNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    margin: 0 24px;
    display: flex;
    align-items: flex-start;
  }
  @media screen and (min-width: 1440px) {
    margin: 0;
  }
`;

export const StyledLink = styled(NavLink)`
  color: var(--Wtite, #fdfdfd);
  font-size: 16px;
  font-weight: 400;
  line-height: 110%; /* 17.6px */
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const LinkWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-start;
  }
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
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    margin-top: 0;
  }
`;
export const FooterList = styled.ul`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const FooterItem = styled.li`
  @media screen and (min-width: 768px) {
    margin-right: 30px;
  }
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
  @media screen and (min-width: 768px) {
    margin-right: 32px;
  }
`;
