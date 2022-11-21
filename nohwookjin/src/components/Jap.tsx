import Store from "./Store";

const Jap = () => {
  return (
    <>
      <Store
        name="🍽️ Midoriya"
        location="⛳️ 서울특별시 용산구 이태원동 130 10번지 "
        introduction="연어, 육사시미 맛있음!"
        imgSrc="midoriya.jpeg"
      />
      <Store
        name="🍽️ 코코이찌방야"
        location="⛳️ 경기도 부천시 원미구 부천로9번길 24 "
        introduction="코코일품돈카츠카레 맛있음!"
        imgSrc="coco.jpeg"
      />
      <Store
        name="🍽️ 교토가츠규"
        location="⛳️ 경기도 고양시 고양스타필드점"
        introduction="살치살규카츠정식 맛있음!"
        imgSrc="real.jpeg"
      />
    </>
  );
};

export default Jap;
