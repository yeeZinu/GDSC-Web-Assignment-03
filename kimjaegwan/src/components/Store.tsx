import React from 'react';
import styled from 'styled-components';

interface Props {
    title: string;
    detail: string;
    address: string;
    imgSrc: string;
    mapScr: string;
}
// 맛집 이름, 주소, 사진, 대표 메뉴 필수

const Store = ({ title, detail, address, imgSrc, mapScr }: Props) => {
    return (
        <StoreBox>
            <a href={mapScr}>
                <StoreImg src={imgSrc} alt={title} />
                <h2>{title}</h2>
                <p>{address}</p>
                <p style={{ paddingTop: '20px' }}>{detail}</p>
            </a>
        </StoreBox>
    );
};

const StoreBox = styled.div`
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
        0 8px 16px -8px rgba(0, 0, 0, 0.3),
        0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    background-color: white;
    padding: 10px;
    width: 300px;
    min-height: 430px;
    transition: all 0.3s;
    border-radius: 5px;
    &:hover {
        transform: translateY(-15px);
        box-shadow: 0 16px 43px -16px rgba(50, 50, 93, 0.25),
            0 12px 20px -17px rgba(0, 0, 0, 0.3),
            0 -8px 18px -12px rgba(0, 0, 0, 0.025);
    }
`;
const StoreImg = styled.img`
    box-shadow: 0 5px 5px -5px rgba(50, 50, 93, 0.25),
        0 8px 16px -8px rgba(0, 0, 0, 0.3),
        0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    width: 100%;
    height: 300px;
    object-fit: cover;
`;
export default Store;
