import React from "react";
import styled from "styled-components";
import { Button, FlexBox, Image, Text } from "../../components";
import video from "../../../assets/main.png";
import main from "../../../assets/main_main.webp";
import ready from "../../../assets/main_ready.webp";
import youth from "../../../assets/main_youth.webp";

const DetailButton = () => {
  return (
    <Button
      type="button"
      backgroundColor="#7001f7"
      width="170px"
      height="43px"
      fontSize="18px"
      radius="21.5px"
      margin="16px 0 0 0"
      padding="9px auto 8px"
    >
      자세히 보기
    </Button>
  );
};

const DetailText = () => {
  return (
    <>
      <Text size="12px">우리가 원하는 것.</Text>
      <Text size="12px">
        자유로움 너머로 나아가는 당신의 여정을 텐드가 함께합니다.
      </Text>
    </>
  );
};

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
      <Image
        src={video}
        alt="Tend 신발 메인 동영상"
        width="100%"
        margin="0 0 100px 0"
      />
      <Image src={main} alt="Tend 신발 메인 이미지" width="100%" />
      <FlexBox
        padding="20px 0 0 0"
        height="160px"
        direction="column"
        alignItems="center"
        boxSizing="border-box"
      >
        <DetailText />
        <DetailButton />
      </FlexBox>
      <Content1>
        <Image
          src={ready}
          alt="메인 이미지_준비자세를 취한 사람"
          width="592px"
        />
        <Image src={youth} alt="메인 이미지_청년들" width="592px" />
      </Content1>
      <FlexBox
        padding="20px 0 0 0"
        height="160px"
        direction="column"
        alignItems="center"
        boxSizing="border-box"
      >
        <DetailText />
        <DetailButton />
      </FlexBox>
      <Content2>
        <Item></Item>
        <Item></Item>
        <Item></Item>
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
  border: 1px solid black;
`;

const Content = styled.div`
  display: grid;
  grid-auto-flow: dense;
  place-items: stretch stretch;
  box-sizing: border-box;
  justify-content: space-between;
`;
const Content1 = styled(Content)`
  height: 592px;
  grid-template-columns: repeat(2, 592px);
`;
const Content2 = styled(Content)`
  height: 400px;
  grid-template-columns: repeat(3, 390px);
  margin-bottom: 410px;
`;

export { HomeScreen };
