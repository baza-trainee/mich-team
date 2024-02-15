import React from 'react';
import PropTypes from 'prop-types';
import { ProductButton } from './RedButton.styled';

const RedButton = ({ text, nav, tabwidth }) => {
  return (
    <ProductButton to={nav} type="button" tabwidth={tabwidth}>
      {text}
    </ProductButton>
  );
};

RedButton.propTypes = {
  text: PropTypes.string.isRequired,
  nav: PropTypes.string.isRequired,
  tabwidth: PropTypes.string,
};

export default RedButton;
