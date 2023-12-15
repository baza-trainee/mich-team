import styled from '@emotion/styled';

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3px;
  width: 100%;
  max-width: 328px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    margin: 24px 0;
    max-width: 704px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: flex-start;
    max-width: 413px;
    margin: 0;
  }
`;

export const FormText = styled.p`
  color: inherit;
  text-align: center;
  font-family: Play;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  text-transform: uppercase;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const SubForm = styled.form`
  position: relative;
  width: 100%;
  max-width: 328px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    margin-right: 0;
    margin-left: 0;
    max-width: 704px;
  }
`;

export const FormInput = styled.input`
  background: transparent;
  color: inherit;
  font-family: Play;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  outline: none;
  border-bottom: 1px solid;
  padding: 4px 8px;
  width: 100%;
  box-sizing: border-box;
  &::placeholder {
    color: inherit;
    font-family: Play;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
`;

export const FormLabel = styled.label``;
export const FormButton = styled.button`
  outline: none;
  padding: 0;
  width: 24px;
  height: 24px;
  background: transparent;
  position: absolute;
  right: 8px;
  top: 4px;
`;

export const getStyledIcon = (component, stroke) => styled(component)`
  ${stroke};
`;
