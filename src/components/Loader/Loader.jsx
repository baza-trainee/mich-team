import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeDots
      wrapperStyle={{ justifyContent: 'center' }}
      height="100"
      width="100"
      color="#D91F2D"
    />
  );
};

export default Loader;
