import React, { useState } from 'react';
import { ReactComponent as ArrowIcon } from '../../../icons/arrow-language.svg';
import {
  LanguageWrapper,
  LanguageList,
  LanguageItem,
  LanguageSwitcherBtn,
  getStyledIcon,
} from './LanguageSwitcher.styled';
import PropTypes from 'prop-types';

const LanguageSwitcher = ({ arrowcolor }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const ArrowDown = getStyledIcon(ArrowIcon);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const selectLanguage = language => {
    setSelectedLanguage(language);
    setShowDropdown(false);
  };

  const alternateLanguage = selectedLanguage === 'EN' ? 'UA' : 'EN';

  return (
    <LanguageWrapper
      className="element"
      style={{
        backgroundColor: showDropdown ? 'transparent' : '',
      }}
    >
      <LanguageSwitcherBtn onClick={toggleDropdown} arrowcolor={arrowcolor}>
        {selectedLanguage}
        <ArrowDown
          style={{
            transform: showDropdown ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </LanguageSwitcherBtn>
      {showDropdown && (
        <LanguageList>
          <LanguageItem onClick={() => selectLanguage(alternateLanguage)}>
            {alternateLanguage}
          </LanguageItem>
        </LanguageList>
      )}
    </LanguageWrapper>
  );
};

export default LanguageSwitcher;

LanguageSwitcher.propTypes = {
  arrowcolor: PropTypes.string,
};
