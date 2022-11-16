import styled from "styled-components";
import Food from "./Food";

const Header = () => {
  return (
    <StyledHeaderDiv>
      <StyledHeaderH1>맛집 소개</StyledHeaderH1>
      <Food imgSrc="dish.png" title="음식 아이콘" />
    </StyledHeaderDiv>
  );
};

export default Header;

const StyledHeaderH1 = styled.h1`
  font-size: 50px;
`;

const StyledHeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 100px;
  gap: 10px;
`;
