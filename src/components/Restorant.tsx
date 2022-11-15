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
            <StyledA href={mapSrc} target="_blank">
                <StyledImg src={imgSrc} alt={title} />
            </StyledA>
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

const StyledA= styled.a`
    transition: all 0.3s;
    &:hover{
        transform: scale(1.05);
        overflow: hidden;
        transition: all 0.3s;
    }
`;

const StyledImg = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
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