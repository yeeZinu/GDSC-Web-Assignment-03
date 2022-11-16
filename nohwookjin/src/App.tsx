import styled from "styled-components";

// components
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <StyledDiv>
      <Header />
      <Main />
    </StyledDiv>
  );
}

export default App;

const StyledDiv = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
