import styled from "styled-components";

interface Props {
  title: string;
  summary: string;
  imgSrc: string;
  grade: string;
  grade2: string;
  menuSrc0: string;
  menuName0: string;
  price0: string;
  menuSrc1: string;
  menuName1: string;
  price1: string;
  menuSrc2: string;
  menuName2: string;
  price2: string;
  menuSrc3: string;
  menuName3: string;
  price3: string;
}

const Store = ({
  title,
  summary,
  imgSrc,
  grade,
  grade2,
  menuName0,
  menuSrc0,
  price0,
  menuName1,
  menuName3,
  menuSrc1,
  menuSrc2,
  menuSrc3,
  menuName2,
  price1,
  price2,
  price3,
}: Props) => {
  return (
    <StyleSection>
      <StyledArticle>
        <StyledH2>{title}</StyledH2>
        <Summary>{summary}</Summary>
        <StyledImg src={imgSrc} alt={title} />
        <StyledP>{grade}</StyledP>
        <StyledP>{grade2}</StyledP>
      </StyledArticle>
      <StyledArticle>
        <StyledH3>-대표메뉴-</StyledH3>
        <StyledSpan>
          <Styled2Section>
            <Styled2Img src={menuSrc0} alt={menuName0} />
            <StyledDiv>
              <Styled2P>{menuName0}</Styled2P>
              <Styled2P>{price0}</Styled2P>
            </StyledDiv>
          </Styled2Section>
          <Styled2Section>
            <Styled2Img src={menuSrc1} alt={menuName1} />
            <StyledDiv>
              <Styled2P>{menuName1}</Styled2P>
              <Styled2P>{price1}</Styled2P>
            </StyledDiv>
          </Styled2Section>
          <Styled2Section>
            <Styled2Img src={menuSrc2} alt={menuName2} />
            <StyledDiv>
              <Styled2P>{menuName2}</Styled2P>
              <Styled2P>{price2}</Styled2P>
            </StyledDiv>
          </Styled2Section>
          <Styled2Section>
            <Styled2Img src={menuSrc3} alt={menuName3} />
            <StyledDiv>
              <Styled2P>{menuName3}</Styled2P>
              <Styled2P>{price3}</Styled2P>
            </StyledDiv>
          </Styled2Section>
        </StyledSpan>
      </StyledArticle>
    </StyleSection>
  );
};

const StyledSpan = styled.span`
  height: 450px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Styled2P = styled.p`
  font-size: 21px;
  font-family: serif;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  font-size: 22px;
  justify-content: space-around;
  font-family: serif;
`;

const StyleSection = styled.section`
  display: flex;
  background-color: #ffebcf;
  height: 80%;
  display: flex;
  justify-content: space-around;
`;
const StyledArticle = styled.article`
  width: 500px;
  padding: 20px;
  margin: 30px 50px;
  text-align: center;
  box-shadow: 5px 6px 6px grey;

  border-radius: 25px;
  border: 3px solid lightgray;
  color: black;
  background-color: white;
  display: flex;
  flex-direction: column;
`;
const Styled2Section = styled.section`
  padding: 10px;
  text-align: center;

  border-radius: 5px;
  border: 2px solid #e0e0e0;
  color: black;
  background-color: white;
  display: flex;
  margin: auto;
  width: 85%;
  gap: 60px;
`;

const Styled2Img = styled.img`
  width: 100px;
  height: 80px;
  border-radius: 10px;
  margin-left: 15px;
`;
const StyledH2 = styled.h2`
  font-size: 30px;
  font-family: serif;
  margin: 20px;
`;

const StyledH3 = styled.h3`
  font-size: 30px;
  font-family: serif;
  margin: 20px;
`;

const Summary = styled.p`
  color: black;
  margin: 5px;
  font-family: serif;
  font-size: 25px;
`;

const StyledImg = styled.img`
  width: 300px;
  height: 350px;
  margin: auto;
  border-radius: 30px;
`;
const StyledP = styled.p`
  margin: 10px;
  font-size: 21px;
  font-family: serif;
`;

export default Store;
