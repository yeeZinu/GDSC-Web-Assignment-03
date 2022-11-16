import styled from "styled-components";

interface Props {
  title: string;
  imgSrc: string;
}

const Food = ({ title, imgSrc }: Props) => {
  return <StyledImg src={imgSrc} alt={title} />;
};

export default Food;

const StyledImg = styled.img`
  display: flex;
  justify-content: center;
  width: 80px;
  height: 80px;
`;
