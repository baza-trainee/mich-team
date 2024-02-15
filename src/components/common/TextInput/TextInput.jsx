import React from 'react';
import PropTypes from 'prop-types';
import { DivStyle, InputStyled, LabelStyle } from './TextInput.styled';

const TextInput = ({
  id,
  type,
  name,
  value,
  onChange,
  label,
  style,
  children,
}) => {
  return (
    <DivStyle style={style}>
      <InputStyled
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      <LabelStyle htmlFor={id} lengthValue={value.length > 0}>
        {label}
      </LabelStyle>
      {children}
    </DivStyle>
  );
};

TextInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  children: PropTypes.node,
};

export default TextInput;
