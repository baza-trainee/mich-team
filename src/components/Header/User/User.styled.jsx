import styled from '@emotion/styled';

export const UserWrapper = styled.div`
  position: relative;
  color: #fefefe;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserBtn = styled.button`
  color: #fefefe;
  display: flex;
  align-items: center;
  background-color: transparent;
  justify-self: center;
  align-self: center;
  padding: 6px;
  border-radius: 20px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
  @media screen and (min-width: 768px) {
    padding: 16px;
    border-radius: 40px;
  }
`;

export const UserDropdown = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  top: 100%;
  right: 0;
  border-radius: 4px;
  background-color: #fdfdfd;
`;

export const UserLink = styled.a`
  display: flex;
  padding: 16px 12px;
  width: 100%;
  color: #0f0000;
  background-color: transparent;
  border-bottom: 1px solid #b3b3b3;
  &:last-of-type {
    border-bottom: none;
  }
`;

export const getStyledIcon = component => styled(component)`
  width: 24px;
  height: 24px;
`;
