import styled from 'styled-components';

export const TableContainer = styled.div`
  min-height: 789px;
  margin-top: 71px;
  background-color: white;
  border-radius: 30px;
  padding: 0px 44px 40px 33px;
  @media (max-width: 1436px) {
    min-height: 789;
  }
  @media (max-width: 1200px) {
    margin: 41px auto 0px;
    min-height: 616px;
  }
  @media (max-width: 864px) {
    padding: 0px 10px 40px;
  }
  @media (max-width: 370px) {
    padding: 0px 4px 20px;
  }
`;
export const TableTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 130px;
  padding: 0px 9px 0px 5px;
`;
export const TableBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 9px 0px 5px;
  @media (max-width: 864px) {
    flex-direction: column-reverse;
  }
`;
export const TableSearch = styled.input`
  width: 216px;
  height: 38px;
  padding: 0px 40px;
  background-color: #f9fbff;
  background-image: url(/img/search.png);
  background-position: 11px center;
  background-size: 24px 24px;
  background-repeat: no-repeat;
  border-radius: 10px;
  outline: none;
  border: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.01em;
  color: black;
  @media (max-width: 864px) {
    width: 160px;
  }
`;
export const TitleAllCustomers = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  letter-spacing: -0.01em;
  color: #000000;
  @media (max-width: 864px) {
    font-size: 18px;
    line-height: 24px;
  }
`;
export const TitleActiveCustomers = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: #16c098;
  @media (max-width: 864px) {
    font-size: 12px;
    line-height: 16px;
  }
`;
export const TableMain = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableDescription = styled.p`
  margin-top: 32px;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: #b5b7c0;
  @media (max-width: 1200px) {
    font-size: 12px;
    line-height: 18px;
  }
`;
