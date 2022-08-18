import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
     *,*::before, *::after {
        margin: 0;
        padding: 0;
    }
    
    body {
    font-family: "Encode Sans Condensed";
    overflow-x: hidden;

    @media screen and (max-width: 800px) {
    }
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
    }

    a {
    text-decoration: none;
    color: inherit;
    }

    * {
    box-sizing: border-box;
    }

`