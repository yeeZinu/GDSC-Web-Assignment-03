import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0px;
    padding:0px;
    font-family: NanumPen;
   
}
html,body{
    background-color: #eff3f7;
    padding: 10px;
    word-break: keep-all;
}
a{
    all:unset;
}
@font-face {
    font-family: NanumPen;
    src: url(https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&family=Noto+Sans+KR:wght@100;300;400&display=swap);
}

`;

export default GlobalStyle;
