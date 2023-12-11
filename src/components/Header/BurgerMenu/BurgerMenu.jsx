import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as BurgerIcon } from '../../../icons/menu.svg';
import {
  BurgerBtn,
  BurgerWrapper,
  BurgerText,
  getStyledIcon,
  StyledMenu,
} from './BurgerMenu.styled';
const StyledBurger = getStyledIcon(BurgerIcon);

export const Burger = ({ open, setOpen }) => {
  const openMenu = () => {
    setOpen(!open);
  };

  return (
    <BurgerWrapper className="element">
      <BurgerBtn onClick={openMenu}>
        <StyledBurger />
        <BurgerText>меню</BurgerText>
      </BurgerBtn>
    </BurgerWrapper>
  );
};

export const Menu = ({ open, setOpen, currentPage }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
  useEffect(() => {
    setOpen(false);
  }, [currentPage]);
  return <StyledMenu open={open}></StyledMenu>;
};

Burger.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

Menu.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  currentPage: PropTypes.string,
};
