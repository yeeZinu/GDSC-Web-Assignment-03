import React from 'react';
import styled from 'styled-components';
import Store from './components/Store';

function App() {
    return (
        <>
            <Title>김재관 맛집 리스트</Title>
            <BackgroundDiv>
                <Store
                    title="헤키"
                    detail="#망원동_돈까스맛집 #웨이팅최소30분 #안심돈까스_기다릴만함"
                    address="서울특별시 마포구 망원동"
                    imgSrc="haekki.jpeg"
                    mapScr="https://goo.gl/maps/Dcud2rDbypYeTzse8"
                />
                <Store
                    title="축상"
                    detail="#서울대입구_분위기_맛집 #와인바 #예약필수"
                    address="서울특별시 관악구 봉천동 1601-15"
                    imgSrc="chooksang.jpeg"
                    mapScr="https://goo.gl/maps/PcEqKGri4yUJaAhH8"
                />
                <Store
                    title="신이내린떡볶이"
                    detail="#떡볶이_맛집 , 세트메뉴 추천"
                    address="서울특별시 동작구 노량진동"
                    imgSrc="sinaedduck.jpeg"
                    mapScr="https://goo.gl/maps/2r97zGg8ekvMz5qu9"
                />
                <Store
                    title="마라농장"
                    detail="숨겨진 마라탕 맛집 , 맛있게 매움, 2단계 추천"
                    address="서울특별시 마포구 망원동"
                    imgSrc="maranongjang.jpeg"
                    mapScr="https://goo.gl/maps/xEXyhPfhERfqxiYBA"
                />
            </BackgroundDiv>
        </>
    );
}

const BackgroundDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 1.25rem;
    align-items: center;
    flex-wrap: wrap;
`;
const Title = styled.h1`
    margin: 3.25rem 4rem;
`;

export default App;
