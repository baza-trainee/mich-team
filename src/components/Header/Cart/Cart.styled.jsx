import styled from '@emotion/styled';

export const CartBtnWrapper = styled.div`
  position: relative;
  color: #fefefe;
  display: flex;
  padding: 6px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
  @media screen and (min-width: 768px) {
    padding: 16px;
    border-radius: 40px;
  }
`;

export const CartBtn = styled.button`
  color: #fefefe;
  display: flex;
  gap: 4px;
  align-items: flex-end;
  border-radius: 20px;
  font-family: Play;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background-color: transparent;
  justify-self: center;
`;

export const StyledCart = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 200;
  display: flex;
  flex-direction: column;
  padding: 16px;
  visibility: ${({ open }) => (open ? 'hidden' : 'visible')};

  background: #fdfdfd;
  color: #0f0000;

  height: 100vh;
  width: 310px;

  transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
  overflow: hidden;
  transition:
    transform 0.4s ease-in-out,
    display 0.4s ease-in-out;

  @media screen and (min-width: 768px) {
    padding: 16px 32px;
    width: 355px;
  }
  @media screen and (min-width: 1440px) {
    width: 450px;
  }
`;

export const CartModalBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 36px;
  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`;

export const CartTitle = styled.h2`
  font-family: Play;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-transform: uppercase;
`;

export const CartOrderCountWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  margin: 24px 0;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 1px;
    background-color: #d9d9d9;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 1px;
    background-color: #d9d9d9;
  }
  @media screen and (min-width: 1440px) {
    margin: 32px 0;
  }
`;

export const CartOrderTitle = styled.p`
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

export const CartOrderCount = styled.div`
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

export const CartSumWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  margin: 24px 0;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 1px;
    background-color: #d9d9d9;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 1px;
    background-color: #d9d9d9;
  }
  @media screen and (min-width: 1440px) {
    margin: 32px 0;
  }
`;

export const CartSumTitle = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    font-weight: 400;
  }
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    font-weight: 700;
  }
`;

export const CartSum = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
`;

export const BtnToOrder = styled.button`
  background-color: #0b0000;
  border-radius: 4px;
  padding: 12px 36px;
  text-transform: uppercase;
  color: #fefefe;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
`;

export const CartItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const CartItem = styled.div`
  display: flex;
`;

export const CartItemImgWrapper = styled.div`
  height: 100px;
  width: 90px;
`;
export const CartItemImg = styled.img`
  height: 100%;
  width: 100%;
`;

export const getStyledIcon = component => styled(component)`
  width: 24px;
  height: 24px;
`;
