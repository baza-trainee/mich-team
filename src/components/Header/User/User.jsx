import React, { useState } from 'react';
import { ReactComponent as User } from '../../../icons/user.svg';
import {
  UserBtn,
  UserDropdown,
  UserLink,
  UserWrapper,
  getStyledIcon,
} from './User.styled';

const UserMenu = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const StyledUser = getStyledIcon(User);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <UserWrapper className="element">
      <UserBtn onClick={toggleDropdown}>
        <StyledUser />
      </UserBtn>
      {showDropdown && (
        <UserDropdown>
          <UserLink>Увійти</UserLink>
          <UserLink>Зареєструватися</UserLink>
        </UserDropdown>
      )}
    </UserWrapper>
  );
};

export default UserMenu;
