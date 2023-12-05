import styled from '@emotion/styled';

export const SingInGoogle = styled.button`
  color: #110003;
  border: 1px solid #b3b3b3;

  height: 3.5rem;
  width: 100%;
  max-width:328px;
  border-radius: 0.25rem;
  font-family: Play;
  margin: 1.5rem auto;
  font-size: 18px;
  font-weight: 700;
  background-color: #fff;
  cursor: pointer;
  text-transform: uppercase;
  padding: 1rem;
  display: grid;
  text-align: center;
  align-content: center;
  align-items: center;
  grid-template-columns: 0.1fr 1fr;

  :hover {
    box-shadow: 2px 4px 4px #b3b3b3;
  }
  :active {
    transform: translateY(2px);
  }

  @media screen and (min-width: 768px) {
    max-width:523px;
    padding: 16px 36px;
    font-size: 22px;
    line-height: 1.4;
  }
`;

export const SingInFacebook = styled.button`
  border: 1px solid #1877f2;
  color: #1877f2;

  height: 3.5rem;
  width: 100%;
  max-width:328px;
  border-radius: 0.25rem;
  font-family: Play;
  font-size: 18px;
  
  font-weight: 700;
  background-color: #fff;
  cursor: pointer;
  margin: 1.5rem auto;
  text-transform: uppercase;
  padding: 1rem;
  display: grid;
  text-align: center;
  align-content: center;
  align-items: center;
  grid-template-columns: 0.1fr 1fr;

  :hover {
    box-shadow: 2px 4px 4px #b3b3b3;
  }
  :active {
    transform: translateY(2px);
  }

  @media screen and (min-width: 768px) {
    max-width:523px;
    padding: 16px 36px;
    font-size: 22px;
    line-height: 1.4;
  }
`;
