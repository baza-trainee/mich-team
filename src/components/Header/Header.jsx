import React from 'react';
import { ReactComponent as MenuIcon } from '../../icons/menu.svg';

import { getStyledIcon, HeaderStyled, Menu } from './Header.styled';

const StyledMenuIcon = getStyledIcon(MenuIcon);
const Header = () => {
  //const [open, setOpen] = useState(false);
  return (
    <HeaderStyled>
      <Menu>
        <StyledMenuIcon />
      </Menu>
    </HeaderStyled>
  );
};

export default Header;
