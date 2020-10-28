import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        background-color: black;
        -webkit-font-smoothing: antialiased;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -moz-osx-font-smoothing: grayscale;
        color: #333333;
        font-size: 16px;
    }
`;
