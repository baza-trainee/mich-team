import React, { useEffect } from 'react';
import { ReactComponent as cartIcon } from '../../../../icons/cart.svg';
import { CartBtn, CartBtnWrapper, getStyledIcon } from './CartBtn.styled';
import PropTypes from 'prop-types';

const StyledCartIcon = getStyledIcon(cartIcon, '24px', '24px', '#FEFEFE');

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

CartButton.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  cartItems: PropTypes.object.isRequired,
};
