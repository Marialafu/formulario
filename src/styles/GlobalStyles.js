import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    *,
    *::after,
    *::before {
    box-sizing: border-box;
    }
    html {
    scroll-behavior: smooth;
    }

    img {
    display: block;
    max-width: 100%;
    }

    a {
    text-decoration: none;
    color: inherit;
    }

    nav ul {
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    }

    body {
    margin: 3.125rem;
    font-family: sans-serif;
    background-color: #E0F1E8;
    display: inline;
    }

`;

const StyledContainer = styled.div`
    background-color: white;
    border-radius: 1rem;
    padding: 2.5rem;
    width: 343px;
    margin-inline: auto;
`

export {GlobalStyles, StyledContainer}