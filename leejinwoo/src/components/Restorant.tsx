import React from 'react';
import styled from 'styled-components';

interface Props {
    title: string;
    address: string;
    review: string;
    imgSrc: string;
    mapSrc: string;

}


const Restrorant = ({title, review, address, imgSrc, mapSrc}: Props) => {
    return(
        <Styledsection>
            <StyledTle>
                <StyledA href={mapSrc} target="_blank">
                    <StyledImg src={imgSrc} alt={title} />
                </StyledA>
            </StyledTle>
            <StyledDiv>
                <StyledH2>{title}</StyledH2>
                <StyledAddress>{address}</StyledAddress>
                <StyledP>{review}</StyledP>
            </StyledDiv>
            
        </Styledsection>
    );
}

export default Restrorant;

const Styledsection = styled.section`
    background-color: #FFD57E;

    width: 300px;
    height: 450px;

    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const StyledTle = styled.div`
    width: 300px;
    height: 300px;

    overflow: hidden;
`;

const StyledA= styled.a`
    background-color: #FFD57E;;
`;

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;


    transition: all 0.7s;
    &:hover{
        transform: scale(1.3);

    }
`;

const StyledDiv = styled.div`
padding: 10px;
`;

const StyledH2 = styled.h2`
    color: #AC4B1C;
`;

const StyledAddress = styled.span`
    color: #FCA652;
`;

const StyledP = styled.p`
    color: #AC4B1C;
`;