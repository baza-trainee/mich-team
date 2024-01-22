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
  align-items: flex-start;
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
    padding: 16px 24px;
    width: 355px;
  }
  @media screen and (min-width: 1440px) {
    width: 390px;
    padding: 16px 32px;
  }
`;

export const getStyledIcon = component => styled(component)`
  width: 24px;
  height: 24px;
`;
