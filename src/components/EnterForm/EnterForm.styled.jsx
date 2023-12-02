import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const FormContainer = styled.form`
  margin: 0 auto;
  width: 39.25rem;
  height: 34.5rem;
  padding: 0rem 3.375rem;
  background-color: #fafafa;

  button {
    height: 3.5rem;
    width: 100%;
    border-radius: 0.25rem;
    font-family: Play;
    font-size: 1.375rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
  }
`;

export const EnterInput = styled.input`
  min-width: 360px;
  width: 100%;
  max-width: 1440px;
  padding: 0.5rem;
  margin: 0 0 1.5rem 0;
  background-color: #fafafa;
  font-family: Play;
  border-bottom: 1px solid #000;
`;
export const CheckBoxDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Play;
  label {
    display: flex;
    align-items: center;
  }
  input {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 1rem;
  }
  p {
    font-weight: 700;
  }
`;
export const ButtonEnter = styled.button`
  border: 1px solid #110003;
  background: #110003;
  color: #fdfdfd;
  text-align: center;
  margin: 1.5rem 0;
  padding: 1rem 2.25rem;

`;
export const RegisterDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 1.5rem 0;
    font-family: Play;
`
export const RegisterLink = styled(NavLink)`
    font-weight:700;
    margin-left: 1.12rem;
    color: #000;
    text-decoration: underline;
`