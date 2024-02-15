import styled from '@emotion/styled';

export const FormStyled = styled.form`
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 16px;
  }
`;

export const WrapperTitle = styled.div`
  display: none;
  margin-bottom: 16px;
  background: #fff;

  @media screen and (min-width: 768px) {
    display: block;
    margin-bottom: 0;
    position: sticky;
    top: 0;
    z-index: 4;
  }
`;

export const Title = styled.h2`
  padding: 20px 8px;

  color: #000;
  font-size: 18px;
  line-height: 120%; /* 21.6px */
  font-weight: 700;

  border-bottom: 1px solid #d9d9d9;
  background-color: rgba(179, 179, 179, 0.05);
`;
