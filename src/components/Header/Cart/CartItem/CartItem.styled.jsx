import styled from '@emotion/styled';

export const CartItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 15px;
  overflow: scroll;
`;

export const CartItemWrapper = styled.div`
  display: flex;
  padding: 8px;
  gap: 8px;
  background-color: #fafafa;
`;

export const CartItemImgWrapper = styled.div`
  height: 100px;
  width: 90px;
  flex-shrink: 0;
  @media screen and (min-width: 768px) {
    height: 110px;
    width: 95px;
  }
`;

export const CartItemImg = styled.img`
  height: 100%;
  width: 100%;
`;

export const CartItemInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-grow: 1;
  justify-content: center;
`;

export const CartItemInfoText = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const CartItemQuantityWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const CartItemQuantityBtn = styled.button`
  display: flex;
  height: 17px;
  width: 17px;
  border-radius: 50%;
  background-color: #878787;
  color: #ffffff;
  justify-content: center;
  align-items: center;
`;

export const CartItemQuantity = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 120%;
`;

export const CartItemPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CartItemPrice = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 110%;
`;

export const getStyledIcon = (component, width, height, stroke) => styled(
  component
)`
  width: ${width};
  height: ${height};
  stroke: ${stroke};
`;
