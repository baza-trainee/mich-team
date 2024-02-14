import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const ButtonCheck = styled.button`
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  height: 30px;
  padding-right: 12px;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 8px;

  svg {
    width: 24px;
    height: 24px;
  }
`;
export const Text = styled.p`
  font-weight: 700;
`;
