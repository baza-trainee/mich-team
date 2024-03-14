import React from 'react'
import PropTypes from 'prop-types';
import {ProductCardCounterDiv, ProductPlusMinus, ProductCardCounterText } from './Counter.styled'

export const Counter = ({ count, changeCount }) => {

  

  return (
    <ProductCardCounterDiv>
      <ProductPlusMinus
        disabled={count <= 1}
        onClick={()=>changeCount("minus")}
      >
        -
      </ProductPlusMinus>
      <ProductCardCounterText>{count}</ProductCardCounterText>
      <ProductPlusMinus
        onClick={()=>changeCount('plus')}
      >
        +
      </ProductPlusMinus>
    </ProductCardCounterDiv>
  );
}

Counter.propTypes = {
  count: PropTypes.number,
  changeCount:PropTypes.func
}

export default Counter