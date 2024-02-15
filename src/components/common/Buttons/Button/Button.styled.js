import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
  position: relative;
  overflow: hidden;

  width: 222px;
  height: 48px;

  border-radius: 4px;
  font-size: 18px;
  font-weight: 700;
  line-height: 120%;
  text-transform: uppercase;
  transition: all 300ms ease;

  background: transparent;
  border: 1px solid rgb(15, 0, 0);
  color: rgb(15, 0, 0);

  span {
    position: relative;
    z-index: 2;
  }

  &:disabled {
    background: rgb(217, 217, 217);
    border: 1px solid rgb(163, 163, 163);
    color: rgb(163, 163, 163);
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
    background: #d9d9d9;
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
