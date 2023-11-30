import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  padding: 16px 8px;
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas: 'menu lang logo user cart';
  width: 100%;
  min-height: 56px;
  @media screen and (min-width: 768px) {
    padding: 32px 8px;
  }
  @media screen and (min-width: 1440px) {
    padding: 80px 8px;
  }
`;

export const getStyledIcon = component => styled(component)`
  fill: #fdfdfd;
`;

export const Menu = styled.button`
  background-color: transparent;
  justify-self: center;
  align-self: center;
  grid-area: menu;
`;
export const Logo = styled.div`
  justify-self: center;
  align-self: center;
  grid-area: logo;
`;
export const User = styled.div`
  justify-self: center;
  align-self: center;
  grid-area: user;
`;
export const Lang = styled.div`
  justify-self: center;
  align-self: center;
  grid-area: lang;
`;
export const Cart = styled.div`
  justify-self: center;
  align-self: center;
  grid-area: cart;
`;
