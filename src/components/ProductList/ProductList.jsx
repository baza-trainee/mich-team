import React, { useEffect, useState } from 'react';
import Error from '../Error/Error';
import { SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

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
import { getAllProducts } from '../../services/fetch';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {error ? (
        <Error />
      ) : (
        <ProductContainer>
          <ProductsList>
            {products.map(product => (
              <ProductItem key={product.id}>
                <CustomSwiper
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductImageDiv>
                      <ProductImg src={product.image} alt={product.name} />
                    </ProductImageDiv>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductImageDiv>
                      <ProductImg src={product.image} alt={product.name} />
                    </ProductImageDiv>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductImageDiv>
                      <ProductImg src={product.image} alt={product.name} />
                    </ProductImageDiv>
                  </SwiperSlide>
                </CustomSwiper>
                <ProductText>{product.name}</ProductText>
                <RedButton text={'обрати'} nav={'merch'} tabWidth={'344px'} />
              </ProductItem>
            ))}
          </ProductsList>
        </ProductContainer>
      )}
    </>
  );
};

export default ProductList;
