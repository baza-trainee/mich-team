import React from 'react';
import PropTypes from 'prop-types';
import { OrderPriceSum, OrderPriceTitle } from './OrderPrice.styled';

export const OrderPrice = ({ title, cartItems }) => {
  return (
    <>
      <OrderPriceTitle>{title}</OrderPriceTitle>
      <OrderPriceSum>
        {cartItems
          .reduce((totalSum, product) => {
            return (totalSum =
              totalSum +
              Number(product.quantity) * Number(product.product.price));
          }, 0)
          .toFixed(2)}
        ₴
      </OrderPriceSum>
    </>
  );
};

OrderPrice.propTypes = {
  title: PropTypes.string.isRequired,
  cartItems: PropTypes.array.isRequired,
};
