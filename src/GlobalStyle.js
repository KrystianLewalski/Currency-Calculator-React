import { createGlobalStyle } from "styled-components";
import background from "./images/money.png";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    background-image: url("${background}");
    background-position: center;
    background-size: cover;
  }
  
  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    display: flex;
    justify-content: center;
    font-family: "Lato", sans-serif;
    min-height: 100vh;
  }
`;