import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ArrowDownIcon } from '../../../icons/arrow-down.svg';
import {
  Option,
  OptionsList,
  SelectContainer,
  SelectedOption,
} from './PhoneInput.styled';

const CustomSelect = ({ updateCountry, checkNewCountry, countries }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('UA +380');

  const handleSelect = option => {
    setSelectedCountry(option);
    updateCountry(option);
    setIsOpen(false);
    checkNewCountry();
  };

  const handleBlur = () => {
    setIsOpen(false);
  };

  const handleKeyDown = (value, code) => {
    if (code === 'Enter') {
      setIsOpen(false);
      handleSelect(value);
    }
  };

  return (
    <SelectContainer onBlur={handleBlur}>
      <SelectedOption
        tabIndex="0"
        isopen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        onFocus={() => isOpen && setIsOpen(!isOpen)}
      >
        {selectedCountry} <ArrowDownIcon />
      </SelectedOption>
      <OptionsList isopen={isOpen}>
        {countries.map(option => (
          <Option
            tabIndex="0"
            key={option}
            onClick={() => handleSelect(option)}
            onFocus={() => setIsOpen(true)}
            onKeyDown={e => handleKeyDown(option, e.code)}
          >
            {option}
          </Option>
        ))}
      </OptionsList>
    </SelectContainer>
  );
};

CustomSelect.propTypes = {
  updateCountry: PropTypes.func.isRequired,
  checkNewCountry: PropTypes.func.isRequired,
  countries: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CustomSelect;
