import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        background-color: black;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 16px;                           /*  For inside of email and signin button */

        -webkit-font-smoothing: antialiased;    /* Smooth look on certain browsers */
        -moz-osx-font-smoothing: grayscale;
    }
`;
