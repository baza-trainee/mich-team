import styled from '@emotion/styled';
export const ScrollBar = styled.div`
  width: 100%;
  height: 400px;
  overflow-y: auto;
  border: 1px solid #ccc;

  /* Style the scrollbar track */
  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  /* Style the scrollbar handle */
  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
  }

  /* Change scrollbar on hover */
  &:hover::-webkit-scrollbar-thumb {
    background: #555;
  }
`;
