import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './ButtonNoExit.styled';

const ButtonNoExit = ({ children, onClick }) => {
  return (
    <Button onClick={onClick}>
      <span>{children}</span>
    </Button>
  );
};

ButtonNoExit.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default ButtonNoExit;
