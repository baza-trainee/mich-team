import React from 'react';
import Cart from '../../components/Cart/Cart';
import Hero from '../../components/Hero/Hero';
import { CartPageContainer } from './CartPage.styled';


const CartPage = () => {
  return (
    <CartPageContainer>
      <Hero />
      <Cart />
    </CartPageContainer>
  );
};
export default CartPage;
