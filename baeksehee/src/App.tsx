import Store from "./components/Store";
import "./index.css";

function Header() {
  return (
    <header>
      <p className ="name">연신내 맛집 전단지</p>
    </header>
  );
}

function Section() {
  return (
    <section>
      <Store
        title="강씨네 닭발"
        summary="메인메뉴:국물닭발"
        imgSrc="./IMG1-1.jpg"
        address="서울 은평구 연서로 178-1 1층"
      />
      <Store
        title="청어람"
        summary="메인메뉴: 소곱창 전골"
        imgSrc="./img2-2.jpg"
        address="서울 은평구 연서로27길 16-12"
      />
      <Store
        title="대명왕십리곱창"
        summary="메인메뉴: 야채곱창"
        imgSrc="./IMG3-3.jpg"
        address="서울 은평구 통일로 863-17"
      />
      <Store
        title="달가득"
        summary="메인메뉴: 치킨 + 투움바 떡볶이"
        imgSrc="./IMG4-4.jpg"
        address="서울 은평구 연서로28길 10"
      />
      <Store
        title="라화방"
        summary="메인메뉴: 마라탕 + 꿔바로우"
        imgSrc="./IMG5-5.jpg"
        address="서울 은평구 연서로29길 30"
      />
      <Store
        title="연어가게"
        summary="메인메뉴: 연어 + 육회"
        imgSrc="./IMG6.jpg"
        address="서울 은평구 연서로27길 8-8 1층"
      />
    </section>
  );
}

function App() {
  return (
    <div className="line">
      <Header></Header>
      <Section></Section>
    </div>
  );
}

export default App;