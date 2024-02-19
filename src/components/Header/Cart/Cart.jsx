import React, { useEffect } from 'react';
import { ReactComponent as cartIcon } from '../../../icons/cart.svg';
import { ReactComponent as BurgerCloseIcon } from '../../../icons/burger-close.svg';
import { ReactComponent as Trash } from '../../../icons/trash.svg';
import {
  BtnToOrder,
  CartBtn,
  CartBtnWrapper,
  CartItem,
  CartItemImg,
  CartItemImgWrapper,
  CartItemInfoText,
  CartItemInfoWrapper,
  CartItemPrice,
  CartItemPriceWrapper,
  CartItemQuantity,
  CartItemQuantityBtn,
  CartItemQuantityWrapper,
  CartItemsWrapper,
  CartModalBtnWrapper,
  CartOrderCount,
  CartOrderCountWrapper,
  CartOrderTitle,
  CartSum,
  CartSumTitle,
  CartSumWrapper,
  CartTitle,
  StyledCart,
  getStyledIcon,
} from './Cart.styled';
import PropTypes from 'prop-types';
import { ModalCloseBtn } from '../BurgerMenu/BurgerMenu.styled';
//import { getCartItems } from '../../../services/cart';
import image from '../../../images/shirt.jpg';

const StyledCartIcon = getStyledIcon(cartIcon, '24px', '24px', '#FEFEFE');
const StyledModalCloseBtn = getStyledIcon(
  BurgerCloseIcon,
  '24px',
  '24px',
  '#0f0000'
);
const StyledTrash = getStyledIcon(Trash, '16px', '16px', '#A3A3A3');

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
        <CartOrderTitle>
          {cartItems.total_items > 0 ? 'Ваше замовлення' : 'Ваш кошик порожній'}
        </CartOrderTitle>
        <CartOrderCount>{cartItems.total_items}</CartOrderCount>
      </CartOrderCountWrapper>
      <CartItemsWrapper>
        {cartItems.total_items > 0 &&
          cartItems.cart_items.map(item => (
            <CartItem key={item.id}>
              <CartItemImgWrapper>
                <CartItemImg src={image} alt="image" />
              </CartItemImgWrapper>
              <CartItemInfoWrapper>
                <CartItemInfoText>{item.product.name}</CartItemInfoText>
                {item.size !== 'NS' && (
                  <CartItemInfoText>Розмір {item.size}</CartItemInfoText>
                )}
                <CartItemQuantityWrapper>
                  <CartItemQuantityBtn>-</CartItemQuantityBtn>
                  <CartItemQuantity>{item.quantity}</CartItemQuantity>
                  <CartItemQuantityBtn>+</CartItemQuantityBtn>
                </CartItemQuantityWrapper>
                <CartItemPriceWrapper>
                  <CartItemPrice>
                    {`${(
                      Number(item.product.price) * Number(item.quantity)
                    ).toFixed(2)}₴`}
                  </CartItemPrice>
                  <StyledTrash />
                </CartItemPriceWrapper>
              </CartItemInfoWrapper>
            </CartItem>
          ))}
      </CartItemsWrapper>
      {cartItems.total_items > 0 && (
        <CartSumWrapper>
          <CartSumTitle>Сума до оплати</CartSumTitle>
          <CartSum>
            {cartItems.cart_items
              .reduce((totalSum, product) => {
                return (totalSum =
                  totalSum +
                  Number(product.quantity) * Number(product.product.price));
              }, 0)
              .toFixed(2)}
            ₴
          </CartSum>
        </CartSumWrapper>
      )}
      <BtnToOrder>оформити замовлення</BtnToOrder>
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
