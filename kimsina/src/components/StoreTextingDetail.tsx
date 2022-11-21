import styled from "styled-components";

interface Props {
  title: String;
  address: String;
  menu: String;
}
const StoreTextingDetail = ({ title, address, menu }: Props) => {
  return (
    <StoreTextingDetailCircle>
      <StoreTextingDetailSpan>{title}</StoreTextingDetailSpan>
      <StoreTextingDetailp>{address}</StoreTextingDetailp>
      <StoreTextingDetailp>{menu}</StoreTextingDetailp>
    </StoreTextingDetailCircle>
  );
};

export default StoreTextingDetail;

const StoreTextingDetailCircle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 12em;
  height: 15em;
  padding: 1em;
  box-shadow: 0.5em 0.5em 1em #c8c8c8;
  margin: 1em 0;
`;

const StoreTextingDetailSpan = styled.span`
  font-size: 1.2em;
`;

const StoreTextingDetailp = styled.p`
  font-size: 0.8em;
  text-align: center;
`;
