import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        overflow-x: hidden;
    }
    body {
        font-family: 'Bebas Neue', cursive;
        overflow-x: hidden;
        color: #3d2514;
    }
    p {
        font-size: 15px;
        font-weight: normal;
        font-family: 'Montserrat', sans-serif;
    }
    h3 {
        font-size: 38px;
        font-weight: normal;
    }
`;

export default GlobalStyles;
