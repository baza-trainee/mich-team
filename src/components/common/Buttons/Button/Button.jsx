import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

const Button = ({ disabled, onClick, type, children }) => {
  return (
    <ButtonStyled type={type} disabled={disabled} onClick={onClick}>
      <span>{children}</span>
    </ButtonStyled>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
