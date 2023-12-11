import React from 'react';
import { ReactComponent as LogoIcon } from '../../icons/logo-header.svg';
import PropTypes from 'prop-types';
import {
  HeaderStyled,
  getStyledIcon,
  Logo,
  HeaderWrapper,
} from './Header.styled';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import UserMenu from './User/User';
import Cart from './Cart/Cart';

const StyledLogo = getStyledIcon(LogoIcon);

const Header = ({ currentPage }) => {
  const headerClass =
    currentPage === '/'
      ? 'main-header'
      : currentPage === '/merch'
        ? 'product-header'
        : '';
  return (
    <HeaderStyled className={`${headerClass}`}>
      <HeaderWrapper className={`container`}>
        <BurgerMenu />
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
