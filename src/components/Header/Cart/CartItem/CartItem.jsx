import React from 'react';
import PropTypes from 'prop-types';
import {
  CartItemWrapper,
  CartItemImg,
  CartItemImgWrapper,
  CartItemInfoText,
  CartItemInfoWrapper,
  CartItemPrice,
  CartItemPriceWrapper,
  CartItemQuantity,
  CartItemQuantityBtn,
  CartItemQuantityWrapper,
  getStyledIcon,
} from './CartItem.styled';
import { ReactComponent as Trash } from '../../../../icons/trash.svg';
import image from '../../../../images/shirt.jpg';

const StyledTrash = getStyledIcon(Trash, '16px', '16px', '#A3A3A3');

export const CartItem = ({ item }) => {
  return (
    <CartItemWrapper>
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
            {`${(Number(item.product.price) * Number(item.quantity)).toFixed(
              2
            )}₴`}
          </CartItemPrice>
          <StyledTrash />
        </CartItemPriceWrapper>
      </CartItemInfoWrapper>
    </CartItemWrapper>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
};
