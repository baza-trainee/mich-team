import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  position: relative;
  ${props =>
    props.className.search(/main-header/g) === -1 &&
    `
    background-color: #0F0000;
  `}

  z-index: 100;
`;
export const HeaderWrapper = styled.div`
  position: relative;
  padding: 8px 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  min-height: 56px;
  width: 360px;
  @media screen and (min-width: 768px) {
    justify-content: flex-end;
    width: 100%;
    padding: 4px 32px;
    align-items: center;
    .element:nth-of-type(1) {
      order: 1;
      margin-right: auto;
    }
    .element:nth-of-type(2) {
      order: 5;
    }
    .element:nth-of-type(3) {
      order: 2;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    .element:nth-of-type(4) {
      order: 3;
    }
    .element:nth-of-type(5) {
      order: 4;
      margin: 0 8px;
    }
  }
  @media screen and (min-width: 1280px) {
    padding: 8px 80px;
    .element:nth-of-type(5) {
      order: 4;
      margin: 0 16px;
    }
  }
  ${props =>
    props.className.search(/main-header/g) != -1 &&
    `
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
`}
`;
export const Logo = styled.div``;
export const LogoWrapper = styled.a``;

export const getStyledIcon = component => styled(component)`
  width: 74px;
  height: 42px;
  fill: #fefefe;
  @media screen and (min-width: 768px) {
    width: 134px;
    height: 72px;
  }
  @media screen and (min-width: 1440px) {
    width: 135px;
    height: 68px;
  }
`;
