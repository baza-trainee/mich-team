import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ProductButton = styled(NavLink)`
  font-family: Play;
  position: relative;
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--Main-red, #d91f2d);
  color: var(--Wtite, #fdfdfd);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-transform: uppercase;
  width: 328px;
  height: 50px;
  padding: 12px 36px;
  border-color: #d91f2d;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 150ms ease-in-out;

  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 100%;
    background: #000;
    z-index: -1;
    transition: width 150ms ease-in-out;
  }

  &:hover {
    color: #fff;
    &:after {
      width: 110%;
    }
  }

  @media screen and (min-width: 768px) {
    width: ${props => props.tabWidth};
    height: 60px;
  }
  @media screen and (min-width: 1440px) {
    width: 520px;
    height: 60px;
    padding: 16px 36px;
    font-size: 22px;
    line-height: 140%;
  }
`;
