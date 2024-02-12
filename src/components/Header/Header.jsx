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
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    if (openMenu || openCart) {
      document.body.style.overflow = 'hidden';
    } else if (!openMenu || !openCart) {
      document.body.style.overflow = '';
    }
  }, [openMenu, openCart]);

  useEffect(() => {
    /* getCartItems()
      .then(res => {
        console.log(res);
        setCartItems(res);
      })
      .catch(err => console.error(err)); */
    setCartItems({
      cart_items: [
        {
          id: 18,
          product: {
            id: 1,
            name: 'fdsa',
            name_en: 'fdsaf',
            price: '12.00',
            price_en: '231.00',
            images: [
              {
                image:
                  '/product_photos/product_photos/photo_2022-09-09_11-01-08.jpg',
              },
            ],
          },
          session_id: 'ry8hrz36e64601refh5c4dkkrnz9g9b8',
          size: 'NS',
          quantity: 3,
          is_active: true,
          user: null,
          order: null,
        },
        {
          id: 19,
          product: {
            id: 2,
            name: 'sfdfsd',
            name_en: 'vsa',
            price: '2.00',
            price_en: '2424.00',
            images: [
              {
                image:
                  '/product_photos/product_photos/photo_2023-07-07_21-28-59.jpg',
              },
            ],
          },
          session_id: 'ry8hrz36e64601refh5c4dkkrnz9g9b8',
          size: 'NS',
          quantity: 3,
          is_active: true,
          user: null,
          order: null,
        },
      ],
      total_items: 6,
    });
  }, []);

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
        cartItems={cartItems}
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
        <CartButton
          open={openCart}
          setOpen={setOpenCart}
          cartItems={cartItems}
        />
      </HeaderWrapper>
    </HeaderStyled>
  );
};

Header.propTypes = {
  currentPage: PropTypes.string,
};

export default Header;
