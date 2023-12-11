import React, { useState } from 'react';
import { ReactComponent as Menu } from '../../../icons/menu.svg';
import {
  MenuBtn,
  MenuWrapper,
  MenuText,
  getStyledIcon,
} from './BurgerMenu.styled';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const StyledMenu = getStyledIcon(Menu);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuWrapper className="element">
      <MenuBtn onClick={openMenu}>
        <StyledMenu />
        <MenuText>меню</MenuText>
      </MenuBtn>
    </MenuWrapper>
  );
};

export default BurgerMenu;
