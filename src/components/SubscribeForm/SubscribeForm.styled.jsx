import styled from '@emotion/styled';

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormText = styled.p`
  color: white;
  margin-bottom: 25px;
  margin-top: 0;
`;

export const SubForm = styled.form`
  position: relative;
`;

export const FormInput = styled.input`
  background-color: black;
  outline: none;
  border-bottom: 1px solid white;
  padding: 5px;
  width: 330px;
`;

export const FormLabel = styled.label``;
export const FormButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
`;
