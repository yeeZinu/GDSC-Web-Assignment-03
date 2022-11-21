import "../StoreCircle.css";
import styled from "styled-components";

interface Props {
  src: string;
}
const StoreCircle = ({ src }: Props) => {
  return <StyledStoreCircle src={src}></StyledStoreCircle>;
};

const StyledStoreCircle = styled.img`
  width: 10em;
  height: 10em;
  background-color: black;
  border-radius: 50%;
`;

export default StoreCircle;
