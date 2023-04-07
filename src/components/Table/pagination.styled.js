import styled from 'styled-components';

export const PaginationContainer = styled.div`
  displayy: flex;
  margin-top: 30px;
`;
export const PaginationItem = styled.button`
  width: 26px;
  height: 24px;
  margin: 0px 6px;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: -0.01em;
  color: ${({ active }) => (active === true ? '#ffffff' : '#404b52')};
  background-color: ${({ active }) =>
    active === true ? '#5932EA' : '#f5f5f5'};
  border-radius: 4px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${({ active }) =>
      active === true ? '#5932ea' : 'lightgrey'};
  }
`;
export const PaginationDots = styled.span`
  margin: 0px 6px;
`;
