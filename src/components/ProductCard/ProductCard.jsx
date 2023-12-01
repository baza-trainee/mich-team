import React, { useState } from 'react';
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
  ProductInfoDiv,
  ProductInfoListTitle,
  ProductInfoItem,
  ProductInfoArrow,
  ProductInfoTextDiv,
  ProductInfoText,
  CustomSwiper,
  ProductImageDiv,
  ProductInfoImg,
  ProductWalletItem,
  ProductWalletList,
} from './ProductCard.styled';
import { ProductImg } from '../ProductList/ProductList.styled';

import RedButton from '../RedButton/RedButton';

import shirt from '../../images/shirt.jpg';
import arrow from '../../icons/arrow-down.svg';
import arrowUp from '../../icons/arrowUp.svg';
import wallet from '../../icons/wallet.svg';
import delivery from '../../icons/delivery.svg';

const ProductCard = () => {
  const [detailsVisible, setDetailsVisible] = useState({});

  const toggleDetails = itemId => {
    setDetailsVisible(prevDetailsVisible => ({
      ...prevDetailsVisible,
      [itemId]: !prevDetailsVisible[itemId],
    }));
  };

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
            <ProductCardSizeButton disabled>XS</ProductCardSizeButton>
            <ProductCardSizeButton>S</ProductCardSizeButton>
            <ProductCardSizeButton>M</ProductCardSizeButton>
            <ProductCardSizeButton disabled>L</ProductCardSizeButton>
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
          <ul>
            <ProductInfoItem>
              <ProductInfoDiv>
                <ProductInfoListTitle>опис</ProductInfoListTitle>
                <ProductInfoArrow onClick={() => toggleDetails('item1')}>
                  <img
                    src={detailsVisible['item1'] ? arrowUp : arrow}
                    alt="arrow"
                  />
                </ProductInfoArrow>
              </ProductInfoDiv>
              {detailsVisible['item1'] && (
                <ProductInfoTextDiv>
                  <ProductInfoText>
                    Яскрава футболка припаде до смаку відважним чоловікам, які
                    не бояться виражати свою стильність та показувати м`язисту
                    фігуру. Ця модель ідеально підходить для урочистих подій,
                    вечірок та корпоративів.
                  </ProductInfoText>
                </ProductInfoTextDiv>
              )}
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoDiv>
                <ProductInfoListTitle>Склад тканини</ProductInfoListTitle>
                <ProductInfoArrow onClick={() => toggleDetails('item2')}>
                  <img
                    src={detailsVisible['item2'] ? arrowUp : arrow}
                    alt="arrow"
                  />
                </ProductInfoArrow>
              </ProductInfoDiv>
              {detailsVisible['item2'] && (
                <ProductInfoTextDiv>
                  <ProductInfoText>100% бавовна</ProductInfoText>
                </ProductInfoTextDiv>
              )}
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoDiv>
                <ProductInfoImg src={delivery} alt="delivery" />
                <ProductInfoListTitle>Доставка</ProductInfoListTitle>
                <ProductInfoArrow onClick={() => toggleDetails('item3')}>
                  <img
                    src={detailsVisible['item3'] ? arrowUp : arrow}
                    alt="arrow"
                  />
                </ProductInfoArrow>
              </ProductInfoDiv>
              {detailsVisible['item3'] && (
                <ProductInfoTextDiv>
                  <ProductInfoText>
                    Яскрава футболка припаде до смаку відважним чоловікам, які
                    не бояться виражати свою стильність та показувати м`язисту
                    фігуру. Ця модель ідеально підходить для урочистих подій,
                    вечірок та корпоративів.
                  </ProductInfoText>
                </ProductInfoTextDiv>
              )}
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoDiv>
                <ProductInfoImg src={wallet} alt="wallet" />
                <ProductInfoListTitle>ОПЛАТА</ProductInfoListTitle>
                <ProductInfoArrow onClick={() => toggleDetails('item4')}>
                  <img
                    src={detailsVisible['item4'] ? arrowUp : arrow}
                    alt="arrow"
                  />
                </ProductInfoArrow>
              </ProductInfoDiv>
              {detailsVisible['item4'] && (
                <ProductInfoTextDiv>
                  <ProductInfoText>
                    На нашому сайті ви можете здійснити оплату наступними
                    способами:
                  </ProductInfoText>
                  <ProductWalletList>
                    <ProductWalletItem>
                      карткою Visa і MasterCard;
                    </ProductWalletItem>
                    <ProductWalletItem>GooglePay;</ProductWalletItem>
                    <ProductWalletItem>Monobank;</ProductWalletItem>
                    <ProductWalletItem>WayforPay.</ProductWalletItem>
                  </ProductWalletList>
                </ProductInfoTextDiv>
              )}
            </ProductInfoItem>
          </ul>
        </ProductCardInfoDiv>
      </ProductDiv>
    </ProductCardDiv>
  );
};

export default ProductCard;
