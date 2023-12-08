import React, { useState } from 'react';
import { ReactComponent as ArrowIcon } from '../../../icons/arrow-language.svg';
import {
  LanguageWrapper,
  LanguageList,
  LanguageItem,
  LanguageSwitcherBtn,
  getStyledIcon,
} from './LanguageSwitcher.styled';

const ArrowDown = getStyledIcon(ArrowIcon);

const LanguageSwitcher = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const selectLanguage = language => {
    setSelectedLanguage(language);
    setShowDropdown(false);
  };

  const alternateLanguage = selectedLanguage === 'EN' ? 'UA' : 'EN';

  return (
    <LanguageWrapper className="element">
      <LanguageSwitcherBtn onClick={toggleDropdown}>
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
