import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    body {
        background-color: orange;
        padding: 5px;
        text-align: center;
    }

    section {
        width: 100%;
        background-color: #dedede;
        padding: 5%;
        border-radius: 5px;
        outline: solid 4px blue;
    }
`

export default GlobalStyle;