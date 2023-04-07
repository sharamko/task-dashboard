import styled from 'styled-components';

export const MainContainer = styled.div`
  min-height: 100vh;
  flex-grow: 1;
  padding: 41px 95px 41px 71px;
  @media (max-width: 1436px) {
    padding: 41px 71px;
  }
  @media (max-width: 1200px) {
    padding: 20px;
  }
  @media (max-width: 460px) {
    padding: 20px 0px;
  }
`;
export const BurgerBtn = styled.div`
  position: absolute;
  display: none;
  top: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
  background-image: url(/img/hamburger-button.png);
  background-position: center center;
  background-size: 40px 40px;
  background-repeat: no-repeat;
  cursor: pointer;

  @media (max-width: 1200px) {
    display: block;
  }
`;
export const Fog = styled.div`
  position: fixed;
  display: ${({ menu }) => (menu ? '' : 'none')};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
