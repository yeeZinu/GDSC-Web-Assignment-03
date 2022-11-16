import React, { useState } from "react";
import styled from "styled-components";

import Jap from "../components/Jap";
import Korean from "../components/Korean";
import Cafe from "../components/Cafe";

const Main = () => {
  const [list, SetList] = useState<string>("1");

  const getMenu = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    SetList(e.currentTarget.value);
  };

  return (
    <StyledSection>
      <StyledSideBar>
        <StyledBtn value="1" onClick={getMenu}>
          •일식
        </StyledBtn>
        <StyledBtn value="2" onClick={getMenu}>
          •한식
        </StyledBtn>
        <StyledBtn value="3" onClick={getMenu}>
          •카페
        </StyledBtn>
      </StyledSideBar>
      <article>
        {list === "1" && <Jap />}
        {list === "2" && <Korean />}
        {list === "3" && <Cafe />}
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
