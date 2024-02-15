import styled from '@emotion/styled';

export const Container = styled.section`
  padding: 16px 16px 48px;
  color: black;
  max-width: 360px;
  background-color: #fdfdfd;

  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 32px 32px 64px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;
