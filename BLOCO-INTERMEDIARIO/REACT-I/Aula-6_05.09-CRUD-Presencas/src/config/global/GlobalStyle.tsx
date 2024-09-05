import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Poppins", sans-serif;
        background-color: #ffff;
        color: #000;
    }

    a {
        text-decoration: none;
    }

     table {
        font-size: 1.2rem;
    }

`;
