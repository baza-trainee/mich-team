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

const ProductCard = () => {
  const [product, setProduct] = useState({});
  const {productId} = useParams();
  const size = ['XS', 'S', 'M', 'L', 'XL'];
  const [detailsVisible, setDetailsVisible] = useState({});
  const [count, setCount] = useState(1);
  const [activeSize, setActiveSize] = useState('M');
  const toggleDetails = itemId => {
    setDetailsVisible(prevDetailsVisible => ({
      ...prevDetailsVisible,
      [itemId]: !prevDetailsVisible[itemId],
    }));
  };
  const handleSizeChange = (size) => {
    setActiveSize(size)
  }

useEffect(() => {
  const fetchProduct = async () => {
    try {
      const res = await getProductById(productId);
      setProduct(res);
      console.log(res);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  if (productId) {
    fetchProduct();
  }
}, [productId]);

  // useEffect(() => {
    
  //   getProductById(productId).then(res => {
  //     setProduct(res)
  //     console.log(res)
  //     return
  //   });
  // }, [productId])

  

  return (
    <div style={{ backgroundColor: '#FAFAFA' }}>
      {console.log(productId)}
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
            <ProductCardSizeTitle>Оберіть розмір</ProductCardSizeTitle>
            <ProductCardSizeDiv>
              
              
              {size.map(item => {
                
                return <ProductCardSizeButton disabled={!item.includes(product.sizes_and_quantities)} data-active={activeSize === item ? 'active' : null} onClick={() => {
                  handleSizeChange(item)
                }}
                  key={item}>
                  {item}
                </ProductCardSizeButton>
              })}
              {/* <ProductCardSizeButton disabled>XS</ProductCardSizeButton>
              <ProductCardSizeButton>S</ProductCardSizeButton>
              <ProductCardSizeButton>M</ProductCardSizeButton>
              <ProductCardSizeButton disabled>L</ProductCardSizeButton>
              <ProductCardSizeButton>XL</ProductCardSizeButton> */}
            </ProductCardSizeDiv>
            <ProductCardSizeTitle>Оберіть кількість</ProductCardSizeTitle>
            <ProductCardCounterDiv>
              <ProductPlusMinus disabled={count <= 1} onClick={() => {
                count <= 1 ? 1 : setCount(prev => --prev)
                
              }}>-</ProductPlusMinus>
              <ProductCardCounterText>{ count }</ProductCardCounterText>
              <ProductPlusMinus onClick={()=> {setCount(prev=>++prev)}}>+</ProductPlusMinus>
            </ProductCardCounterDiv>
            <ProductCardCartButtonDiv>
              <RedButton
                text={'додати до кошику'}
                nav={'/cart'}
                tabwidth={'520px'}
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

    // <div style={{ backgroundColor: '#FAFAFA' }}>
      
    //   {product?.name && <ProductCardDiv className="container">
    //     {console.log(product, activeSize)}
    //     <ProductNavDiv>
    //       <ProductNavLink to="/">Головна /</ProductNavLink>
    //       <ProductCardTitle style={{ marginLeft: '10px' }}>
            
    //         {product.name}

    //       </ProductCardTitle>
    //     </ProductNavDiv>
    //     <ProductDiv>
    //       <CustomSwiper
    //         style={{ marginLeft: '0px', marginRight: '0px' }}
    //         navigation={true}
    //         modules={[Navigation]}
    //         className="mySwiper"
    //       >
    //                    {product.images.map(img => {
    //          return   <SwiperSlide key={img.image}>
    //            <ProductImageDiv>
    //             <ProductImg src={img.image} alt={product.name} />
    //           </ProductImageDiv>
             
    //         </SwiperSlide>
    //           })}
            
    //       </CustomSwiper>
    //       <ProductCardInfoDiv>
    //         <ProductCardName>футболка “Mich team”</ProductCardName>
    //         <ProductCardPrice>1050 грн</ProductCardPrice>
    //         <ProductCardSizeTitle>Оберіть розмір</ProductCardSizeTitle>
    //         <ProductCardSizeDiv>
    //           {/* {
    //             size.map(item => {
    //               return <>
    //               <label key={item+item} htmlFor={item}>{item}
    //               </label>
    //                 <ProductCardSizeRadio onClick={(e) => {
    //                   setActiveSize(item);
    //                   console.log(activeSize)
    //                   console.log(e.currentTarget.checked);
    //               }} key={item} type="radio" name="size" id={item} value={item}/>
    //               </>
                    
    //             })
    //           } */}
    //           {size.map(item => {
    //             return <ProductCardSizeButton data-active={activeSize === item ? 'active' : null} onClick={() => {
    //               handleSizeChange(item)
    //             }}
    //               key={item}>
    //               {item}
    //             </ProductCardSizeButton>
    //           })}
    //           {/* <ProductCardSizeButton disabled>XS</ProductCardSizeButton>
    //           <ProductCardSizeButton>S</ProductCardSizeButton>
    //           <ProductCardSizeButton>M</ProductCardSizeButton>
    //           <ProductCardSizeButton disabled>L</ProductCardSizeButton>
    //           <ProductCardSizeButton>XL</ProductCardSizeButton> */}
    //         </ProductCardSizeDiv>
    //         <ProductCardSizeTitle>Оберіть кількість</ProductCardSizeTitle>
    //         <ProductCardCounterDiv>
    //           <ProductPlusMinus disabled={count <= 1} onClick={() => {
    //             count <= 1 ? 1 : setCount(prev => --prev)
                
    //           }}>-</ProductPlusMinus>
    //           <ProductCardCounterText>{ count }</ProductCardCounterText>
    //           <ProductPlusMinus onClick={()=> {setCount(prev=>++prev)}}>+</ProductPlusMinus>
    //         </ProductCardCounterDiv>
    //         <ProductCardCartButtonDiv>
    //           <RedButton
    //             text={'додати до кошику'}
    //             nav={'/cart'}
    //             tabwidth={'520px'}
    //           />
    //         </ProductCardCartButtonDiv>
    //         <ul>
    //           <ProductInfoItem>
    //             <ProductInfoDiv onClick={() => toggleDetails('item1')}>
    //               <ProductInfoListTitle>опис</ProductInfoListTitle>
    //               <ProductInfoArrow>
    //                 <img
    //                   src={detailsVisible['item1'] ? arrowUp : arrow}
    //                   alt="arrow"
    //                 />
    //               </ProductInfoArrow>
    //             </ProductInfoDiv>
    //             {detailsVisible['item1'] && (
    //               <ProductInfoTextDiv>
    //                 <ProductInfoText>
    //                   Яскрава футболка припаде до смаку відважним чоловікам, які
    //                   не бояться виражати свою стильність та показувати м`язисту
    //                   фігуру. Ця модель ідеально підходить для урочистих подій,
    //                   вечірок та корпоративів.
    //                 </ProductInfoText>
    //               </ProductInfoTextDiv>
    //             )}
    //           </ProductInfoItem>
    //           <ProductInfoItem>
    //             <ProductInfoDiv onClick={() => toggleDetails('item2')}>
    //               <ProductInfoListTitle>Склад тканини</ProductInfoListTitle>
    //               <ProductInfoArrow>
    //                 <img
    //                   src={detailsVisible['item2'] ? arrowUp : arrow}
    //                   alt="arrow"
    //                 />
    //               </ProductInfoArrow>
    //             </ProductInfoDiv>
    //             {detailsVisible['item2'] && (
    //               <ProductInfoTextDiv>
    //                 <ProductInfoText>100% бавовна</ProductInfoText>
    //               </ProductInfoTextDiv>
    //             )}
    //           </ProductInfoItem>
    //           <ProductInfoItem>
    //             <ProductInfoDiv onClick={() => toggleDetails('item3')}>
    //               <ProductInfoImg src={delivery} alt="delivery" />
    //               <ProductInfoListTitle>Доставка</ProductInfoListTitle>
    //               <ProductInfoArrow>
    //                 <img
    //                   src={detailsVisible['item3'] ? arrowUp : arrow}
    //                   alt="arrow"
    //                 />
    //               </ProductInfoArrow>
    //             </ProductInfoDiv>
    //             {detailsVisible['item3'] && (
    //               <ProductInfoTextDiv>
    //                 <ProductInfoText>
    //                   <strong>Доставка по Україні:</strong> Нова Пошта та
    //                   Укрпошта. Доставка за тарифами транспортних компаній.
    //                 </ProductInfoText>
    //                 <ProductInfoText>
    //                   <strong>Відправлення за кордон:</strong> Відправку
    //                   здійснюємо Укрпоштою.
    //                 </ProductInfoText>
    //               </ProductInfoTextDiv>
    //             )}
    //           </ProductInfoItem>
    //           <ProductInfoItem>
    //             <ProductInfoDiv onClick={() => toggleDetails('item4')}>
    //               <ProductInfoImg src={wallet} alt="wallet" />
    //               <ProductInfoListTitle>ОПЛАТА</ProductInfoListTitle>
    //               <ProductInfoArrow>
    //                 <img
    //                   src={detailsVisible['item4'] ? arrowUp : arrow}
    //                   alt="arrow"
    //                 />
    //               </ProductInfoArrow>
    //             </ProductInfoDiv>
    //             {detailsVisible['item4'] && (
    //               <ProductInfoTextDiv>
    //                 <ProductInfoText>
    //                   На нашому сайті ви можете здійснити оплату наступними
    //                   способами:
    //                 </ProductInfoText>
    //                 <ProductWalletList>
    //                   <ProductWalletItem>
    //                     карткою Visa і MasterCard;
    //                   </ProductWalletItem>
    //                   <ProductWalletItem>GooglePay;</ProductWalletItem>
    //                   <ProductWalletItem>Monobank;</ProductWalletItem>
    //                   <ProductWalletItem>WayforPay.</ProductWalletItem>
    //                 </ProductWalletList>
    //               </ProductInfoTextDiv>
    //             )}
    //           </ProductInfoItem>
    //         </ul>
    //       </ProductCardInfoDiv>
    //     </ProductDiv>
    //   </ProductCardDiv>}
    // </div>

    // <div style={{ backgroundColor: '#FAFAFA' }}>
      
    //   {product?.name && <ProductCardDiv className="container">
    //     {console.log(product, activeSize)}
    //     <ProductNavDiv>
    //       <ProductNavLink to="/">Головна /</ProductNavLink>
    //       <ProductCardTitle style={{ marginLeft: '10px' }}>
    //         Футболка Mich team
            
    //       </ProductCardTitle>
    //     </ProductNavDiv>
    //     <ProductDiv>
    //       <CustomSwiper
    //         style={{ marginLeft: '0px', marginRight: '0px' }}
    //         navigation={true}
    //         modules={[Navigation]}
    //         className="mySwiper"
    //       >
    //         <SwiperSlide>
    //           <ProductImageDiv>
    //             <ProductImg src={shirt} alt="shirt" />
    //           </ProductImageDiv>
    //         </SwiperSlide>
    //         <SwiperSlide>
    //           <ProductImageDiv>
    //             <ProductImg src={shirt} alt="shirt" />
    //           </ProductImageDiv>
    //         </SwiperSlide>
    //         <SwiperSlide>
    //           <ProductImageDiv>
    //             <ProductImg src={shirt} alt="shirt" />
    //           </ProductImageDiv>
    //         </SwiperSlide>
    //       </CustomSwiper>
    //       <ProductCardInfoDiv>
    //         <ProductCardName>футболка “Mich team”</ProductCardName>
    //         <ProductCardPrice>1050 грн</ProductCardPrice>
    //         <ProductCardSizeTitle>Оберіть розмір</ProductCardSizeTitle>
    //         <ProductCardSizeDiv>
    //           {/* {
    //             size.map(item => {
    //               return <>
    //               <label key={item+item} htmlFor={item}>{item}
    //               </label>
    //                 <ProductCardSizeRadio onClick={(e) => {
    //                   setActiveSize(item);
    //                   console.log(activeSize)
    //                   console.log(e.currentTarget.checked);
    //               }} key={item} type="radio" name="size" id={item} value={item}/>
    //               </>
                    
    //             })
    //           } */}
    //           {size.map(item => {
    //             return <ProductCardSizeButton data-active={activeSize === item ? 'active' : null} onClick={() => {
    //               handleSizeChange(item)
    //             }}
    //               key={item}>
    //               {item}
    //             </ProductCardSizeButton>
    //           })}
    //           {/* <ProductCardSizeButton disabled>XS</ProductCardSizeButton>
    //           <ProductCardSizeButton>S</ProductCardSizeButton>
    //           <ProductCardSizeButton>M</ProductCardSizeButton>
    //           <ProductCardSizeButton disabled>L</ProductCardSizeButton>
    //           <ProductCardSizeButton>XL</ProductCardSizeButton> */}
    //         </ProductCardSizeDiv>
    //         <ProductCardSizeTitle>Оберіть кількість</ProductCardSizeTitle>
    //         <ProductCardCounterDiv>
    //           <ProductPlusMinus disabled={count <= 1} onClick={() => {
    //             count <= 1 ? 1 : setCount(prev => --prev)
                
    //           }}>-</ProductPlusMinus>
    //           <ProductCardCounterText>{ count }</ProductCardCounterText>
    //           <ProductPlusMinus onClick={()=> {setCount(prev=>++prev)}}>+</ProductPlusMinus>
    //         </ProductCardCounterDiv>
    //         <ProductCardCartButtonDiv>
    //           <RedButton
    //             text={'додати до кошику'}
    //             nav={'/cart'}
    //             tabwidth={'520px'}
    //           />
    //         </ProductCardCartButtonDiv>
    //         <ul>
    //           <ProductInfoItem>
    //             <ProductInfoDiv onClick={() => toggleDetails('item1')}>
    //               <ProductInfoListTitle>опис</ProductInfoListTitle>
    //               <ProductInfoArrow>
    //                 <img
    //                   src={detailsVisible['item1'] ? arrowUp : arrow}
    //                   alt="arrow"
    //                 />
    //               </ProductInfoArrow>
    //             </ProductInfoDiv>
    //             {detailsVisible['item1'] && (
    //               <ProductInfoTextDiv>
    //                 <ProductInfoText>
    //                   Яскрава футболка припаде до смаку відважним чоловікам, які
    //                   не бояться виражати свою стильність та показувати м`язисту
    //                   фігуру. Ця модель ідеально підходить для урочистих подій,
    //                   вечірок та корпоративів.
    //                 </ProductInfoText>
    //               </ProductInfoTextDiv>
    //             )}
    //           </ProductInfoItem>
    //           <ProductInfoItem>
    //             <ProductInfoDiv onClick={() => toggleDetails('item2')}>
    //               <ProductInfoListTitle>Склад тканини</ProductInfoListTitle>
    //               <ProductInfoArrow>
    //                 <img
    //                   src={detailsVisible['item2'] ? arrowUp : arrow}
    //                   alt="arrow"
    //                 />
    //               </ProductInfoArrow>
    //             </ProductInfoDiv>
    //             {detailsVisible['item2'] && (
    //               <ProductInfoTextDiv>
    //                 <ProductInfoText>100% бавовна</ProductInfoText>
    //               </ProductInfoTextDiv>
    //             )}
    //           </ProductInfoItem>
    //           <ProductInfoItem>
    //             <ProductInfoDiv onClick={() => toggleDetails('item3')}>
    //               <ProductInfoImg src={delivery} alt="delivery" />
    //               <ProductInfoListTitle>Доставка</ProductInfoListTitle>
    //               <ProductInfoArrow>
    //                 <img
    //                   src={detailsVisible['item3'] ? arrowUp : arrow}
    //                   alt="arrow"
    //                 />
    //               </ProductInfoArrow>
    //             </ProductInfoDiv>
    //             {detailsVisible['item3'] && (
    //               <ProductInfoTextDiv>
    //                 <ProductInfoText>
    //                   <strong>Доставка по Україні:</strong> Нова Пошта та
    //                   Укрпошта. Доставка за тарифами транспортних компаній.
    //                 </ProductInfoText>
    //                 <ProductInfoText>
    //                   <strong>Відправлення за кордон:</strong> Відправку
    //                   здійснюємо Укрпоштою.
    //                 </ProductInfoText>
    //               </ProductInfoTextDiv>
    //             )}
    //           </ProductInfoItem>
    //           <ProductInfoItem>
    //             <ProductInfoDiv onClick={() => toggleDetails('item4')}>
    //               <ProductInfoImg src={wallet} alt="wallet" />
    //               <ProductInfoListTitle>ОПЛАТА</ProductInfoListTitle>
    //               <ProductInfoArrow>
    //                 <img
    //                   src={detailsVisible['item4'] ? arrowUp : arrow}
    //                   alt="arrow"
    //                 />
    //               </ProductInfoArrow>
    //             </ProductInfoDiv>
    //             {detailsVisible['item4'] && (
    //               <ProductInfoTextDiv>
    //                 <ProductInfoText>
    //                   На нашому сайті ви можете здійснити оплату наступними
    //                   способами:
    //                 </ProductInfoText>
    //                 <ProductWalletList>
    //                   <ProductWalletItem>
    //                     карткою Visa і MasterCard;
    //                   </ProductWalletItem>
    //                   <ProductWalletItem>GooglePay;</ProductWalletItem>
    //                   <ProductWalletItem>Monobank;</ProductWalletItem>
    //                   <ProductWalletItem>WayforPay.</ProductWalletItem>
    //                 </ProductWalletList>
    //               </ProductInfoTextDiv>
    //             )}
    //           </ProductInfoItem>
    //         </ul>
    //       </ProductCardInfoDiv>
    //     </ProductDiv>
    //   </ProductCardDiv>}
    // </div>
  );
};

export default ProductCard;
