import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as BurgerIcon } from '../../../icons/menu.svg';
import { ReactComponent as BurgerCloseIcon } from '../../../icons/burger-close.svg';
import {
  BurgerBtn,
  BurgerWrapper,
  BurgerText,
  getStyledIconOpen,
  getStyledIcon,
  StyledMenu,
  MenuButtonsWrapper,
  BurgerCloseBtn,
  Instagram,
  NavWrapper,
  AuthorizationWrapper,
  AuthorizationLink,
  SubscribeWrapper,
} from './BurgerMenu.styled';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { Navigation } from '../Navigation/Navigatiom';
import { ReactComponent as InstIcon } from '../../../icons/inst.svg';
import SubscribeForm from '../../SubscribeForm/SubscribeForm';
const StyledBurger = getStyledIconOpen(BurgerIcon);
const StyledBurgerClose = getStyledIcon(BurgerCloseIcon);
const InstagramIcon = getStyledIcon(InstIcon);

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
  const openMenu = () => {
    setOpen(!open);
  };
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else if (!open) {
      document.body.style.overflow = '';
    }
  });
  useEffect(() => {
    setOpen(false);
  }, [currentPage]);
  return (
    <StyledMenu open={!open}>
      <MenuButtonsWrapper>
        <BurgerCloseBtn onClick={openMenu}>
          <StyledBurgerClose />
        </BurgerCloseBtn>
        <LanguageSwitcher
          arrowcolor={'#0F0000'}
          backgroundcolorlanghover={'rgba(0, 0, 0, 0.60)'}
          textcolorlanghover={'#FEFEFE'}
        />
      </MenuButtonsWrapper>
      <NavWrapper>
        <Navigation />
        <AuthorizationWrapper>
          <AuthorizationLink>Реєстрація</AuthorizationLink>
          <AuthorizationLink>Увійти</AuthorizationLink>
        </AuthorizationWrapper>
        <Instagram
          href="https://instagram.com/mich_team?igshid=MzMyNGUyNmU2YQ=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
          mich_team
        </Instagram>
      </NavWrapper>
      <SubscribeWrapper>
        <SubscribeForm stroke={'#0F0000'} />
      </SubscribeWrapper>
    </StyledMenu>
  );
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
