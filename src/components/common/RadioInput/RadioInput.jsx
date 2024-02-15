import React from 'react';
import PropTypes from 'prop-types';
import {
  Icon,
  IconArrow,
  LabelStyled,
  RadioInputStyled,
} from './RadioInput.styled';

const RadioInput = ({ checked, onChange, value, name, label }) => {
  return (
    <LabelStyled checked={checked}>
      <RadioInputStyled
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
      />
      <Icon checked={checked} />
      <IconArrow checked={checked} />
      {label}
    </LabelStyled>
  );
};

RadioInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
};

export default RadioInput;
