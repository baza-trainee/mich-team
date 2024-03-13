import React from 'react';
import PropTypes from 'prop-types';
import { ProductButton } from './RedButton.styled';
import { useNavigate } from 'react-router-dom';

const RedButton = ({ text, nav, tabwidth, func }) => {
  const navigate= useNavigate()
  return (
    <ProductButton onClick={(e) => {
      e.preventDefault();
      console.log(nav)
      func();
      navigate(nav)
    }} /* to={nav} */ type="button" tabwidth={tabwidth}>
      {text}
    </ProductButton>
  );
};

RedButton.propTypes = {
  text: PropTypes.string.isRequired,
  nav: PropTypes.string.isRequired,
  tabwidth: PropTypes.string,
  func:PropTypes.func
};

export default RedButton;
