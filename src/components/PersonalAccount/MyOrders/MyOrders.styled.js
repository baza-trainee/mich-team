import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const List = styled(motion.ul)`
  overflow: hidden;

  @media screen and (min-width: 768px) {
    margin-top: 24px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: ${({ isopen }) => (isopen ? '1000px' : '0')};
  overflow: hidden;
  transition: max-height 300ms linear;

  @media screen and (min-width: 1440px) {
    padding-right: 8px;
    padding-left: 8px;
    max-height: ${({ isopen }) => (isopen ? '500px' : '0')};
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    padding: 8px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  padding: 16px 0;
`;

export const TextPreview = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;

export const Item = styled.li`
  padding: ${p => (p.isopen ? '24px 8px' : '8px')};
  background-color: rgba(179, 179, 179, 0.05);
  border-bottom: 1px solid rgb(179, 179, 179);
  border-top: 1px solid rgb(179, 179, 179);

  position: relative;
  transition: padding 300ms linear;
`;

export const Button = styled.button`
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;

  svg {
    width: 18px;
    height: 18px;
    transition: all 300ms linear;
    transform: ${p => (!p.isopen ? 'rotate(0deg)' : 'rotate(180deg)')};
  }

  @media screen and (min-width: 1440px) {
    top: 14px;
    right: 16px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const Block = styled.div`
  display: flex;
  gap: 13px;
  padding-top: 16px;
`;

export const ImageStyle = styled.img`
  width: 80px;
  height: 80px;
`;

export const InfoStyle = styled.div`
  padding: 4px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;

  a {
    cursor: pointer;
    color: #0f0000;
  }
`;

export const TextInfo = styled.p`
  display: flex;
  justify-content: space-between;
`;

export const Total = styled.p`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  font-weight: 700;
  background: rgba(239, 239, 239, 1);
`;

export const Delivery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const SelectionPoint = styled.div`
  width: 195px;
  h3 {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    line-height: 120%;
  }
`;
