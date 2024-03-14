import React from 'react';
import { ReactComponent as burgerIcon } from '../../../../icons/menu.svg';
import PropTypes from 'prop-types';
import {
  BurgerWrapper,
  BurgerButton,
  BurgerText,
  getStyledIcon,
} from './BurgerBtn.styled';

const StyledBurger = getStyledIcon(burgerIcon, '24px', '24px', '#FEFEFE');

export const BurgerBtn = ({ open, setOpen }) => {
  const openMenu = event => {
    event.preventDefault();
    setOpen(!open);
  };

  return (
    <BurgerWrapper className="element">
      <BurgerButton onClick={openMenu}>
        <StyledBurger />
        <BurgerText>меню</BurgerText>
      </BurgerButton>
    </BurgerWrapper>
  );
};

BurgerBtn.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};
