import styled from '@emotion/styled';

export const LanguageWrapper = styled.div`
  position: relative;
  color: #fefefe;
  display: flex;
  padding: 6px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
  @media screen and (min-width: 768px) {
    color: green;
    padding: 16px;
    border-radius: 40px;
  }
`;

export const LanguageList = styled.ul`
  position: absolute;
  top: 80%;
  left: 6px;
  color: #fefefe;
  @media screen and (min-width: 768px) {
    color: green;
    left: 16px;
    top: 70%;
  }
`;

export const LanguageItem = styled.li`
  color: #fefefe;
  font-family: Play;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const LanguageSwitcherBtn = styled.button`
  color: #fefefe;
  display: flex;
  gap: 4px;
  align-items: center;
  border-radius: 20px;
  font-family: Play;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background-color: transparent;
  justify-self: center;
  align-self: center;
`;

export const getStyledIcon = component => styled(component)`
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease;
`;
