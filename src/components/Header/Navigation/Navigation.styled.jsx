import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  position: relative;
  overflow: hidden;
  text-decoration: none;
  color: #0f0000;
  font-family: Play;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  text-transform: uppercase;
  text-align: start;
  transition: background-color 0.4s ease;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: #0f0000;
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }
  &.active {
    background-color: transparent;
    color: #0f0000;
    &:hover {
      color: #0f0000;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content:;
  gap: 16px;
  width: 100%;
`;
