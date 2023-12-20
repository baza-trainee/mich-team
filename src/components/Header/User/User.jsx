import React, { useState } from 'react';
import { ReactComponent as User } from '../../../icons/user.svg';
import { ReactComponent as LogOut } from '../../../icons/logout.svg';
import PropTypes from 'prop-types';
import {
  UserBtn,
  UserDropdown,
  UserLink,
  UserWrapper,
  getStyledIcon,
} from './User.styled';

const UserMenu = ({ loggedIn, setLoggedIn }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const StyledUser = getStyledIcon(User, '24px', '24px', '#FEFEFE');
  const StyledUserProfile = getStyledIcon(User, '16px', '16px', '#0F0000');
  const StyledLogOut = getStyledIcon(LogOut, '16px', '16px', '#0F0000');

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const logOut = () => {
    setLoggedIn(false);
  };

  return (
    <UserWrapper className="element">
      <UserBtn onClick={toggleDropdown}>
        <StyledUser />
      </UserBtn>
      {showDropdown && (
        <UserDropdown>
          {!loggedIn && <UserLink>Увійти</UserLink>}
          {!loggedIn && <UserLink>Зареєструватися</UserLink>}
          {loggedIn && (
            <UserLink>
              <StyledUserProfile />
              Особистий кабінет
            </UserLink>
          )}
          {loggedIn && (
            <UserLink onClick={logOut}>
              <StyledLogOut />
              Вийти
            </UserLink>
          )}
        </UserDropdown>
      )}
    </UserWrapper>
  );
};

UserMenu.propTypes = {
  loggedIn: PropTypes.bool,
  setLoggedIn: PropTypes.func,
};

export default UserMenu;
