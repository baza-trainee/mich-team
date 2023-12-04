import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const FormContainer = styled.form`
  margin: 0 auto;
  width: 39.25rem;
  height: 34.5rem;
  padding: 0rem 3.375rem;
  background-color: #fafafa;

  @media screen and (max-width: 768px) {
    padding: 0rem;
    width: 20.5rem;
  }
`;
export const EnterInput = styled.input`
  min-width: 360px;
  width: 100%;
  max-width: 1440px;
  padding: 0.5rem;
  margin: 0 0 1.5rem 0;
  background-color: #fafafa;
  border-bottom: 1px solid #000;

   :focus{
    outline: none;
  }
  :hover::placeholder{
    font-size: 0.7rem;
    color: #000;
  }


  @media screen and (max-width: 768px) {
    min-width: 20.44rem;
  }
`;

export const EyeIcon = styled.img`
  position: relative;
  top: -3rem;
  left: 30rem;
  width: 1.4rem;
  opacity: 0.7;
  @media screen and (max-width: 768px) {
    left: 18.5rem;
  }
`

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
    cursor: pointer;
  }
  p {
    font-weight: 700;
    cursor: pointer;
  }
`;
export const ButtonEnter = styled.button`
  border: 1px solid #110003;
  border-radius: 0.25rem;
  background: #110003;
  color: #fdfdfd;
  text-align: center;
  margin: 1.5rem 0;
  padding: 1rem 2.25rem;
  height: 3.5rem;
  width: 100%;
  font-size: 1.375rem;
  font-weight: 700;
  text-transform: uppercase;
  :hover {
    background-color: #fdfdfd;
    color: #110003;
  }
`;
export const LinesDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    margin: 0 0.38rem;
    color: #b3b3b3;
  }
`;
export const LineHr = styled.hr`
  width: 15.6875rem;
  border-top: 1px solid #b3b3b3;
`;
export const RegisterDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1.5rem 0;
  @media screen and (max-width: 768px) {
    p {
      margin-bottom: 1.12rem;
    }
  }
`;
export const RegisterLink = styled(NavLink)`
  font-weight: 700;
  margin-left: 1.12rem;
  color: #000;
  text-decoration: underline;
  cursor: pointer;
`;
