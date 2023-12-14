import React from 'react';
import { ErrorContainer, Errortext } from './Error.styled';
import { ReactComponent as MySVG } from '../../icons/error.svg';
import RedButton from '../RedButton/RedButton';

const Error = () => {
  const getTabWidth = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      return '321px';
    } else {
      return '376px';
    }
  };
  const tabWidth = getTabWidth();

  return (
    <ErrorContainer>
      <MySVG></MySVG>
      <Errortext>Вибачте, сторінку не знайдено</Errortext>
      <RedButton
        text="повернутися На головну"
        nav="/"
        tabWidth={tabWidth}
      ></RedButton>
    </ErrorContainer>
  );
};

export default Error;
