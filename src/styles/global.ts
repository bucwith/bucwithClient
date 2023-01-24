import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./theme";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    @font-face {
      font-family: 'Noto-sans';
      src: url('../assets/images/font/NotoSansKR-Regular.otf');
      unicode-range: 'U+AC00-D7A3';
    } 
    
    @font-face {
      font-family: 'Roboto';
      src: url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,900&display=swap');
      unicode-range: 'U+26', 'U+0041-005A','U+0061-007A','U+0020-002F', 'U+003A-0040', 'U+005B-0060', 'U+007B-007E';
    } 
    html {
        font-size: 62.5%;
        color: ${theme.colors.mainColor};
        font-family: 'Noto-sans', 'Roboto', sans-serif;
        background-color: ${theme.colors.bgColor};
    }
    * {
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    input, button{
        font-family: inherit;
        font-size: inherit;
    }
    input{
        background-color: ${theme.colors.inputColor};
    }
    button{
        cursor: pointer;
        border: 0rem;
        background-color: inherit;
        width: 100%;
    }
    img{
        vertical-align: top;
    }

`;
