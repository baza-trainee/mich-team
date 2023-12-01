import styled from '@emotion/styled';
import { Swiper } from 'swiper/react';

export const HeroSwiper = styled(Swiper)`
  width: 100%;
  height: 800px;
  overflow: hidden;
  @media screen and (width: 768px) {
    height: 1024px;
  }
  @media screen and (width: 1440px) {
    height: 800px;
  }
`;

export const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
