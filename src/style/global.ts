import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0; 
        font-family: 'Poppins', sans-serif
    }

    #content{
        margin: 0 auto;
        width: 1200px;
    }
`;

export default GlobalStyle;
