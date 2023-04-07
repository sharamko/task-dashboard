import styled from 'styled-components';

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  height: 46px;
  margin: 15px 0;
  padding: 0 14px 0 13px;
  border-radius: 8px;
  color: ${({ active }) => (active === true ? 'white' : '#9197b3')};
  background-color: ${({ active }) => (active === true ? '#5932ea' : '')};
  cursor: pointer;

  & svg {
    stroke: ${({ active }) => (active === true ? 'white' : '')};
  }

  &:hover,
  &:active {
    background-color: ${({ active }) =>
      active === true ? '#5932ea' : '#f4f6f7'};
  }
`;
export const NavTitle = styled.div`
  margin: 0px auto 0px 16px;
`;
