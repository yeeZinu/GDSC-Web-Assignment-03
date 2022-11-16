import styled from "styled-components";

const Header = () => {
  return (
    <StyledNav>
      <StyledH1>🍽️ 맛집 리스트 🍽️</StyledH1>
    </StyledNav>
  );
};

export default Header;

const StyledNav = styled.nav`
  color: white;
  margin-bottom: 2rem;
  width: 100%;
  height: 12.5%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: -35px;
`;
const StyledH1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
`;
