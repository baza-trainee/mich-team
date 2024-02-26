export const ProductPlusMinus = styled.button`
  font-family: Play;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  display: flex;
  padding: 0;
  margin: 0;
  width: 17px;
  height: 17px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 50%;
  color: #fff;
  background: var(--gray-04, #878787);
  &:hover {
    background-color: #110003;
  }
`;

export const ProductCardCounterDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
  & button:not(:last-child) {
    margin-right: 10px;
  }
`;

export const ProductCardCounterText = styled.p`
  font-family: Play;
  color: #110003;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  margin-right: 10px;
`;