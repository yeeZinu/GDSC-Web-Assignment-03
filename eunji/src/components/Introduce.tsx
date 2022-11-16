import styled from "styled-components";

const Introduce = () => {
  return (
    <div>
      <StyledH1>Eunji's recommend FnB</StyledH1>
      <StyledH3>
        Food&Beverage
      </StyledH3>
      <StyledP>
        작성자 특: 곱창, 회 같은 식감이 이상한 거 싫어하고 단 거, 짠 거,
        매운 거 좋아하는 초딩입맛
        <br />
        (리뷰를 보고 싶다면 가게 이름을 클릭해 보세요)
      </StyledP>
    </div>
  );
};

export default Introduce;

const StyledP = styled.p`
  text-align: center;
  color: white;
`;

const StyledH1 = styled.h1`
  text-align: center;
  color: pink;
`;

const StyledH3 = styled.h3`
  text-align: center;
  color: white;
`;
