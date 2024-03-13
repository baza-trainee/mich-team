import styled from '@emotion/styled';

export const OrderTitle = styled.p`
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 110%;
  }
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    font-weight: 700;
    line-height: 120%;
  }
`;

export const OrderQuantity = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #000;
`;
