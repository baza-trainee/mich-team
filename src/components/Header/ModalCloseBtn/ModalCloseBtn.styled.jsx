import styled from '@emotion/styled';

export const ModalCloseButton = styled.button`
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

export const getStyledIcon = (component, width, height, stroke) => styled(
  component
)`
  width: ${width};
  height: ${height};
  stroke: ${stroke};
`;
