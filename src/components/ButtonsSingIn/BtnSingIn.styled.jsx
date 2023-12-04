import styled from '@emotion/styled';

export const SingInGoogle = styled.button`
  color: #110003;
  border: 1px solid #b3b3b3;

  height: 3.5rem;
  width: 100%;
  border-radius: 0.25rem;
  font-family: Play;
  margin: 1.5rem 0;
  font-size: 1.375rem;
  font-weight: 700;
  background-color: #fff;
  cursor: pointer;
  text-transform: uppercase;
  padding: 1rem;
  display: grid;
  text-align: center;
  grid-template-columns: 0.1fr 1fr;

  :hover {
    box-shadow: 2px 4px 4px #b3b3b3;
  }
  :active {
    transform: translateY(2px);
  }

  @media screen and (max-width: 768px) {
  }
`;

export const SingInFacebook = styled.button`
  border: 1px solid #1877f2;
  color: #1877f2;

  height: 3.5rem;
  width: 100%;
  border-radius: 0.25rem;
  font-family: Play;
  font-size: 1.375rem;
  font-weight: 700;
  background-color: #fff;
  cursor: pointer;
  text-transform: uppercase;
  padding: 1rem;
  display: grid;
  text-align: center;
  grid-template-columns: 0.1fr 1fr;

  :hover {
    box-shadow: 2px 4px 4px #b3b3b3;
  }
  :active {
    transform: translateY(2px);
  }

  @media screen and (max-width: 768px) {
  }
`;
