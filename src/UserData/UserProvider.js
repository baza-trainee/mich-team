import React, { useState } from 'react';
import UserContext from './UserContext';
import PropTypes from 'prop-types';

const UserProvider = ({ children }) => {
    const [userEmail, setUserEmail] = useState(null);
    const [userPassword, setUserPassword] = useState(null);
    const [userToken, setUserToken] = useState(false);

    const UserData = {
        userEmail,
        setUserEmail,
        userToken,
      setUserToken,
      userPassword,
      setUserPassword
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