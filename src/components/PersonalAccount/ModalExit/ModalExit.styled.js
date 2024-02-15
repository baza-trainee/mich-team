import styled from '@emotion/styled';
import { ReactComponent as LogoutIcon } from '../../../icons/personal-icon/logout.svg';

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: white;
  padding: 32px 24px 54px;

  @media screen and (min-width: 768px) {
    width: 360px;
    height: 346px;
    border-radius: 4px;

    top: 200px;
    left: calc(50% - 180px);
  }
`;

export const Icon = styled(LogoutIcon)`
  display: block;
  margin-inline: auto;
  width: 32px;
  height: 32px;
`;

export const Title = styled.h4`
  font-size: 18px;
  font-weight: 700;
  line-height: 120%;
  text-transform: uppercase;
  text-align: center;
  margin-top: 16px;
`;

export const Text = styled.p`
  text-align: center;
  margin-top: 24px;
`;

export const WrapperBtn = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;
