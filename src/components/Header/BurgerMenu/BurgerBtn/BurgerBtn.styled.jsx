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

export const BurgerButton = styled.button`
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

export const getStyledIcon = (component, width, height, stroke) => styled(
  component
)`
  width: ${width};
  height: ${height};
  stroke: ${stroke};
`;
