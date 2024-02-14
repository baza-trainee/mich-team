import styled from '@emotion/styled';

import { ReactComponent as Container } from '../../../icons/personal-icon/container.svg';
import { ReactComponent as ContainerActive } from '../../../icons/personal-icon/container_active.svg';

export const RadioInputStyled = styled.input`
  &[type='radio'] {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;

export const LabelStyled = styled.label`
  position: relative;
  padding-left: 30px;

  font-size: 16px;
  line-height: 120%;
  font-weight: ${p => (p.checked ? '700' : '400')};
  transition: font-weight 300ms ease;
`;

export const Icon = styled(Container)`
  position: absolute;
  left: 2px;
  transition: opacity 300ms ease;
  opacity: ${p => (p.checked ? '0' : '1')};
`;

export const IconArrow = styled(ContainerActive)`
  position: absolute;
  left: 2px;
  transition: opacity 300ms ease;
  opacity: ${p => (!p.checked ? '0' : '1')};
`;
