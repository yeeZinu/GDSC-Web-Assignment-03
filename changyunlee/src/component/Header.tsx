import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <StyledH1>맛집 추천</StyledH1>
    </div>
  );
};
export default Header;

const StyledH1 = styled.h1`
  margin-top: 20px;
  writing-mode: vertical-lr;
  color: #303030;
`;
