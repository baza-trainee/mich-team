import React, { useState } from 'react';
import { ReactComponent as User } from '../../../icons/user.svg';
import { UserBtn, UserWrapper, getStyledIcon } from './User.styled';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const StyledUser = getStyledIcon(User);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <UserWrapper className="element">
      <UserBtn onClick={openMenu}>
        <StyledUser />
      </UserBtn>
    </UserWrapper>
  );
};

export default UserMenu;
