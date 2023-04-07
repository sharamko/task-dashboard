import styled from 'styled-components';

export const TdTag = styled.td`
  justify-content: ${({ txtAlign }) =>
    txtAlign === 'Active' || txtAlign === 'Inactive' ? 'center' : ''};
  padding: 24px
    ${({ txtAlign }) =>
      txtAlign === 'Active' || txtAlign === 'Inactive' ? '0px' : '5px'};
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: #292d32;
  text-align: ${({ txtAlign }) =>
    txtAlign === 'Active' || txtAlign === 'Inactive' ? 'center' : 'left'};
  border-bottom: 1px solid #eeeeee;
  @media (max-width: 1436px) {
    font-size: 13px;
    line-height: 18px;
    padding: 18px
      ${({ txtAlign }) =>
        txtAlign === 'Active' || txtAlign === 'Inactive' ? '0px' : '5px'};
  }
  @media (max-width: 1200px) {
    font-size: 12px;
    line-height: 16px;
    padding: 10px
      ${({ txtAlign }) =>
        txtAlign === 'Active' || txtAlign === 'Inactive' ? '0px' : '3px'};
  }
  @media (max-width: 864px) {
    font-size: 10px;
    line-height: 14px;
    padding: 8px
      ${({ txtAlign }) =>
        txtAlign === 'Active' || txtAlign === 'Inactive' ? '0px' : '3px'};
  }
`;
export const StatusLabel = styled.div`
  width: 80px;
  height: 29px;
  padding: 4px 0px;
  border-radius: 4px;
  border: 1px solid
    ${({ active }) => (active === 'Active' ? '#00B087' : '#DF0404')};
  color: ${({ active }) => (active === 'Active' ? '#008767' : '#DF0404')};
  background-color: ${({ active }) =>
    active === 'Active' ? 'rgba(22, 192, 152, 0.38)' : '#FFC5C5'};
  transform: translateX(2px);
  margin: ${({ active }) =>
    active === 'Active' || active === 'Inactive' ? '0px auto' : '0px'};
  @media (max-width: 1200px) {
    width: 68px;
    height: 24px;
  }
  @media (max-width: 450px) {
    width: 50px;
    height: 20px;
    padding: 3px 0px;
  }
`;
