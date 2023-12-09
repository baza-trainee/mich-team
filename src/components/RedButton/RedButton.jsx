import React from 'react';
import PropTypes from 'prop-types';
import { ProductButton } from './RedButton.styled';

const RedButton = ({ text, nav, tabWidth }) => {
  return (
    <ProductButton to={nav} type="button" tabWidth={tabWidth}>
      {text}
    </ProductButton>
  );
};

RedButton.propTypes = {
  text: PropTypes.string.isRequired,
  nav: PropTypes.string.isRequired,
  tabWidth: PropTypes.string,
};

export default RedButton;
