import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import {
  ProductCardDiv,
  ProductNavDiv,
  ProductNavLink,
  ProductCardTitle,
  ProductCardName,
  ProductCardPrice,
  ProductCardSizeTitle,
  ProductCardSizeDiv,
  ProductCardSizeButton,
  ProductCardCounterDiv,
  ProductCardCartButtonDiv,
  ProductCardInfoDiv,
  ProductDiv,
  ProductPlusMinus,
  ProductCardCounterText,
} from './ProductCard.styled';
import {
  CustomSwiper,
  ProductImageDiv,
  ProductImg,
} from '../ProductList/ProductList.styled';

import RedButton from '../RedButton/RedButton';

import shirt from '../../images/shirt.jpg';

const ProductCard = () => {
  return (
    <ProductCardDiv className="container">
      <ProductNavDiv>
        <ProductNavLink to="/">Головна /</ProductNavLink>
        <ProductCardTitle style={{ marginLeft: '10px' }}>
          Футболка Mich team
        </ProductCardTitle>
      </ProductNavDiv>
      <ProductDiv>
        <CustomSwiper
          style={{ marginLeft: '0px', marginRight: '0px' }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ProductImageDiv>
              <ProductImg src={shirt} alt="shirt" />
            </ProductImageDiv>
          </SwiperSlide>
          <SwiperSlide>
            <ProductImageDiv>
              <ProductImg src={shirt} alt="shirt" />
            </ProductImageDiv>
          </SwiperSlide>
          <SwiperSlide>
            <ProductImageDiv>
              <ProductImg src={shirt} alt="shirt" />
            </ProductImageDiv>
          </SwiperSlide>
        </CustomSwiper>
        <ProductCardInfoDiv>
          <ProductCardName>футболка “Mich team”</ProductCardName>
          <ProductCardPrice>1050 грн</ProductCardPrice>
          <ProductCardSizeTitle>Оберіть розмір</ProductCardSizeTitle>
          <ProductCardSizeDiv>
            <ProductCardSizeButton>XS</ProductCardSizeButton>
            <ProductCardSizeButton>S</ProductCardSizeButton>
            <ProductCardSizeButton>M</ProductCardSizeButton>
            <ProductCardSizeButton>L</ProductCardSizeButton>
            <ProductCardSizeButton>XL</ProductCardSizeButton>
          </ProductCardSizeDiv>
          <ProductCardSizeTitle>Оберіть кількість</ProductCardSizeTitle>
          <ProductCardCounterDiv>
            <ProductPlusMinus>-</ProductPlusMinus>
            <ProductCardCounterText>1</ProductCardCounterText>
            <ProductPlusMinus>+</ProductPlusMinus>
          </ProductCardCounterDiv>
          <ProductCardCartButtonDiv>
            <RedButton text={'додати до кошику'} nav={'/cart'} />
          </ProductCardCartButtonDiv>
        </ProductCardInfoDiv>
      </ProductDiv>
    </ProductCardDiv>
  );
};

export default ProductCard;
