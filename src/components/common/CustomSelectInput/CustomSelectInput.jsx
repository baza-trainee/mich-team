import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ArrowDownIcon } from '../../../icons/arrow-down.svg';
import {
  DivStyle,
  Option,
  OptionsList,
  SelectContainer,
  SelectedOption,
} from './CustomSelectInput.styled';

const CustomSelectInput = ({ label, list, updateCountry, value }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = option => {
    updateCountry(option);
    setIsOpen(false);
  };

  const handleBlur = () => {
    setIsOpen(false);
  };

  const handleKeyDown = (value, code) => {
    if (code === 'Enter') {
      setIsOpen(false);
      handleSelect(value);
      updateCountry(value);
    }
  };

  return (
    <DivStyle lengthValue={value.length > 0}>
      <SelectContainer onBlur={handleBlur}>
        <SelectedOption
          tabIndex="0"
          isopen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          onFocus={() => isOpen && setIsOpen(!isOpen)}
        >
          <div>{value}</div> <ArrowDownIcon />
        </SelectedOption>
        <OptionsList isopen={isOpen}>
          {list.map(option => (
            <Option
              tabIndex="0"
              key={option.name}
              onClick={() => handleSelect(option.name)}
              onFocus={() => setIsOpen(true)}
              onKeyDown={e => handleKeyDown(option.name, e.code)}
            >
              {option.name}
            </Option>
          ))}
        </OptionsList>
      </SelectContainer>
      {label && <label onClick={() => setIsOpen(true)}> {label}</label>}
    </DivStyle>
  );
};

CustomSelectInput.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  updateCountry: PropTypes.func.isRequired,
  list: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.array,
  ]),
};

export default CustomSelectInput;
