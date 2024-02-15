import styled from '@emotion/styled';

export const ListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;

  p {
    width: 268px;
  }
`;

export const ButtonDelete = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(163, 163, 163, 1);
  background: transparent;

  svg {
    width: 16px;
    height: 16px;
  }
`;
