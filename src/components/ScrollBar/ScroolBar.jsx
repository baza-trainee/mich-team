import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Scrollbars } from 'react-custom-scrollbars';

const CustomScrollbar = ({ children }) => {
  const scrollbarsRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [children]);

  const scrollToBottom = () => {
    if (scrollbarsRef.current) {
      scrollbarsRef.current.scrollToBottom();
    }
  };

  return (
    <Scrollbars style={{ width: '100%', height: '100vh' }} ref={scrollbarsRef}>
      {children}
    </Scrollbars>
  );
};

CustomScrollbar.propTypes = { children: PropTypes.node.isRequired };

export default CustomScrollbar;
