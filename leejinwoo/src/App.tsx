import './index.css';
import Restrorant from './components/Restorant';
import styled from 'styled-components';
import React from 'react';

function App() {

  return (
    <StyledMain>
      <StyledH1>솔직한 리뷰, 주관적인 입맛<br/>
					진우's 플레이트</StyledH1>
      <StyledArticle>
        <Restrorant 
          imgSrc='choma.png'
          mapSrc='https://map.naver.com/v5/search/%ED%99%8D%EB%8C%80%20%EC%B4%88%EB%A7%88/place/13575406?c=14128105.4238584,4516173.3008667,15,0,0,0,dh&isCorrectAnswer=true'
          title='홍대 초마'
          address='서울 마포구 와우산로 72'
          review='짬뽕의 불맛이 좋았고 담백하며 고소했음'
        />
        <Restrorant
          imgSrc='caden.png'
          mapSrc='https://map.naver.com/v5/entry/place/34393996?c=14128105.4238584,4516173.3008667,15,0,0,0,dh&isCorrectAnswer=true'
          title='우동 카덴'
          address='서울 마포구 양화로7안길 2-1'
          review='가다랑어 국물이 진해서 좋았음'
        />
        <Restrorant
          imgSrc='tantan.jpg'
          mapSrc='https://map.naver.com/v5/entry/place/37450208?c=14128105.4238584,4516173.3008667,15,0,0,0,dh&isCorrectAnswer=true'
          title='탄탄면공방 홍대본점'
          address='서울 마포구 잔다리로6길 25 재륜빌딩'
          review='탄탄면을 처음접하기에 야무진곳'
        />
        <Restrorant
          imgSrc='abiko.png'
          mapSrc='https://map.naver.com/v5/search/%EC%95%84%EB%B9%84%EA%BC%AC/place/31029187?c=14129909.2226232,4517267.9451924,15,0,0,0,dh&placePath=%3Fentry%253Dbmp'
          title='아비꼬 신촌점'
          address='서울 서대문구 명물길 58-8'
          review='카레는? 사랑이다~ 한무리필 우마이'
        />
        <Restrorant
          imgSrc='genroku.jpg'
          mapSrc='https://map.naver.com/v5/search/%EA%B2%90%EB%A1%9C%EC%BF%A0%EC%9A%B0%EB%8F%99/place/13475125?c=14127641.8688647,4515876.3079829,14.81,0,0,0,dh&placePath=%3Fentry%253Dbmp'
          title='겐로쿠우동 홍대점'
          address='서울 마포구 어울마당로 39'
          review='우동 원픽!면이 아주 쫄깃함 + 한무 리필 = 미침'
        />
        <Restrorant
          imgSrc=''
          mapSrc=''
          title=''
          address=''
          review='Comming Soon'
        />
      </StyledArticle>
    </StyledMain>
  );
}

export default App;

const StyledMain = styled.main`

`;

const StyledArticle = styled.article`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  flex-wrap: wrap;

  gap: 100px;

`;

const StyledH1 = styled.h1`
  text-align: center;

  margin:50px;
  
  background-color: #FFD57E;
  color: #AC4B1C;
`;