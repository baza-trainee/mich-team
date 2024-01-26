import React, { useState } from 'react';
import UserContext from './UserContext';
import PropTypes from 'prop-types';

const UserProvider = ({ children }) => {
    const [userEmail, setUserEmail] = useState(null);
    const [userPassword, setUserPassword] = useState(null);
    const [userIsActive, setUserIsActive] = useState(false);

    const UserData = {
        userEmail,
        setUserEmail,
        userPassword,
        setUserPassword,
        userIsActive,
        setUserIsActive
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