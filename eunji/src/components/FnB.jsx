import styled from 'styled-components';

interface Props {
    name: String;
    location: String;
    img: String;
    menu: String;
    review: String;
}

const FnB = ({ name, location, img, menu, review }: Props) => {
    return(
        <StyledDiv>
            <StyledH2><StyledA href={review}>{name}</StyledA></StyledH2>
            <StyledP>{location}</StyledP>
            <Styledimg src={img} alt={name} />
            <StyledP>{menu}</StyledP>
        </StyledDiv>
    )
}

export default FnB;

const StyledDiv = styled.div`
width: 400px;
height: 380px;
padding: 10px 20px;
margin-bottom: 50px;

background-color: pink;
color: black;
border-radius: 10px;

display: inline-block;
`;

const StyledH2 = styled.h2`
text-align: center;
`;

const StyledP = styled.p`
text-align: center;
font-size: 16px;
`;

const Styledimg = styled.img`
width: 100%;
height: 60%;
`;

const StyledA = styled.a`
text-decoration: none;
color: black;
`;