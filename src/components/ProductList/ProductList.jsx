import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import sticker from '../../images/sticker.jpg';
import shirt from '../../images/shirt.jpg';
import {
  ProductContainer,
  ProductsList,
  ProductItem,
  ProductImg,
  ProductText,
  ProductButton,
  CustomSwiper,
} from './ProductList.styled';

const ProductList = () => {
  return (
    <ProductContainer className="container">
      <ProductsList>
        <ProductItem>
          <CustomSwiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <ProductImg src={sticker} alt="sticker" />
            </SwiperSlide>
            <SwiperSlide>
              <ProductImg src={sticker} alt="sticker" />
            </SwiperSlide>
            <SwiperSlide>
              <ProductImg src={sticker} alt="sticker" />
            </SwiperSlide>
          </CustomSwiper>
          <ProductText>Стікерпак “Mich team”</ProductText>
          <ProductButton type="button">обрати</ProductButton>
        </ProductItem>
        <ProductItem>
          <CustomSwiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <ProductImg src={shirt} alt="shirt" />
            </SwiperSlide>
            <SwiperSlide>
              <ProductImg src={shirt} alt="shirt" />
            </SwiperSlide>
            <SwiperSlide>
              <ProductImg src={shirt} alt="shirt" />
            </SwiperSlide>
          </CustomSwiper>
          <ProductText>Футболка “Mich team” </ProductText>
          <ProductButton type="button">обрати</ProductButton>
        </ProductItem>
      </ProductsList>
    </ProductContainer>
  );
};

export default ProductList;
