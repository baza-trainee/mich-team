import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ProductCardDiv = styled.div`
  padding-top: 32px;
  padding-inline: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  font-family: Play;
  display: flex;
  width: 40px;
  height: 34px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid var(--Black, #110003);
`;

export const ProductCardCounterDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
`;

export const ProductCardCounterButton = styled.button`
  border: none;
  background-color: transparent;
`;

export const ProductCardCounterText = styled.p`
  font-family: Play;
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;

export const ProductCardCartButtonDiv = styled.div`
  margin-bottom: 24px;
`;

export const ProductCardInfoDiv = styled.div`
  @media screen and (max-width: 1439px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 134px;
    justify-content: flex-start;
  }
`;

export const ProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;
