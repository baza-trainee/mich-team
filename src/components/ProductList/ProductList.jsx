import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import sticker from '../../images/sticker.jpg';
import shirt from '../../images/shirt.jpg';
import {
  ProductContainer,
  ProductsList,
  ProductItem,
  ProductImageDiv,
  ProductImg,
  ProductText,
  CustomSwiper,
} from './ProductList.styled';
import RedButton from '../RedButton/RedButton';

const data = [
  {
    id: 1,
    title: 'Стікерпак “Mich team”',
    image1: sticker,
    image2: sticker,
    image3: sticker,
  },
  {
    id: 2,
    title: 'Стікерпак “Mich team”',
    image1: shirt,
    image2: shirt,
    image3: shirt,
  },
];

const product = data.map(item => (
  <ProductItem key={item.id}>
    <CustomSwiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <ProductImageDiv>
          <ProductImg src={item.image1} alt={item.title} />
        </ProductImageDiv>
      </SwiperSlide>
      <SwiperSlide>
        <ProductImageDiv>
          <ProductImg src={item.image2} alt={item.title} />
        </ProductImageDiv>
      </SwiperSlide>
      <SwiperSlide>
        <ProductImageDiv>
          <ProductImg src={item.image3} alt={item.title} />
        </ProductImageDiv>
      </SwiperSlide>
    </CustomSwiper>
    <ProductText>{item.title}</ProductText>
    <RedButton text={'обрати'} nav={'merch'} />
  </ProductItem>
));

const ProductList = () => {
  return (
    <div style={{ backgroundColor: '#FAFAFA' }}>
      <ProductContainer className="container">
        <ProductsList>{product}</ProductsList>
      </ProductContainer>
    </div>
  );
};

export default ProductList;
