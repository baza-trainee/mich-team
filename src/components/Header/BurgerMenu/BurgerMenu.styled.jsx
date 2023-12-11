import styled from '@emotion/styled';

export const BurgerWrapper = styled.div`
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

export const BurgerBtn = styled.button`
  color: #fefefe;
  display: flex;
  align-items: center;
  border-radius: 20px;
  font-family: Play;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background-color: transparent;
  justify-self: center;
  align-self: center;
  @media screen and (min-width: 768px) {
    gap: 10px;
  }
`;

export const BurgerText = styled.p`
  color: #fefefe;
  font-family: Play;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 17.6px;
  text-transform: uppercase;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: #fdfdfd;
  transform: ${({ open }) => (open ? 'translateX(-100%)' : 'translateX(0)')};
  height: 100vh;
  width: 310px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.4s ease-in-out;
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
  fill: #fdfdfd;
`;
