import React, { useEffect, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import sticker from '../../images/sticker.jpg';
// import shirt from '../../images/shirt.jpg';
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
import { getProductsList } from '../../services/products';

// const data = [
//   {
//     id: 1,
//     title: 'Стікерпак “Mich team”',
//     image1: sticker,
//     image2: sticker,
//     image3: sticker,
//   },
//   {
//     id: 2,
//     title: 'Стікерпак “Mich team”',
//     image1: shirt,
//     image2: shirt,
//     image3: shirt,
//   },
// ];

const product = (data) => data.map(item => (
 
  <ProductItem key={item.id}>
    
    <CustomSwiper navigation={true} modules={[Navigation]} className="mySwiper">
      {item.images.map(img => (
        <SwiperSlide key={img.id}>
        <ProductImageDiv>
          <ProductImg height={640} src={img.image && sticker} alt={item.name} />
        </ProductImageDiv>
      </SwiperSlide>
      ))}
    
      
        
    </CustomSwiper>
    <ProductText>{item.name}</ProductText>
    <RedButton text={'обрати'} nav={`/merch/${item.id}`} tabwidth={'344px'} />
  </ProductItem>
));

const ProductList = () => {
  
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getProductsList().then((res) => { console.log(res); setProductList(res)})
    
  },[])
  return (
    <div style={{ backgroundColor: '#FAFAFA' }}>
      <ProductContainer className="container">
        <ProductsList>{product(productList)}</ProductsList>
      </ProductContainer>
    </div>
  );
};

export default ProductList;
