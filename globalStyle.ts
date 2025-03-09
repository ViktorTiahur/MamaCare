import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

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
    font-family: Arial, sans-serif;
    background-color: #f8f8f8;
    /* color: #333; */
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
