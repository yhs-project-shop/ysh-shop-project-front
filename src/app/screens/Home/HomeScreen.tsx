import React from "react";
import styled from "styled-components";
import main from "../../../assets/main.png";
import { Image } from "../../components";

function HomeScreen() {
  // prop destruction

  // lib hooks

  // state, ref, querystring hooks

  // form hooks

  // query hooks

  // calculated values

  // effects

  // handlers

  return (
    <StyledDiv>
      <Image src={main} alt="Tend 신발 메인 이미지" width="100%" />
      <Content2>
        <Item2 />
        <Item2 />
        <Item2 />
        <Item2 />
      </Content2>
      <Content3>
        <Item3 />
        <Item3 />
      </Content3>
      <Content4>
        <Item4 />
        <Item4 />
        <Item4 />
      </Content4>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  margin: 0 auto;
  width: 1200px;
  border: 2px solid black;
  height: auto;
`;

const Item2 = styled.div`
  border: 2px solid black;
`;

const Item3 = styled.div`
  border: 2px solid black;
`;

const Item4 = styled.div`
  border: 2px solid black;
`;

const Content2 = styled.div`
  display: grid;
  height: 680px;
  grid-template-columns: repeat(auto-fill, minmax(25%, auto));
  grid-template-rows: repeat(auto, 1fr);
  grid-auto-flow: dense;
  place-items: stretch stretch;
`;
const Content3 = styled.div`
  display: grid;
  height: 680px;
  grid-template-columns: repeat(auto-fill, minmax(50%, auto));
  grid-template-rows: repeat(auto, 1fr);
  grid-auto-flow: dense;
  place-items: stretch stretch;
`;
const Content4 = styled.div`
  display: grid;
  height: 400px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  grid-auto-flow: dense;
  place-items: stretch stretch;
`;

export { HomeScreen };
