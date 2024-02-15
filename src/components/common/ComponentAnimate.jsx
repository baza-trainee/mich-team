import React from 'react';
import PropTypes from 'prop-types';

const ComponentAnimate = ({
  tag: Tag,
  status,
  variants,
  style,
  children,
  transition,
}) => {
  return (
    <Tag
      animate={status ? 'open' : 'closed'}
      variants={variants}
      style={style}
      transition={transition}
    >
      {children}
    </Tag>
  );
};

ComponentAnimate.propTypes = {
  tag: PropTypes.elementType,
  style: PropTypes.object,
  transition: PropTypes.object,
  status: PropTypes.bool,
  variants: PropTypes.shape({
    open: PropTypes.object.isRequired,
    closed: PropTypes.object.isRequired,
  }).isRequired,
  children: PropTypes.node,
};

export default ComponentAnimate;
