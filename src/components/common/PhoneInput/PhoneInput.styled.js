import styled from '@emotion/styled';

export const DivStyle = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  border-bottom: 1px solid rgb(76, 76, 76);

  label {
    position: absolute;
    top: ${p => (p.lengthValue ? '-6px' : '12px')};

    font-size: ${p => (p.lengthValue ? '12px' : '16px')};
    line-height: ${p => (p.lengthValue ? '16px' : '24px')};
    letter-spacing: 0.5px;
    color: rgba(135, 135, 135, 1);
    transition: all 300ms ease;
  }
`;

export const InputStyled = styled.input`
  padding: 12px 8px 12px 4px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  &:hover + label,
  &:focus + label {
    top: -6px;
    font-size: 12px;
    line-height: 16px; /* 133.333% */
  }
`;

export const SelectContainer = styled.div`
  position: relative;
  color: rgb(15, 0, 0);
`;

export const SelectedOption = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;

  font-size: 16px;
  line-height: 24px;
  padding: 12px 2px 12px 8px;

  svg {
    width: 12px;
    height: 12px;
    transition: all 300ms ease;
    color: rgb(15, 0, 0);

    ${({ isopen }) => isopen && `transform: rotate(180deg)`}
  }
`;

export const OptionsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;

  list-style: none;
  background-color: #fff;
  z-index: 10;

  overflow: hidden;
  overflow-y: scroll;
  transition: all 300ms ease;
  max-height: ${p => (p.isopen ? '200px' : '0px')};
`;

export const Option = styled.li`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
