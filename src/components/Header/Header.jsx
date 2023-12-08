import React from 'react';
import { ReactComponent as LogoIcon } from '../../icons/logo-header.svg';

import { HeaderStyled, getStyledIcon, Logo } from './Header.styled';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import UserMenu from './User/User';
import Cart from './Cart/Cart';

const StyledLogo = getStyledIcon(LogoIcon);

const Header = () => {
  return (
    <HeaderStyled className="container">
      <BurgerMenu />
      <LanguageSwitcher />
      <Logo className="element">
        <StyledLogo />
      </Logo>
      <UserMenu />
      <Cart />
    </HeaderStyled>
  );
};

export default Header;
