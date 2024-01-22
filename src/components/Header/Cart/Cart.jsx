import React, { useEffect } from 'react';
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

const StyledCartIcon = getStyledIcon(cartIcon);
const StyledModalCloseBtn = getStyledIcon(BurgerCloseIcon);

export const CartButton = ({ open, setOpen }) => {
  const itemsInCart = 0;
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
        <StyledCartIcon />({itemsInCart})
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
