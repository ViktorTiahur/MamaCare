import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}


  @font-face {
    font-family: 'Roboto';
    src:
      url('/fonts/Roboto-Light.woff2') format('woff2'),
      url('/fonts/Roboto-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

    @font-face {
    font-family: 'Roboto';
    src:
      url('/fonts/Roboto-Medium.woff2') format('woff2'),
      url('/fonts/Roboto-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

    @font-face {
    font-family: 'Roboto';
    src:
      url('/fonts/Roboto-Regular.woff2') format('woff2'),
      url('/fonts/Roboto-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }



  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    /* width: 100%;
    height: 100%; */
    max-width: 100%;
    max-height: 100%;
    font-family: 'Roboto', sans-serif;
    background-color: #f8f8f8;
    color: #1A1A1A;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
