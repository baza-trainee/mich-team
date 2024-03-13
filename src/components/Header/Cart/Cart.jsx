import React from 'react';
import {
  BtnToOrder,
  CartItemsWrapper,
  CartModalBtnWrapper,
  CartOrderCountWrapper,
  CartSumWrapper,
  CartTitle,
  StyledCart,
} from './Cart.styled';
import PropTypes from 'prop-types';
import { CartItem } from './CartItem/CartItem';
import { ModalCloseBtn } from '../ModalCloseBtn/ModalCloseBtn';
import { OrderPrice } from './OrderPrice/OrderPrice';
import { OrderCount } from './OrderCount/OrderCount';
//import { getCartItems } from '../../../services/cart';

export const CartModal = ({ open, setOpen, cartItems }) => {
  const closeCart = event => {
    event.preventDefault();
    setOpen(!open);
  };

  return (
    <StyledCart open={!open}>
      <CartModalBtnWrapper>
        <ModalCloseBtn close={closeCart} />
      </CartModalBtnWrapper>
      <CartTitle>кошик</CartTitle>
      <CartOrderCountWrapper>
        <OrderCount
          title={
            cartItems.total_items > 0 ? 'Ваше замовлення' : 'Ваш кошик порожній'
          }
          totalItems={cartItems.total_items}
        />
      </CartOrderCountWrapper>
      <CartItemsWrapper>
        {cartItems.total_items > 0 &&
          cartItems.cart_items.map(item => (
            <CartItem item={item} key={item.id} />
          ))}
      </CartItemsWrapper>
      {cartItems.total_items > 0 && (
        <CartSumWrapper>
          <OrderPrice title="Сума до оплати" cartItems={cartItems.cart_items} />
        </CartSumWrapper>
      )}
      <BtnToOrder>оформити замовлення</BtnToOrder>
    </StyledCart>
  );
};

CartModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  cartItems: PropTypes.object.isRequired,
};
