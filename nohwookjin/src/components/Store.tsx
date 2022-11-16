import styled from "styled-components";

export interface IStore {
  name: string;
  location: string;
  introduction: string;
  imgSrc: string;
}

const Store = ({ name, location, introduction, imgSrc }: IStore) => {
  return (
    <StyledSection>
      <StyledDiv>
        <StyledH1>{name}</StyledH1>
        <StyledSpan>{location}</StyledSpan>
        <StyledImgWrapper>
          <StyledImageBox>
            <StyledImg src={imgSrc} alt={name} />
          </StyledImageBox>
        </StyledImgWrapper>
        <StyledIntro>{introduction}</StyledIntro>
      </StyledDiv>
    </StyledSection>
  );
};

export default Store;

const StyledSection = styled.section`
  width: 25vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin-bottom: 1rem;
  transition: all 1s;
  animation: fadein 1s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 0.5rem;
  padding: 0.5rem;
  &:hover {
    transition: all 0.3s;
    transform: scale(1.2);
  }
`;

const StyledH1 = styled.h1`
  padding-left: 0.5rem;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`;
const StyledSpan = styled.span`
  padding-left: 0.5rem;
  margin-bottom: 0.5rem;
`;
const StyledImgWrapper = styled.div`
  width: 25vw;
  width: fit-content;
`;
const StyledImageBox = styled.div`
    width: 100%;
    height: 100%
    overflow: hidden;
`;
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const StyledIntro = styled.span`
  margin-top: 0.5rem;
  padding-left: 0.5rem;
  padding-bottom: 1rem;
`;
