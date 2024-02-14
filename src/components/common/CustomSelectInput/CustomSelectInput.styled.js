import styled from '@emotion/styled';

export const DivStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  label {
    cursor: pointer;
    position: absolute;
    top: ${p => (p.lengthValue ? '-6px' : '12px')};
    left: ${p => (p.lengthValue ? '6px' : '12px')};

    font-size: ${p => (p.lengthValue ? '12px' : '16px')};
    line-height: ${p => (p.lengthValue ? '16px' : '24px')};
    letter-spacing: 0.5px;
    color: rgba(135, 135, 135, 1);
    transition: all 300ms ease;
  }
`;

export const SelectedOption = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 10px;

  font-size: 16px;
  line-height: 24px;
  padding: 16px 0 12px 8px;
  border-bottom: 1px solid rgb(76, 76, 76);

  svg {
    width: 18px;
    height: 18px;
    transition: all 300ms ease;
    color: rgb(15, 0, 0);

    ${({ isopen }) => isopen && `transform: rotate(180deg)`}
  }
  & div {
    height: 24px;
  }
`;

export const OptionsList = styled.ul`
  width: 100%;
  max-height: 0px;

  list-style: none;
  background-color: #fff;

  overflow: hidden;
  overflow-y: scroll;
  transition: all 300ms ease;
  max-height: ${p => (p.isopen ? '200px' : '0px')};
  opacity: ${p => (p.isopen ? '1' : '0')};

  border-left: 1px solid rgba(15, 0, 0, 0.5);
  border-bottom: 1px solid rgba(15, 0, 0, 0.5);
  border-right: 1px solid rgba(15, 0, 0, 0.5);
`;

export const Option = styled.li`
  cursor: pointer;
  padding: 2px 0 2px 8px;
  transition: background-color 300ms ease;

  &:hover,
  &:focus {
    background-color: #f0f0f0;
  }
`;

export const SelectContainer = styled.div`
  position: relative;
  /* margin-right: 6px; */
  color: rgb(15, 0, 0);
  width: 100%;
`;
