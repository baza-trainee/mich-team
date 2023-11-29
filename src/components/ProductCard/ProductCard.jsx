import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import {
  ProductCardDiv,
  ProductNavDiv,
  ProductNavLink,
} from './ProductCard.styled';
import {
  CustomSwiper,
  ProductImageDiv,
  ProductImg,
} from '../ProductList/ProductList.styled';

import shirt from '../../images/shirt.jpg';

const ProductCard = () => {
  return (
    <ProductCardDiv className="container">
      <h1>Product Card</h1>
      <ProductNavDiv>
        <ProductNavLink to="/">Головна /</ProductNavLink>
        <p style={{ marginLeft: '10px' }}> Футболка Mich team</p>
      </ProductNavDiv>
      <CustomSwiper
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
    </ProductCardDiv>
  );
};

export default ProductCard;
