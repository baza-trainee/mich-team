import styled from '@emotion/styled';

export const ProductContainer = styled.div`
  padding: 42px 16px;
`;

export const ProductsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: '360px') {
    flex-direction: column;
  }
  @media screen and (min-width: '768px') {
    /* flex-direction: row; */
  }
  @media screen and (min-width: '1440px') {
  }
`;

export const ProductItem = styled.li``;

export const ProductImg = styled.img`
  margin-bottom: 16px;
  @media screen and (min-width: '360px') {
  }
  @media screen and (min-width: '768px') {
  }
  @media screen and (min-width: '1440px') {
  }
`;

export const ProductText = styled.p`
  color: var(--Black, #110003);
  font-family: Play;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 16px;
  @media screen and (min-width: '360px') {
    color: var(--Black, #110003);
    text-align: center;
    font-family: Play;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    text-transform: uppercase;
  }
  @media screen and (min-width: '768px') {
  }
  @media screen and (min-width: '1440px') {
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
  font-family: Play;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-transform: uppercase;
  @media screen and (min-width: '360px') {
    width: 328px;
    height: 50px;
    padding: 12px 36px;
    margin-bottom: 42px;
  }
  @media screen and (min-width: '768px') {
    width: 344px;
    height: 60px;
    font-size: 22px;
  }
  @media screen and (min-width: '1440px') {
    width: 520px;
    height: 60px;
    padding: 16px 36px;
    font-size: 22px;
    line-height: 140%;
  }
`;
