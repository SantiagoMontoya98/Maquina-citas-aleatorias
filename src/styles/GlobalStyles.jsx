import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`  

  html{
    overflow-x: hidden;
  }

  *,
  *::before,
  *::after{
    box-sizing: border-box;
  }

  body{
    margin: 0;
    overflow-x: hidden;
  }

  .quote-icon{
    font-size: 28px;
    transition: all 2s ease;    
  }

  .link-icons{
    color: white;
    font-size: 16px;
  }

`;

export default GlobalStyles;