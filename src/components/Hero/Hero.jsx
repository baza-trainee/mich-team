import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { HeroSwiper, HeroImg } from './Hero.styled';

import slide1 from '../../images/1.jpg';
import slide2 from '../../images/2.jpg';
import slide3 from '../../images/3.jpg';
import slide4 from '../../images/4.jpg';
import slide5 from '../../images/5.jpg';
import slide6 from '../../images/6.jpg';

const Hero = () => {
  return (
    <section>
      <HeroSwiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper heroSwiper"
      >
        <SwiperSlide>
          <HeroImg src={slide1} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <HeroImg src={slide2} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <HeroImg src={slide3} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <HeroImg src={slide4} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source
              srcSet={slide5}
              media="(min-width: 1440px)"
              type="image/jpg"
            />
            <source
              srcSet={slide6}
              media="(min-width: 360px)"
              type="image/jpg"
            />
            <HeroImg loading="lazy" src={slide6} alt="Popular Picture" />
          </picture>
        </SwiperSlide>
      </HeroSwiper>
    </section>
  );
};

export default Hero;
