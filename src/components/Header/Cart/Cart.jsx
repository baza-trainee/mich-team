import React, { useState } from 'react';
import { ReactComponent as cartIcon } from '../../../icons/cart.svg';
import { CartBtn, CartWrapper, getStyledIcon } from './Cart.styled';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const StyledCart = getStyledIcon(cartIcon);
  const itemsInCart = 0;
  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CartWrapper className="element">
      <CartBtn onClick={openMenu}>
        <StyledCart />({itemsInCart})
      </CartBtn>
    </CartWrapper>
  );
};

export default Cart;
