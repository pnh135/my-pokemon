import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "@kfonts/neodgm";

const GlobalStyle = createGlobalStyle`
    ${reset};

    body {
        font-family: 'Neo둥근모', 'NeoDunggeunmo', cursive;
        background-color: orange;
        padding: 5px;
        text-align: center;
    }

    section {
        width: 100%;
        background-color: #dedede;
        padding: 2%;
        border-radius: 5px;
        outline: solid 4px blue;
    }
`;

export default GlobalStyle;
