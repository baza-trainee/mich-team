import { Nav, StyledLink } from './Navigation.styled';
import React from 'react';

export const Navigation = () => {
  return (
    <Nav>
      {true && <StyledLink to="#">Мерч</StyledLink>}
      {true && <StyledLink to="#">Доставка і оплата</StyledLink>}
      {true && <StyledLink to="#">Умови повернення</StyledLink>}
    </Nav>
  );
};
