import styled from '@emotion/styled';
import { Swiper } from 'swiper/react';

export const ProductContainer = styled.div`
  padding-top: 42px;
  @media screen and (min-width: 768px) {
    padding-top: 56px;
    padding-bottom: 35px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 100px;
    padding-bottom: 22px;
  }
`;

export const ProductsList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex-wrap:wrap;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    /* & li:not(:last-child) {
      margin-right: 16px;
    } */
    gap:32px 16px
  }
  @media screen and (min-width: 1440px) {
    /* & li:not(:last-child) {
      margin-right: 22px;
    } */
    gap:80px 22px;
    width: 1068px;
    margin: 0 auto;
  }
`;

export const ProductItem = styled.li`
  margin-bottom: 46px;
  width: 328px;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    width: 344px;
  }
  @media screen and (min-width: 1440px) {
    /* margin-bottom: 80px; */
    width: 520px;
  }
`;

export const ProductImageDiv = styled.div`
  width: 328px;
  height: 450px;
  margin-bottom: 16px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    width: 344px;
    height: 383px;
  }
  @media screen and (min-width: 1440px) {
    width: 520px;
    height: 640px;
  }
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  @media screen and (min-width: 360px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const ProductText = styled.p`
  font-family: Play;
  color: var(--Black, #110003);
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 16px;
  font-size: 24px;
  line-height: 120%;
  text-transform: uppercase;
  @media screen and (min-width: 1440px) {
    margin-bottom: 20px;
  }
`;

export const CustomSwiper = styled(Swiper)`
  @media screen and (min-width: 360px) {
    width: 328px;
  }
  @media screen and (min-width: 768px) {
    width: 344px;
  }
  @media screen and (min-width: 1440px) {
    width: 520px;
  }
`;

export const ArrowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ArrowLeft = styled.div`
  position: absolute;
  left: 0;
  top: 200px;
  z-index: 1;
`;
export const ArrowRight = styled.div`
  position: absolute;
  right: 14px;
  top: 308px;
  z-index: 1;
`;
