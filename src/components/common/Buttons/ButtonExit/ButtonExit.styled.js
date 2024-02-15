import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
  position: relative;
  overflow: hidden;

  width: 229px;
  height: 50px;

  border-radius: 4px;
  font-size: 18px;
  font-weight: 700;
  line-height: 120%;
  text-transform: uppercase;
  transition: all 300ms ease;
  background: #d91f2d;
  color: #fefefe;

  span {
    position: relative;
    z-index: 2;
  }

  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 100%;
    background: #000;
    z-index: 1;
    transition: width 150ms ease-in-out;
  }

  &:focus,
  &:hover {
    color: #fff;
    &:after {
      width: 110%;
    }
  }

  @media screen and (max-width: 768px) {
    display: block;
    margin: 0 auto;
  }
`;
