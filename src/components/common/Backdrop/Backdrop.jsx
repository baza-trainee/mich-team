import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 0, 0, 0.7);
  z-index: 1000;
  transition: all 300ms linear;
  visibility: ${p => (p.isopen ? 'visible' : 'hidden')};
  opacity: ${p => (p.isopen ? '1' : '0')};
`;

const Backdrop = ({ children, isopen, close, onClick }) => {
  useEffect(() => {
    const handleKeyPress = event => {
      if (event.key === 'Escape') {
        if (close) close();
      }
    };

    if (isopen) {
      document.addEventListener('keydown', handleKeyPress);
    } else {
      document.removeEventListener('keydown', handleKeyPress);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isopen, close]);

  return (
    <Wrapper isopen={isopen} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

Backdrop.propTypes = {
  children: PropTypes.node,
  isopen: PropTypes.bool,
  close: PropTypes.func,
  onClick: PropTypes.func,
};

export default Backdrop;
