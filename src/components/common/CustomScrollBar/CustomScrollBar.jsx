import React from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'rc-scrollbars';

const computeColor = color => (color ? { backgroundColor: color } : {});

const CustomScrollBar = ({ children, trackColor = '', thumbColor = '' }) => {
  return (
    <Scrollbars
      style={{ flexGrow: '1' }}
      renderTrackVertical={({ style, ...props }) => (
        <div {...props} style={{ ...style, ...computeColor(trackColor) }} />
      )}
      renderThumbVertical={({ style, ...props }) => (
        <div {...props} style={{ ...style, ...computeColor(thumbColor) }} />
      )}
      renderView={({ style, ...props }) => (
        <div
          {...props}
          style={{ ...style, display: 'flex', flexDirection: 'column' }}
        />
      )}
      autoHide
      autoHideTimeout={2000}
      autoHideDuration={500}
    >
      {children}
    </Scrollbars>
  );
};

CustomScrollBar.propTypes = {
  children: PropTypes.node.isRequired,
  trackColor: PropTypes.string,
  thumbColor: PropTypes.string,
};

export default CustomScrollBar;
