import React from "react";
import styled from "styled-components";

import Header from "./component/Header";
import Store from "./component/Store";

function App() {
  return (
    <body>
      <StyledBody>
        <Header></Header>
        <Store
          title="황소곱창"
          link="http://www.naver.com"
          description="서울 서대문구 연세로9길 31"
          imgSrc1="./Restaurant/1/exterior.jpg"
          imgSrc2="./Restaurant/1/food.jpg"
          menu="생 모듬"
          price="45,000"
          
        />
        <Store
          title="강원 막국수"
          link="http://www.naver.com"
          description="경기 김포시 고촌읍 전호로 68"
          imgSrc1="./Restaurant/2/exterior.jpg"
          imgSrc2="./Restaurant/2/food.png"
          menu="물막국수"
          price="9,000"
          
        />
      </StyledBody>
    </body>
  );
}

const StyledBody = styled.body`
  margin: 0;
  padding: 30px;
  box-sizing: border-box;
  background-color: #f3dbc3;
  border-radius: 30px;
  display: flex;
  justify-content:center;
`;

export default App;
