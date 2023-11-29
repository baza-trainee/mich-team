import React from 'react';
import PropTypes from 'prop-types';
import { ProductButton } from './RedButton.styled';

const RedButton = ({ text, nav }) => {
  return (
    <ProductButton to={nav} type="button">
      {text}
    </ProductButton>
  );
};

RedButton.propTypes = {
  text: PropTypes.string.isRequired,
  nav: PropTypes.string.isRequired,
};

export default RedButton;
