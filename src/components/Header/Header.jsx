import React, { useEffect, useState } from 'react';
import { ReactComponent as LogoIcon } from '../../icons/logo-header.svg';
import PropTypes from 'prop-types';
import {
  HeaderStyled,
  getStyledIcon,
  Logo,
  HeaderWrapper,
  LogoWrapper,
} from './Header.styled';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';
import { Burger, Menu } from './BurgerMenu/BurgerMenu';
import UserMenu from './User/User';
import { CartButton, CartModal } from './Cart/Cart';

const StyledLogo = getStyledIcon(LogoIcon);

const Header = ({ currentPage }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  useEffect(() => {
    if (openMenu || openCart) {
      document.body.style.overflow = 'hidden';
    } else if (!openMenu || !openCart) {
      document.body.style.overflow = '';
    }
  }, [openMenu, openCart]);
  const headerClass =
    currentPage === '/'
      ? 'main-header'
      : currentPage === '/merch'
        ? 'product-header'
        : '';
  return (
    <HeaderStyled className={`${headerClass}`}>
      <Menu open={openMenu} setOpen={setOpenMenu} currentPage={currentPage} />
      <CartModal
        open={openCart}
        setOpen={setOpenCart}
        currentPage={currentPage}
      />
      <HeaderWrapper className={`${headerClass}`}>
        <Burger open={openMenu} setOpen={setOpenMenu} />
        <LanguageSwitcher
          arrowcolor={'#fefefe'}
          backgroundcolorlanghover={'rgba(255, 255, 255, 0.5)'}
        />
        <Logo className="element">
          <LogoWrapper href="/">
            <StyledLogo />
          </LogoWrapper>
        </Logo>
        <UserMenu loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <CartButton open={openCart} setOpen={setOpenCart} />
      </HeaderWrapper>
    </HeaderStyled>
  );
};

Header.propTypes = {
  currentPage: PropTypes.string,
};

export default Header;
