import React, { useEffect } from 'react';
import { ReactComponent as cartIcon } from '../../../icons/cart.svg';
import { ReactComponent as BurgerCloseIcon } from '../../../icons/burger-close.svg';
import {
  CartBtn,
  CartBtnWrapper,
  CartModalBtnWrapper,
  CartOrderCount,
  CartOrderCountWrapper,
  CartOrderTitle,
  CartTitle,
  StyledCart,
  getStyledIcon,
} from './Cart.styled';
import PropTypes from 'prop-types';
import { ModalCloseBtn } from '../BurgerMenu/BurgerMenu.styled';
//import { getCartItems } from '../../../services/cart';

const StyledCartIcon = getStyledIcon(cartIcon);
const StyledModalCloseBtn = getStyledIcon(BurgerCloseIcon);

export const CartButton = ({ open, setOpen, cartItems }) => {
  const openCart = event => {
    event.preventDefault();
    setOpen(!open);
  };
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

export const CartModal = ({ open, setOpen, cartItems }) => {
  const closeCart = event => {
    event.preventDefault();
    setOpen(!open);
  };

  return (
    <StyledCart open={!open}>
      <CartModalBtnWrapper>
        <ModalCloseBtn onClick={closeCart}>
          <StyledModalCloseBtn />
        </ModalCloseBtn>
      </CartModalBtnWrapper>
      <CartTitle>кошик</CartTitle>
      <CartOrderCountWrapper>
        <CartOrderTitle>Ваше замовлення</CartOrderTitle>
        <CartOrderCount>{cartItems.total_items}</CartOrderCount>
      </CartOrderCountWrapper>
    </StyledCart>
  );
};

CartButton.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  cartItems: PropTypes.object,
};

CartModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  cartItems: PropTypes.object,
};
