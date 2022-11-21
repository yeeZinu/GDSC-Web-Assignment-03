import styled from "styled-components";

interface Props {
  title: string;
  description: string;
  imgSrc1: string;
  imgSrc2: string;
  menu: string;
  price: string;
  link: string;
}

const Store = ({
  title,
  description,
  imgSrc1,
  imgSrc2,
  menu,
  price,
  link,
}: Props) => {
  return (
    <StyledSection>
      <StyledH2>
        <StyledA href={link}>{title}</StyledA>
      </StyledH2>
      <StyledDescription>{description}</StyledDescription>
      <StyledImg src={imgSrc1} alt={title} />
      <StyledP>대표메뉴</StyledP>
      <StyledImg src={imgSrc2} />
      <StyledP>{menu}</StyledP>
      <StyledP>가격: {price}원</StyledP>
    </StyledSection>
  );
};

export default Store;

const StyledSection = styled.section`
  width: 300px;
  padding: 20px;
  margin: 20px;
  background-color: #e8c39e;
  border-radius: 20px;
`;
const StyledH2 = styled.h2`
  color: #2C1E11;
  font-weight:bold;
`;
const StyledDescription = styled.p`
color:#543421`;
const StyledImg = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 10px;
`;
const StyledP = styled.p`
  color: #283950;
`;
const StyledA = styled.a`
  all: unset;
  cursor: pointer;
`;
