import React, { useEffect, useState } from 'react';
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
  // ProductCardCounterDiv,
  ProductCardCartButtonDiv,
  ProductCardInfoDiv,
  ProductDiv,
  // ProductPlusMinus,
  // ProductCardCounterText,
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
  ValidSize,
  // ProductCardSizeRadio,
} from './ProductCard.styled';
import { ProductImg } from '../ProductList/ProductList.styled';

import RedButton from '../RedButton/RedButton';

// import shirt from '../../images/shirt.jpg';
import arrow from '../../icons/arrow-down.svg';
import arrowUp from '../../icons/arrowUp.svg';
import wallet from '../../icons/wallet.svg';
import delivery from '../../icons/delivery.svg';
import { getProductById } from '../../services/products';
import { useParams } from 'react-router-dom';
import Counter from '../Counter/Counter';
import { addCartItems } from '../../services/cart';

const ProductCard = () => {
  const [product, setProduct] = useState({});
  const {productId} = useParams();
  const size = ['XS', 'S', 'M', 'L', 'XL'];
  const [detailsVisible, setDetailsVisible] = useState({});
  const [count, setCount] = useState(1);
  const [activeSize, setActiveSize] = useState('');
  const [isVisibleSizeList, setIsVisibleSizeList] = useState(true);
  const addCart = async () => {
    const product = {
      product: productId,
      size: activeSize,
      quantity:count
    }
    // console.log(product)
    if (product?.size.length !== 0) {
      console.log(product?.size.length)
      await addCartItems(product);
      return
    }
    console.log(product)
    return
  };
  const toggleDetails = itemId => {
    setDetailsVisible(prevDetailsVisible => ({
      ...prevDetailsVisible,
      [itemId]: !prevDetailsVisible[itemId],
    }));
  };
  const handleSizeChange = (size) => {
    setActiveSize(size)
  }

  const changeCount = (command) => {
    switch (command) {
      case 'plus': setCount(prev => ++prev);
        break;
      case 'minus': setCount(prev => --prev);
        break;
      default:
        break;
    }
    return;
  }

useEffect(() => {
  const fetchProduct = async () => {
    try {
      const res = await getProductById(productId);
      setProduct(res);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  if (productId) {
    fetchProduct();
  }
}, [productId]);



  const findSize = (size, array) => {
    const result = array
    .filter(item => Object.prototype.hasOwnProperty.call(item, 'size'))
      .map(item => item.size);
    return result.includes(size)
  }

  return (
    <div style={{ backgroundColor: '#FAFAFA' }}>

      {product?.name && <ProductCardDiv className="container">
        <ProductNavDiv>
          <ProductNavLink to="/">Головна /</ProductNavLink>
          <ProductCardTitle style={{ marginLeft: '10px' }}>
            {product.name}
          </ProductCardTitle>
        </ProductNavDiv>
        <ProductDiv>
          <CustomSwiper
            style={{ marginLeft: '0px', marginRight: '0px' }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
              {product.images.map(img => {
             return   <SwiperSlide key={img.image}>
               <ProductImageDiv>
                <ProductImg src={img.image} alt={product.name} />
              </ProductImageDiv>
             
            </SwiperSlide>
              })}
          
          </CustomSwiper>
          <ProductCardInfoDiv>
            <ProductCardName>{product.name}</ProductCardName>
            <ProductCardPrice>{product.price}</ProductCardPrice>
            <ProductCardSizeTitle>Розмір {!activeSize && <ValidSize>Оберіть розмір</ValidSize>}</ProductCardSizeTitle> 
            <ProductCardSizeDiv>
              
              
              {size.map(item => {
                return <ProductCardSizeButton disabled={!findSize(item, product.sizes_and_quantities)} data-active={activeSize === item ? 'active' : null} onClick={() => {
                  handleSizeChange(item)
                }}
                  key={item}>
                  {item}
                </ProductCardSizeButton>
              })}
              
              
            </ProductCardSizeDiv>
            <ProductCardSizeTitle>Оберіть кількість</ProductCardSizeTitle>
            
            <Counter count={ count } changeCount={changeCount} />

            {/* <ProductCardCounterDiv>
              <ProductPlusMinus disabled={count <= 1} onClick={() => {
                count <= 1 ? 1 : setCount(prev => --prev)
                
              }}>-</ProductPlusMinus>
              <ProductCardCounterText>{ count }</ProductCardCounterText>
              <ProductPlusMinus onClick={()=> {setCount(prev=>++prev)}}>+</ProductPlusMinus>
            </ProductCardCounterDiv> */}
            <ProductCardCartButtonDiv>
              <RedButton
                text={'додати до кошику'}
                nav={product?.size && '/cart'}
                tabwidth={'520px'}
                func={addCart}
              />
            </ProductCardCartButtonDiv>
            <ul>
              <ProductInfoItem>
                <ProductInfoDiv onClick={() => toggleDetails('item1')}>
                  <ProductInfoListTitle>опис</ProductInfoListTitle>
                  <ProductInfoArrow>
                    <img
                      src={detailsVisible['item1'] ? arrowUp : arrow}
                      alt="arrow"
                    />
                  </ProductInfoArrow>
                </ProductInfoDiv>
                {detailsVisible['item1'] && (
                  <ProductInfoTextDiv>
                    <ProductInfoText>
                      {product.description}
                    </ProductInfoText>
                  </ProductInfoTextDiv>
                )}
              </ProductInfoItem>
              <ProductInfoItem>
                <ProductInfoDiv onClick={() => toggleDetails('item2')}>
                  <ProductInfoListTitle>Склад тканини</ProductInfoListTitle>
                  <ProductInfoArrow>
                    <img
                      src={detailsVisible['item2'] ? arrowUp : arrow}
                      alt="arrow"
                    />
                  </ProductInfoArrow>
                </ProductInfoDiv>
                {detailsVisible['item2'] && (
                  <ProductInfoTextDiv>
                    <ProductInfoText>{product.composition}</ProductInfoText>
                  </ProductInfoTextDiv>
                )}
              </ProductInfoItem>
              <ProductInfoItem>
                <ProductInfoDiv onClick={() => toggleDetails('item3')}>
                  <ProductInfoImg src={delivery} alt="delivery" />
                  <ProductInfoListTitle>Доставка</ProductInfoListTitle>
                  <ProductInfoArrow>
                    <img
                      src={detailsVisible['item3'] ? arrowUp : arrow}
                      alt="arrow"
                    />
                  </ProductInfoArrow>
                </ProductInfoDiv>
                {detailsVisible['item3'] && (
                  <ProductInfoTextDiv>
                    <ProductInfoText>
                      <strong>Доставка по Україні:</strong> Нова Пошта та
                      Укрпошта. Доставка за тарифами транспортних компаній.
                    </ProductInfoText>
                    <ProductInfoText>
                      <strong>Відправлення за кордон:</strong> Відправку
                      здійснюємо Укрпоштою.
                    </ProductInfoText>
                  </ProductInfoTextDiv>
                )}
              </ProductInfoItem>
              <ProductInfoItem>
                <ProductInfoDiv onClick={() => toggleDetails('item4')}>
                  <ProductInfoImg src={wallet} alt="wallet" />
                  <ProductInfoListTitle>ОПЛАТА</ProductInfoListTitle>
                  <ProductInfoArrow>
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
      </ProductCardDiv>}
    </div>

    
  );
};

export default ProductCard;
