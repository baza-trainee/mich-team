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
  justify-content: center;
  @media screen and (min-width: 360px) {
    flex-direction: column;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    & li:not(:last-child) {
      margin-right: 16px;
    }
  }
  @media screen and (min-width: 1440px) {
    & li:not(:last-child) {
      margin-right: 22px;
    }
  }
`;

export const ProductItem = styled.li`
  margin-bottom: 46px;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 80px;
  }
`;

export const ProductImg = styled.img`
  margin-bottom: 16px;
  @media screen and (min-width: 360px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const ProductText = styled.p`
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

export const ProductButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: var(--Main-red, #d91f2d);
  color: var(--Wtite, #fdfdfd);
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-transform: uppercase;
  width: 328px;
  height: 50px;
  padding: 12px 36px;
  @media screen and (min-width: 768px) {
    width: 344px;
    height: 60px;
    font-size: 22px;
  }
  @media screen and (min-width: 1440px) {
    width: 520px;
    height: 60px;
    padding: 16px 36px;
    font-size: 22px;
    line-height: 140%;
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
