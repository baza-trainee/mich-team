import styled from '@emotion/styled';

export const StyledMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 16px;

  background: #fdfdfd;
  color: #0f0000;

  height: 100vh;
  width: 310px;

  transform: ${({ open }) => (open ? 'translateX(-100%)' : 'translateX(0)')};
  overflow: hidden;
  transition: transform 0.4s ease-in-out;

  @media screen and (min-width: 768px) {
    padding: 16px 24px;
    width: 355px;
  }
  @media screen and (min-width: 1440px) {
    width: 390px;
    padding: 16px 32px;
  }
`;

export const MenuButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 36px;
  width: 100%;
  margin-bottom: 80px;

  color: #0f0000;
  background-color: #fdfdfd;

  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
  }
`;

export const ModalCloseBtn = styled.button`
  display: flex;
  padding: 6px;
  align-items: center;
  border-radius: 20px;
  background-color: transparent;
  svg {
    stroke: #0f0000;
    transition: stroke 0.2s ease;
    width: 24px;
    height: 24px;
  }
  &:hover {
    svg {
      stroke: #fefefe;
    }
    background-color: rgba(0, 0, 0, 0.6);
  }
  @media screen and (min-width: 1440px) {
    padding: 16px;
    border-radius: 40px;
  }
`;

export const Instagram = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #0f0000;
  font-family: Play;
  font-size: 24px;
  font-weight: 400;
  line-height: 120%;
  font-style: normal;

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }

  svg {
    width: 24px;
    height: 24px;
    @media screen and (min-width: 1440px) {
      width: 32px;
      height: 32px;
    }
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-bottom: auto;

  @media screen and (min-width: 1440px) {
    gap: 100px;
  }
`;

export const AuthorizationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
`;

export const AuthorizationLink = styled.a`
  position: relative;
  display: inline-block;
  overflow: hidden;
  text-decoration: none;
  color: #0f0000;
  font-family: Play;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 1px;
    background-color: #0f0000;
    transition:
      width 0.3s ease,
      right 0.3s ease;
  }
  &:hover::after {
    width: 100%;
    right: initial;
    left: 0;
  }
  &.active {
    background-color: transparent;
    color: #0f0000;
    &:hover {
      color: #0f0000;
    }
  }
`;

export const SubscribeWrapper = styled.div`
  margin-bottom: 80px;
  @media screen and (min-width: 768px) {
    margin-bottom: 110px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 50px;
  }
`;

export const getStyledIconOpen = component => styled(component)`
  width: 24px;
  height: 24px;
  fill: #fdfdfd;
`;

export const getStyledIcon = component => styled(component)``;
