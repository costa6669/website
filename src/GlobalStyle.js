import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'BlackDahlia';
    src: url('${process.env.PUBLIC_URL}/blackDahlia.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
