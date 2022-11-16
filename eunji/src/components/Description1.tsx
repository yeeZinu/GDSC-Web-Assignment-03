import styled from "styled-components";

const Description1 = () => {
    return (
        <StyledDiv>TMI: 질긴 식감을 별로 좋아하지 않는데<br />이 우동은 진짜 쫄깃쫄깃하고 맛있었음<br />+웨이팅 기본 30분</StyledDiv>
    )
}

export default Description1;

const StyledDiv = styled.div`
float: right;
color: pink;
padding: 0 10px;
margin: 0 10px;
text-align: center;
`;