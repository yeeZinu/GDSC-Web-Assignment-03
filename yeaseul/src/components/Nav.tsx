import styled from "styled-components";
const items = [
  { src: "korea.png", number: 0 },
  { src: "japan.png", number: 1 },
  { src: "china.png", number: 2 },
  { src: "USA.png", number: 3 },
];

const Nav = ({ setter }: {setter: React.Dispatch<React.SetStateAction<number>>}) => {
  return (
    <nav>
      <h1>맛tamnang</h1>
      <article>
        {items.map((item) => (
          <StyledImg key={item.number} src={item.src} onClick={() => setter(item.number)} alt=""/>
        ))}
        {/* {items.map(({src, number}) => (
          <img key={number} src={src} onClick={() => setter(number)} alt=""/>
        ))} */} 
        {/* 완전히 이해하면 이렇게 쓸 수 있도록 하기 */}
      </article>
    </nav>
  );
};

const StyledImg = styled.img`
  border-radius: 30px;
`

export default Nav;

//react 는 1) 인덱스 실행 2)App()을 실행 App이라는 컴포넌트는 있지만 비어있어서 실행이 안되었던 것
