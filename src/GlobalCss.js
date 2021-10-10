import { createGlobalStyle } from 'styled-components';

export const GlobalCss = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

    *,
    ::before,
    ::after {
        outline: 0;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Montserrat', Calibri;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`