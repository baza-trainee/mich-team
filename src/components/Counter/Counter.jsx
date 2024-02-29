import React from 'react'

const Counter = (count = 1) => {

  const toggleCount = (quantity) => {
    
  }

  return (
    <ProductCardCounterDiv>
      <ProductPlusMinus
        disabled={count <= 1}
        onClick={() => {
          count <= 1 ? 1 : setCount(prev => --prev);
        }}
      >
        -
      </ProductPlusMinus>
      <ProductCardCounterText>{count}</ProductCardCounterText>
      <ProductPlusMinus
        onClick={() => {
          setCount(prev => ++prev);
        }}
      >
        +
      </ProductPlusMinus>
    </ProductCardCounterDiv>
  );
}

export default Counter