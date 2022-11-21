import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    /*
    컴포넌트가 위치할 body가 50%의 너비를 갖도록 테마를 줌
    */
   
    div{
        margin:0 auto;
        padding:0;
        box-sizing: border-box;
        font-family:'Arial, sans-serif';
        display:grid;
        grid-template-columns: 1fr 1fr 1fr 1fr; 
        width:60%;
        gap:5px 5px;
        background-color: #393E46;
        border-radius:2%;
    }
    div > h1{
        grid-column-start:1;
        grid-column-end:5;
        color:#fff;
        text-align: center;
    }
    
    
`;

export default GlobalStyle;
