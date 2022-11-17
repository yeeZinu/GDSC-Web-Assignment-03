import "./index.css";
import Nav from "./components/Nav";
import Store from "./components/Store";

import { useState } from "react";

//import하면 어떤 일이 일어날까? -> 번들링? 스타일 로더..?

function App() {
  //app 함수 호출 함수 컴포넌트?

  const [number, setNumber] = useState(0);

  return (
    <div>
      <Nav setter={setNumber} />
      {number === 0 && (
        <Store
          title="담소 소사골 순대육개장 "
          summary="사당점"
          imgSrc="damso.jpeg"
          grade="네이버 지도 평점: 4.28"
          grade2="카카오 지도 평점: 3.8"
          menuName0="담소 육개장"
          menuSrc0="육계장.png"
          price0="8,800원"
          menuName1="담소 순대국"
          menuSrc1="일반순대국.png"
          price1="7,500원"
          menuName2="소사골 돈 순대국"
          menuSrc2="소사골돈.png"
          price2="7,800원"
          menuName3="소사골 우 순대국"
          menuSrc3="소사골우.png"
          price3="7,800원"
        />
      )}
      {number === 1 && (
        <Store
          title="요란한 부엌"
          summary="사당역"
          imgSrc="요란한부엌.png"
          grade="네이버 지도 평점: 4.37"
          grade2="카카오 지도 평점: 3.8"
          menuName0="삼색 사시미"
          menuSrc0="삼색사시미.png"
          price0="68,000원"
          menuName1="간 고등어 구이"
          menuSrc1="간고등어구이.png"
          price1="9,500원"
          menuName2="토마토 홍합"
          menuSrc2="토마토홍합.png"
          price2="23,000원"
          menuName3="미니 오꼬노미야끼"
          menuSrc3="미니오꼬노미야끼.png"
          price3="8,000원"
        />
      )}
      {number === 2 && (
        <Store
          title="이가네 양꼬치 광명역점"
          summary="광명역"
          imgSrc="이가네.png"
          grade=""
          grade2="카카오 지도 평점: 4.4"
          menuName0="양갈비"
          menuSrc0="양갈비.png"
          price0="25,000원(250g)"
          menuName1="양 등심 꼬치"
          menuSrc1="양등심꼬치.png"
          price1="22,000원(250g)"
          menuName2="왕 양꼬치"
          menuSrc2="왕양꼬치.png"
          price2="17,000원(250g)"
          menuName3="온면"
          menuSrc3="온면.png"
          price3="7,000원"
        />
      )}
      {number === 3 && (
        <Store
          title="오무야"
          summary="역곡역"
          imgSrc="오무야.png"
          grade="네이버 지도 평점: 4.74"
          grade2="카카오 지도 평점: 4.1"
          menuName0="오무카레"
          menuSrc0="오무카레.png"
          price0="7,000원"
          menuName1="슈렉 바질 파스타"
          menuSrc1="슈렉바질파스타.png"
          price1="9,900원"
          menuName2="명란 듬뿍 파스타"
          menuSrc2="명란듬뿍파스타.png"
          price2="9,900원"
          menuName3="새우 투움바 파스타"
          menuSrc3="새우투움바파스타.png"
          price3="9,900원"
        />
      )}
    </div>
  );
}

// const StyledDiv = styled.div` //이렇게 밖에 선언하는 이유는 App이라는 컴포넌트가 많이 호출될 수 있기 때문에
//   background-color: green;
//   padding: 20px;
//   margin: 20px;
//   `;

//css인 js..? css 안에 js 변수를 넣을 수 있다.

export default App;

//! 반복되고 조금씩 다른 애들을 위해서 컴포넌트 라는게 있음
