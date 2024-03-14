import React from 'react';
import PropTypes from 'prop-types';
import { OrderTitle, OrderQuantity } from './OrderCount.styled';

export const OrderCount = ({ title, totalItems }) => {
  return (
    <>
      <OrderTitle>{title}</OrderTitle>
      <OrderQuantity>{totalItems}</OrderQuantity>
    </>
  );
};

OrderCount.propTypes = {
  title: PropTypes.string.isRequired,
  totalItems: PropTypes.number.isRequired,
};
