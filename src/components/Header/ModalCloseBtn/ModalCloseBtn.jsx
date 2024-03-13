import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as BurgerCloseIcon } from '../../../icons/burger-close.svg';
import { ModalCloseButton, getStyledIcon } from './ModalCloseBtn.styled';

const StyledModalCloseBtn = getStyledIcon(
  BurgerCloseIcon,
  '24px',
  '24px',
  '#0f0000'
);

export const ModalCloseBtn = ({ close }) => {
  return (
    <ModalCloseButton onClick={close}>
      <StyledModalCloseBtn />
    </ModalCloseButton>
  );
};

ModalCloseBtn.propTypes = {
  close: PropTypes.func.isRequired,
};
