import React, { useState } from 'react';
import UserContext from './UserContext';
import PropTypes from 'prop-types';

const UserProvider = ({ children }) => {
    const [userAccessToken, setUserAccessToken] = useState(false);
    const [userRefreshToken, setUserRefreshToken] = useState(false);

    const UserData = {
      
      userAccessToken,
      setUserAccessToken,
      userRefreshToken,
      setUserRefreshToken
    }

  return (
    <UserContext.Provider value={{ UserData }}>
      {children}
    </UserContext.Provider>
  );
};


UserProvider.propTypes = {
    children: PropTypes.element.isRequired,
    
};

export default UserProvider;