import styled from '@emotion/styled';

export const ListLinkMobile = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  list-style: none;
  font-size: 16px;
  line-height: 120%;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const ListLinkDesktop = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 16px;

    list-style: none;

    font-size: 16px;
    line-height: 120%;
  }
`;

export const NavButtonStyled = styled.button`
  cursor: pointer;
  color: #0f0000;
  gap: 8px;
  padding: ${p => (p.fix ? ' 8px 0 24px' : ' 8px 0')};
  background: transparent;
  width: 100%;
  display: flex;
  align-items: center;
  transition: all 300ms ease;

  & :last-child {
    margin-left: auto;
  }
  svg {
    width: 18px;
    height: 18px;
    transition: all 300ms ease;
  }

  ${({ isopen }) =>
    isopen &&
    `font-weight: 700;
  & :last-child {
    transform: rotate(180deg);
  }
  `};

  @media screen and (min-width: 768px) {
    & :last-child {
      display: none;
    }
  }
`;

export const Title = styled.h2`
  padding: 16px 8px;

  color: #000;
  font-size: 24px;
  line-height: 120%; /* 21.6px */
  text-transform: uppercase;

  margin-bottom: 16px;
  border-bottom: 1px solid #d9d9d9;
  background-color: #d9d9d910;
`;

export const WrapperDesktop = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: grid;
    gap: 16px;
    grid-template-columns: 224px 1fr;
  }

  @media screen and (min-width: 1440px) {
    display: grid;
    gap: 133px;
    grid-template-columns: 224px 1fr;
  }
`;

export const WrapperMobile = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Block = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 224px;
  }
`;

export const Div = styled.div`
  overflow: hidden;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const DivInfo = styled.div`
  display: ${({ isopen }) => (isopen ? 'block' : 'none')};

  @media screen and (min-width: 768px) {
    max-width: 466px;
  }
  @media screen and (min-width: 1440px) {
    max-width: ${p => (p.address ? '845px' : '530px')};
  }
`;

export const ButtonStyled = styled.button`
  cursor: pointer;
  background: transparent;
  width: max-content;
  padding: 8px 0;
  display: flex;
  gap: 8px;
`;

export const WrepperComponent = styled.div`
  width: 100%;
`;

export const TitleComponent = styled.h2`
  display: none;
  padding: 20px 8px;

  color: #000;
  font-size: 18px;
  line-height: 120%; /* 21.6px */
  font-weight: 700;

  margin-bottom: 16px;
  border-bottom: 1px solid #d9d9d9;
  background-color: rgba(179, 179, 179, 0.05);

  @media screen and (min-width: 768px) {
    display: block;
    margin-bottom: 0;
  }
`;
