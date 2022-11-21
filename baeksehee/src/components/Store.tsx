import styled from "styled-components";
interface Props {
  title: string;
  summary: string;
  imgSrc: string;
  address: string;
}

const Store = ({ title, summary, imgSrc, address }: Props) => {
  return (
    <StyledArticle>
      <StyledInsertImg src="./pin.jpg" alt="Pin"></StyledInsertImg>

      <StyledH2>{title}</StyledH2>
      <P>{address}</P>

      <StyledImageWrapper>
        <StyledImg src={imgSrc} alt={title} />
      </StyledImageWrapper>

      <P>{summary}</P>
    </StyledArticle>
  );
};

export default Store;

const StyledArticle = styled.article`
  width: 300px;
  height: 400px;
  margin: 30px;
  padding: 10px 20px;
  background-color: #f1cddb;
  color: #e554a8;

  border: solid 4px #e554a8;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const StyledInsertImg = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 120px;
`;

const StyledH2 = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  text-shadow: 3px 3px 5px whitesmoke;
  background-color: #f1cddb;
`;

const P = styled.p`
  color: white;
  text-shadow: 2px 2px 4px #e554a8;
  background-color: #f1cddb;
`;

const StyledImageWrapper = styled.div`
  width: 100%;
  height: 70%;
  overflow: hidden;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  margin: 0px;
  object-fit: cover;
`;