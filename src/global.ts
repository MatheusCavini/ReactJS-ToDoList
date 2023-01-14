import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: "Roboto", Arial;
    }

    html{
        height:100vh;
    }

    body{
        display: flex;
        flex-direction: row;
        height: 100vh;
    }
`;