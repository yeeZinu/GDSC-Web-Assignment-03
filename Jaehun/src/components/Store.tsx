import styled from "styled-components";

interface Props {
  name: string;
  imgSrc: string;
  menuSrc: string;
}

const Store = ({ name, imgSrc, menuSrc }: Props) => {
  return (
    <StyledArticle>
      <StyledFoodImg>
        <StyledImgBox>
          <Styledimg src={imgSrc} alt={name} />
        </StyledImgBox>
      </StyledFoodImg>
      <StyledRotateFood>
        <StyledFoodImg>
          <StyledImgBox>
            <Styledimg src={menuSrc} alt={name} />
          </StyledImgBox>
        </StyledFoodImg>
      </StyledRotateFood>
    </StyledArticle>
  );
};

export default Store;

const StyledArticle = styled.article`
  width: 90%;
  margin: 0 auto;
  border: 3px solid #e3dff8;
  background-color: #fcb8b8;
  padding: 30px;
  margin-top: 30px;
  border-radius: 25px;
  display: flex;
  justify-content: space-around;
`;

const StyledImgBox = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
`;

const Styledimg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const StyledFoodImg = styled.div`
  width: 450px;
  height: 450px;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledRotateFood = styled.div`
  :hover {
    cursor: pointer;
    transition: 3s all ease;
    animation: rotateFood 10s linear infinite;
  }
  @keyframes rotateFood {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
