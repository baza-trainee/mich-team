import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from './ButtonExit.styled';

const ButtonExit = ({ onClick, children }) => {
  return (
    <ButtonStyled onClick={onClick}>
      <span>{children}</span>
    </ButtonStyled>
  );
};

ButtonExit.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default ButtonExit;
