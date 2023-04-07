import styled from 'styled-components';

export const Thead = styled.thead`
  width: 100%;
  border-bottom: 1px solid #eeeeee;
  @media (min-width: 864px) {
    &:after {
      position: relative;
      content: '';
      display: block;
      border-bottom: 1px solid #eeeeee;
      transform: translate3d(-38px, 1px, 0px);
    }
  }
`;
export const ThTag = styled.th`
  padding: 0px ${({ txtAlign }) => (txtAlign === 'status' ? '0px' : '5px')};
  font-weight: 500;
  text-align: ${({ txtAlign }) => (txtAlign === 'status' ? 'center' : 'left')};
  padding-bottom: 14px;
  width: ${({ txtAlign }) =>
    txtAlign === 'name'
      ? '146px'
      : txtAlign === 'company'
      ? '142px'
      : txtAlign === 'phone'
      ? '159px'
      : txtAlign === 'email'
      ? '233px'
      : txtAlign === 'country'
      ? '104px'
      : '106px'};
  @media (min-width: 864px) {
    &:after {
      position: relative;
      content: '';
      display: ${({ txtAlign }) => (txtAlign === 'status' ? 'block' : 'none')};
      border-bottom: 1px solid #eeeeee;
      transform: translate3d(44px, 15px, 0px);
    }
  }

  @media (max-width: 1436px) {
    width: ${({ txtAlign }) =>
      txtAlign === 'name'
        ? '107px'
        : txtAlign === 'company'
        ? '121px'
        : txtAlign === 'phone'
        ? '111px'
        : txtAlign === 'email'
        ? '198px'
        : txtAlign === 'country'
        ? '89px'
        : '95px'};
  }
  @media (max-width: 1200px) {
    font-size: 12px;
    line-height: 16px;
  }
  @media (max-width: 864px) {
    font-size: 10px;
    line-height: 14px;
    width: ${({ txtAlign }) =>
      txtAlign === 'name'
        ? '43px'
        : txtAlign === 'company'
        ? '59px'
        : txtAlign === 'phone'
        ? '40px'
        : txtAlign === 'email'
        ? '91px'
        : txtAlign === 'country'
        ? '49px'
        : '68px'};
  }
`;

export const TagTr = styled.tr`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: #b5b7c0;
`;
