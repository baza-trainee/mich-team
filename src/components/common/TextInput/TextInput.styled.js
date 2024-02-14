import styled from '@emotion/styled';

export const DivStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 50px;

  &:hover > label,
  &:focus > label {
    top: -6px;
    font-size: 12px;
    line-height: 16px; /* 133.333% */
  }
`;

export const LabelStyle = styled.label`
  position: absolute;
  top: ${p => (p.lengthValue ? '-6px' : '12px')};
  left: 12px;

  font-size: ${p => (p.lengthValue ? '12px' : '16px')};
  line-height: ${p => (p.lengthValue ? '16px' : '24px')};
  letter-spacing: 0.5px;
  color: rgba(135, 135, 135, 1);
  transition: all 300ms ease;
`;

export const InputStyled = styled.input`
  padding: 12px 8px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(76, 76, 76);

  &:focus + label {
    top: -6px;
    font-size: 12px;
    line-height: 16px;
  }
`;
