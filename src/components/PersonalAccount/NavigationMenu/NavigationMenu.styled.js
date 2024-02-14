import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  padding-top: 32px;
  padding-bottom: 40px;
  display: none;

  span {
    margin-right: 8px;
    margin-left: 8px;
  }

  p {
    font-size: 14px;
    font-weight: 700;
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const LinkStyle = styled(NavLink)`
  font-size: 14px;
  color: #0f0000;
`;
