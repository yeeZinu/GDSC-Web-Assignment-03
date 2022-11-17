import StoreCircle from "./StoreCircle";
import StoreTextingDetail from "./StoreTextingDetail";
import styled from "styled-components";

const Store = () => {
  return (
    <StoreCss className="Store">
      <StoreContainerCss>
        <StoreCircle src="img/sushi.jpeg" />
        <StoreTextingDetail
          title="부천 상무초밥"
          address="경기 부천시 길주로 111 103호 (우)14542"
          menu="모듬 스시(10P)"
        />
      </StoreContainerCss>
      <StoreContainerCss>
        <StoreCircle src="img/budae.jpg" />
        <StoreTextingDetail
          title="오뎅식당"
          address="경기도 의정부시 의정부1동 호국로1309번길 7"
          menu="부대찌개"
        />
      </StoreContainerCss>
      <StoreContainerCss>
        <StoreCircle src="img/pigfoot.jpeg" />
        <StoreTextingDetail
          title="마왕족발"
          address="서울특별시 서초구 서초동 1567-9번지 1층"
          menu="마왕통구이"
        />
      </StoreContainerCss>
      <StoreContainerCss>
        <StoreCircle src="img/rabbit.jpg" />
        <StoreTextingDetail
          title="토끼정"
          address="서울특별시 강서구 하늘길 38"
          menu="파스타 토끼밥상 스테이크 파스타 카레(매운맛 1단계)"
        />
      </StoreContainerCss>
    </StoreCss>
  );
};
export default Store;

const StoreCss = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5em;
`;
const StoreContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2em;
`;
