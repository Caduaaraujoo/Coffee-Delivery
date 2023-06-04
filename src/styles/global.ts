import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

     body{
        background-color: ${(props) => props.theme.background};
    }

    :focus{
        outline: 0;
    }

    h1{
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        font-size: 2.90rem;
        line-height: 130%;
        color: ${(props) => props.theme.base_title};
    }

    h2{
        font-family: 'Baloo 2', cursive;
        font-weight: 700;
        font-size: 1.2rem;
        line-height: 130%;
        color: ${(props) => props.theme.base_subtitle};
    }

    body, input, textarea, button, p{
        font-family: 'Roboto', sans-serif;
        color: ${(props) => props.theme.base_text};
    }
    p{
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
    }
    
    button {
        cursor: pointer !important;
    }

`
