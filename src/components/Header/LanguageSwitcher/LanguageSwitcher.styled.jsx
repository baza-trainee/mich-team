import styled from '@emotion/styled';

export const LanguageWrapper = styled.div`
  position: relative;
  color: inherit;
  display: flex;
  padding: 6px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  &:hover {
    svg {
      stroke: ${({ showDropdown }) => (showDropdown ? '' : '#fefefe')};
    }
    background-color: ${({ backgroundcolorlanghover }) =>
      backgroundcolorlanghover};
    color: ${({ textcolorlanghover }) =>
      textcolorlanghover ? textcolorlanghover : ''};
  }
  @media screen and (min-width: 768px) {
    padding: 16px;
    border-radius: 40px;
  }
`;

export const LanguageList = styled.ul`
  position: absolute;
  top: 70%;
  left: 6px;
  color: inherit;
  @media screen and (min-width: 768px) {
    left: 16px;
  }
`;

export const LanguageItem = styled.li`
  color: inherit;
  font-family: Play;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const LanguageSwitcherBtn = styled.button`
  color: inherit;
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
  svg {
    width: 16px;
    height: 16px;
    stroke: ${({ arrowcolor }) => arrowcolor};
    transition: transform 0.3s ease;
  }
`;

export const getStyledIcon = component => styled(component)``;
