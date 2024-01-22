import React, { useEffect, useState } from 'react';
import { ReactComponent as cartIcon } from '../../../icons/cart.svg';
import { ReactComponent as BurgerCloseIcon } from '../../../icons/burger-close.svg';
import {
  CartBtn,
  CartBtnWrapper,
  StyledCart,
  getStyledIcon,
} from './Cart.styled';
import PropTypes from 'prop-types';
import { ModalCloseBtn } from '../BurgerMenu/BurgerMenu.styled';
import { getCartItems } from '../../../services/cart';

const StyledCartIcon = getStyledIcon(cartIcon);
const StyledModalCloseBtn = getStyledIcon(BurgerCloseIcon);

export const CartButton = ({ open, setOpen }) => {
  const [cartItems, setCartItems] = useState({});
  const openCart = event => {
    event.preventDefault();
    setOpen(!open);
  };
  useEffect(() => {
    getCartItems()
      .then(res => {
        console.log(res);
        setCartItems(res);
      })
      .catch(err => console.error(err));
  }, []);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else if (!open) {
      document.body.style.overflow = '';
    }
  }, [open]);

  return (
    <CartBtnWrapper className="element">
      <CartBtn onClick={openCart}>
        <StyledCartIcon />({cartItems.total_items})
      </CartBtn>
    </CartBtnWrapper>
  );
};

export const CartModal = ({ open, setOpen }) => {
  const closeCart = event => {
    event.preventDefault();
    setOpen(!open);
  };

  return (
    <StyledCart open={!open}>
      <ModalCloseBtn onClick={closeCart}>
        <StyledModalCloseBtn />
      </ModalCloseBtn>
    </StyledCart>
  );
};

CartButton.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

CartModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};
