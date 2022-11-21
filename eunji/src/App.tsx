import FnB from './components/FnB';
import Introduce from './components/Introduce';
import Description1 from './components/Description1';
import Description2 from './components/Description2';

import styled from 'styled-components';

function App() {
  return (
    <Container>
      <Introduce />
      <StyledDiv>
        <FnB name="교다이야" location="합정" img="fnb1.jpg" menu="가케우동정식(\13,000)" review="https://www.siksinhot.com/P/365707" />
        <Description1 />
      </StyledDiv>
      <StyledDiv>
        <FnB name="훈닭포차" location="까치산" img="fnb2.jpg" menu="숯불바베큐치킨(\32,000)" review="https://www.siksinhot.com/P/868189" />
        <Description2 />
      </StyledDiv>
    </Container>
  );
}

export default App;

const Container = styled.div`
background-color: black;
padding: 5px;
`;

const StyledDiv = styled.div`
display: flex;
// flex-direction: column;
justify-content: center;
align-items: center;
`;

const Description = styled.div`
display: block;
`;