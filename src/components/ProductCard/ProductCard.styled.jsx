import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Swiper } from 'swiper/react';

export const ProductCardDiv = styled.div`
  padding-top: 32px;
  padding-bottom: 48px;
  padding-inline: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding-inline: 32px;
    padding-bottom: 144px;
  }
  @media screen and (min-width: 1440px) {
    padding-inline: 79px;
    padding-bottom: 100px;
  }
`;

export const ProductNavDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 32px;
  align-self: flex-start;
`;

export const ProductNavLink = styled(NavLink)`
  color: var(--Black, #110003);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

export const ProductCardTitle = styled.h2`
  font-family: Play;
  color: var(--Black, #110003);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
`;

export const ProductCardName = styled.p`
  font-family: Play;
  color: var(--Black, #110003);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-transform: uppercase;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 40px;
  }
`;

export const ProductCardPrice = styled.p`
  font-family: Play;
  color: var(--Black, #110003);
  font-family: Play;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  margin-bottom: 16px;
  display: flex;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`;

export const ProductCardSizeTitle = styled.p`
  font-family: Play;
  color: var(--Black, #110003);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  margin-bottom: 24px;
`;

export const ProductCardSizeDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  & button:not(:last-child) {
    margin-right: 16px;
  }
`;

export const ProductCardSizeButton = styled.button`
  position: relative;
  font-family: Play;
  display: flex;
  width: 40px;
  height: 34px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid var(--Black, #110003);
  &:hover {
    background-color: #110003;
    color: #fff;
  }
  &:disabled {
    border: 1px solid var(--gray-07, #c5c5c5);
    background-color: transparent;
    color: #d9d9d9;
    cursor: not-allowed;
  }
  &:disabled::before {
    content: '';
    position: absolute;
    top: 15px;
    left: -5px;
    width: 127%;
    height: 1px;
    background-color: var(--gray-07, #c5c5c5);
    transform: rotate(40deg);
    transform-origin: center;
  }
`;

export const ProductCardCounterDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
  & button:not(:last-child) {
    margin-right: 10px;
  }
`;

export const ProductCardCounterButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
`;

export const ProductCardCounterText = styled.p`
  font-family: Play;
  color: #110003;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  margin-right: 10px;
`;

export const ProductCardCartButtonDiv = styled.div`
  margin-bottom: 24px;
`;

export const ProductCardInfoDiv = styled.div`
  @media screen and (max-width: 1439px) {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    height: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 520px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 134px;
    justify-content: flex-start;
  }
`;

export const ProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const ProductPlusMinus = styled.button`
  font-family: Play;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  display: flex;
  padding: 0;
  margin: 0;
  width: 17px;
  height: 17px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 50%;
  color: #fff;
  background: var(--gray-04, #878787);
  &:hover {
    background-color: #110003;
  }
`;

export const ProductInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
  cursor: pointer;
`;

export const ProductInfoListTitle = styled.p`
  color: var(--Black, #110003);
  font-family: Play;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%;
  text-transform: uppercase;
`;

export const ProductInfoItem = styled.li`
  border-bottom: 1px solid var(--gray-06, #6f6f6f);
  margin-bottom: 8px;
`;

export const ProductInfoArrow = styled.button`
  border: none;
  background-color: transparent;
  margin-left: auto;
`;

export const ProductInfoTextDiv = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
`;

export const ProductInfoText = styled.p`
  color: var(--Black, #110003);
  font-family: Play;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  margin-bottom: 10px;
`;

export const CustomSwiper = styled(Swiper)`
  position: relative;
  margin-bottom: auto;
  @media screen and (min-width: 360px) {
    width: 328px;
  }
  @media screen and (min-width: 768px) {
    width: 520px;
  }
`;

export const ProductImageDiv = styled.div`
  width: 328px;
  height: 482px;
  margin-bottom: 16px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    width: 520px;
    height: 682px;
  }
`;

export const ProductInfoImg = styled.img`
  margin-right: 8px;
`;

export const ProductWalletList = styled.ul`
  & li {
    padding-left: 10px;
  }

  & li:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const ProductWalletItem = styled.li`
  position: relative;
  color: var(--Black, #110003);
  font-family: Play;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 4px;
    background-color: #110003;
    border-radius: 50%;
    margin-right: 10px;
  }
`;
