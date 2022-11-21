import styled, { keyframes } from 'styled-components';
const rotate = keyframes`
 
  100%{
    transform: rotateY(35deg);
    color:#0D4C92;
    
  }
`;
interface Props {
  name: string;
  address: string;
  imgSrc: string;
  mainfood: string;
  imgAlt: string;
}

/*
Store 컴포넌트는 이름,주소,음식사진,대표메뉴 4가지를 가짐
각자 다르니까 주입시킬거임
*/

const Store = ({ name, address, imgSrc, imgAlt, mainfood }: Props) => {
  return (
    <StyleStore>
      <StyleName>{name}</StyleName>
      <StyleImg src={imgSrc} alt={imgAlt}></StyleImg>
      <StyleAddress>{address}</StyleAddress>
      <StyleMainFood>{mainfood}</StyleMainFood>
    </StyleStore>
  );
};

const StyleStore = styled.section`
  background-color: #eff5f5;
  height: auto;
  color: #a1a1a1;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 1s;
  margin: 5px;
  &:hover {
    animation: ${rotate} 0.4s linear;
    animation-fill-mode: forwards;
  }
`;

const StyleName = styled.h3`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 700;
`;

const StyleAddress = styled.p`
  display: flex;
  justify-content: center;
`;
const StyleImg = styled.img`
  display: flex;
  height: 80%;
  width: 100%;
  object-fit: cover;
`;
/*
StyleAddress를 상속받음
*/
const StyleMainFood = styled(StyleAddress)`
  color: black;
`;

export default Store;
