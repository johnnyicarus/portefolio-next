import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'Source Sans Pro', sans-serif;
        background-color: skyblue;
    }
`;

export default GlobalStyle;