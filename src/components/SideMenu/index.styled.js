import styled from 'styled-components';

export const SideMenuContainer = styled.aside`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 306px;
  height: 100vh;
  padding: 36px 28px 76px;
  background-color: #ffffff;
  z-index: 2;

  @media (max-width: 1200px) {
    position: fixed;
    overflow: scroll;
    transform: ${({ menu }) =>
      menu === true ? 'translateX(0px)' : 'translateX(-306px)'};
    transition: all 0.3s ease-in-out;
  }
`;
export const CloseMenuBtn = styled.div`
  position: absolute;
  display: none;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  background-image: url(/img/close.png);
  background-position: center center;
  background-size: 30px 30px;
  background-repeat: no-repeat;
  cursor: pointer;

  @media (max-width: 1200px) {
    display: block;
  }
`;
