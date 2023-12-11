import React, { useState } from 'react';
import { ReactComponent as LogoIcon } from '../../icons/logo-header.svg';
import PropTypes from 'prop-types';
import {
  HeaderStyled,
  getStyledIcon,
  Logo,
  HeaderWrapper,
} from './Header.styled';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';
import { Burger, Menu } from './BurgerMenu/BurgerMenu';
import UserMenu from './User/User';
import Cart from './Cart/Cart';

const StyledLogo = getStyledIcon(LogoIcon);

const Header = ({ currentPage }) => {
  const [open, setOpen] = useState(false);
  const headerClass =
    currentPage === '/'
      ? 'main-header'
      : currentPage === '/merch'
        ? 'product-header'
        : '';
  return (
    <HeaderStyled className={`${headerClass}`}>
      <Menu open={open} setOpen={setOpen} currentPage={currentPage} />
      <HeaderWrapper className={`container ${headerClass}`}>
        <Burger open={open} setOpen={setOpen} />
        <LanguageSwitcher />
        <Logo className="element">
          <StyledLogo />
        </Logo>
        <UserMenu />
        <Cart />
      </HeaderWrapper>
    </HeaderStyled>
  );
};

Header.propTypes = {
  currentPage: PropTypes.string,
};

export default Header;
