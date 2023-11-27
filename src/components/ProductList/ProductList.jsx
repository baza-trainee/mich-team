import React from 'react';
import sticker from '../../images/sticker.jpg';
import shirt from '../../images/shirt.jpg';
import {
  ProductContainer,
  ProductsList,
  ProductItem,
  ProductImg,
  ProductText,
  ProductButton,
} from './ProductList.styled';

const ProductList = () => {
  return (
    <ProductContainer>
      <ProductsList>
        <ProductItem>
          <ProductImg src={sticker} alt="sticker" />
          <ProductText>Стікерпак “Mich team”</ProductText>
          <ProductButton type="button">обрати</ProductButton>
        </ProductItem>
        <ProductItem>
          <ProductImg src={shirt} alt="shirt" />
          <ProductText>Футболка “Mich team” </ProductText>
          <ProductButton type="button">обрати</ProductButton>
        </ProductItem>
      </ProductsList>
    </ProductContainer>
  );
};

export default ProductList;
