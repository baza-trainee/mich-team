import React from 'react';
import closeIcon from '../../icons/close.svg'
import { CartContainer, Title, IconClose } from './Cart.styled';

const Cart = () => {
  return (
    <CartContainer>
      <IconClose src={closeIcon} alt='close'></IconClose>
      <Title>Кошик</Title>
    </CartContainer>
  );
};

export default Cart;
