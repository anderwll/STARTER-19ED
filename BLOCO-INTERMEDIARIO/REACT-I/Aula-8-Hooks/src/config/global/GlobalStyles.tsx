import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Poppins", sans-serif;
        background-color: ${(props) => props.theme.backgroundColor};
        color: ${({ theme }) => theme.textColor};
    }

    a {
        text-decoration: none;
    }
`;
