import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Image } from "../../components";
import { productActions } from "../../redux/modules/product";
import main from "../../../assets/main_main.webp";
import ready from "../../../assets/main_ready.webp";
import youth from "../../../assets/main_youth.webp";

function HomeScreen() {
  // prop destruction

  // lib hooks
  const dispatch = useDispatch();

  // state, ref, querystring hooks

  // form hooks

  // query hooks

  // calculated values

  // effects
  useEffect(() => {
    dispatch(productActions.getAllDB());
    dispatch(productActions.getOneDB(14));
  }, []);

  // handlers

  return (
    <StyledDiv>
      <Image src={main} alt="Tend 신발 메인 이미지" width="100%" />
      <Content1>
        <Item />
        <Item />
      </Content1>
      <Content2>
        <Item />
        <Item />
        <Item />
      </Content2>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  margin: 0 auto;
  width: 1200px;
  height: auto;
`;

const Item = styled.div`
  border: 2px solid black;
`;

const Content = styled.div`
  display: grid;
  grid-template-rows: repeat(auto, 1fr);
  grid-auto-flow: dense;
  place-items: stretch stretch;
`;
const Content1 = styled(Content)`
  height: 680px;
  grid-template-columns: repeat(auto-fill, minmax(50%, auto));
`;
const Content2 = styled(Content)`
  height: 400px;
  grid-template-columns: repeat(3, 1fr);
`;

export { HomeScreen };
