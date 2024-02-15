import React from 'react';
import { LinkStyle, Nav } from './NavigationMenu.styled';
import PropTypes from 'prop-types';

const NavigationMenu = ({ text }) => {
  return (
    <Nav>
      <LinkStyle to={'/'}>Головна</LinkStyle>
      <LinkStyle to={'/personal-account'}>
        <span>/</span> Особистий кабінет
      </LinkStyle>
      <p>
        <span>/</span> {text}
      </p>
    </Nav>
  );
};

NavigationMenu.propTypes = {
  text: PropTypes.string,
};

export default NavigationMenu;
