import styled from '@emotion/styled';

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3px;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    margin-top: 24px;
    display: flex;
    align-items: flex-start;
    margin-bottom: 44px;
  }
`;

export const FormText = styled.p`
  color: #fff;
  text-align: center;
  font-family: Play;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const SubForm = styled.form`
  position: relative;
`;

export const FormInput = styled.input`
  background: var(--Black, #110003);
  color: var(--Wtite, #fdfdfd);
  font-family: Play;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  outline: none;
  border-bottom: 1px solid var(--Wtite, #fdfdfd);
  padding: 4px 8px;
  width: 328px;
  box-sizing: border-box;
  &::placeholder {
    color: var(--Wtite, #fdfdfd);
    font-family: Play;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
  @media screen and (min-width: 768px) {
    width: 704px;
  }
  @media screen and (min-width: 1440px){
    width:300px;
  }
`;

export const FormLabel = styled.label``;
export const FormButton = styled.button`
  outline: none;
  padding: 0;
  width: 24px;
  height: 24px;
  background: var(--Black, #110003);
  position: absolute;
  right: 8px;
  top: 4px;
`;
