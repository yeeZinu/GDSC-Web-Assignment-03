import React from 'react';
import Store from './components/Store';
import GlobalStyle from './GlobalStyle';
import { Fragment } from 'react';
import Store1Img from './Store1.jpg';
import Store2Img from './Store2.jpg';
import Store3Img from './Store3.jpg';
import Store4Img from './Store4.jpg';
function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <h1>나만의 맛집 소개</h1>
      <Store
        name="바스버거"
        address="서울특별시 중구 무교동 11 광일빌딩 지하 1층"
        imgSrc={Store1Img}
        mainfood="바스버거,더블베이컨치즈버거"
        imgAlt="햄버거최고"
      />
      <Store
        name="탭퍼블릭"
        address="서울특별시 종로구 청진동 종로 33"
        imgSrc={Store2Img}
        mainfood="다양한맥주,햄버거랑 먹으면 맛있음"
        imgAlt="맥주와 햄버거"
      ></Store>
      <Store
        name="임진냄비갈비"
        address="경기도 파주시 문화로 45"
        imgSrc={Store3Img}
        mainfood="냄비갈비 졸여서먹으면 최고임.."
        imgAlt="냄비갈비"
      ></Store>
      <Store
        name="피자스토어"
        address="경기도 파주시 탄현면 헤이리마을길 63"
        imgSrc={Store4Img}
        mainfood="여러 피자들 양이 아쉽지만 맛있음!"
        imgAlt="피자사진"
      ></Store>
    </Fragment>
  );
}

export default App;
