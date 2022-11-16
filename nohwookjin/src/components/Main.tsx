import React, { useState } from "react";
import styled from "styled-components";

import Jap from "../components/Jap";
import Korean from "../components/Korean";
import Cafe from "../components/Cafe";

const Main = () => {
  const [cov, setCov] = useState<boolean>(false);
  const [cov2, setCov2] = useState<boolean>(false);
  const [cov3, setCov3] = useState<boolean>(false);

  const onClickHandler = () => {
    if (cov2 === true || cov3 === true) {
      setCov2(false);
      setCov3(false);
    }
    setCov(!cov);
  };

  const onClickHandler2 = () => {
    if (cov === true || cov3 === true) {
      setCov(false);
      setCov3(false);
    }
    setCov2(!cov2);
  };

  const onClickHandler3 = () => {
    if (cov === true || cov2 === true) {
      setCov(false);
      setCov2(false);
    }
    setCov3(!cov3);
  };

  return (
    <StyledSection>
      <StyledSideBar>
        <StyledBtn onClick={onClickHandler}>•일식</StyledBtn>
        <StyledBtn onClick={onClickHandler2}>•한식</StyledBtn>
        <StyledBtn onClick={onClickHandler3}>•카페</StyledBtn>
      </StyledSideBar>
      <article>
        {cov === true ? <Jap /> : null}
        {cov2 === true ? <Korean /> : null}
        {cov3 === true ? <Cafe /> : null}
      </article>
    </StyledSection>
  );
};

export default Main;

const StyledSection = styled.section`
  display: flex;
  jutify-content: center;
  align-items: center;
  margin-top: 8rem;
`;

const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
`;

const StyledBtn = styled.button`
  all: unset;
  cursor: pointer;
  color: #615e66;
  padding: 5rem;
  font-size: 1.8rem;
  font-weight: 600;
  &:hover {
    transition: all 0.3s;
    color: white;
  }
  &:focus {
    color: white;
  }
`;
