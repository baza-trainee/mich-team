import styled from '@emotion/styled';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 16px;
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  transition: gap 500ms ease;
  gap: ${p => (p.status ? '24px' : '0')};
`;

export const WrapInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FlexStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;
