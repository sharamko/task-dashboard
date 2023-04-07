import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #FAFBFF;
  }

  
  
  
  input::-webkit-input-placeholder {
    font-size: 12px;
  }
  input:focus::-webkit-input-placeholder {
  color: transparent;
  }
  input:-moz-placeholder {
  font-size: 12px;
  }
  input:focus:-moz-placeholder {
  color: transparent;
  }
  input::-moz-placeholder {
  font-size: 12px;
  }
  input:focus::-moz-placeholder {
  color: transparent;
  }
  input:-ms-input-placeholder {
  font-size: 12px;
  }
  input:focus:-ms-input-placeholder {
  color: transparent;
  }
  
`;
