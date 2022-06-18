import React from "react";
import styled from "styled-components";
import { Button, FlexBox, Image, Text } from "../../components";
import main from "../../../assets/main_main.webp";
import skateboard from "../../../assets/main_skateboard.webp";
import ready from "../../../assets/main_ready.webp";
import youth from "../../../assets/main_youth.webp";
import max001 from "../../../assets/shoes_MAX001.webp";
import max002 from "../../../assets/shoes_MAX002.webp";
import max003 from "../../../assets/shoes_MAX003.webp";
import top from "../../../assets/icon_top.webp";

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

const ShoesInfo = (props: { name: string; price: string }) => {
  return (
    <>
      <Text size="25px" weight="600" height="35px" margin="20px 0 0 0">
        {props.name}
      </Text>
      <Text
        size="18px"
        color="rgba(0, 0, 0, 0.5)"
        height="25px"
        margin="16px 0 0 0"
      >
        {props.price}
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
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <Image
        src={main}
        alt="메인 이미지_뒤돌아선 사람들"
        width="100%"
        margin="0 0 200px 0"
      />
      <Image src={skateboard} alt="메인 이미지_스케이트보드" width="100%" />
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
        margin="0 0 16px 0"
        height="160px"
        direction="column"
        alignItems="center"
        boxSizing="border-box"
      >
        <DetailText />
        <DetailButton />
      </FlexBox>
      <Content2>
        <FlexBox direction="column">
          <Image
            src={max001}
            alt="메인 이미지_max001"
            width="390px"
            cursor="pointer"
          />
          <ShoesInfo name="MAX001" price="109,000원" />
        </FlexBox>
        <FlexBox direction="column">
          <Image
            src={max002}
            alt="메인 이미지_max002"
            width="390px"
            cursor="pointer"
          />
          <ShoesInfo name="MAX002" price="109,000원" />
        </FlexBox>
        <FlexBox direction="column">
          <Image
            src={max003}
            alt="메인 이미지_max003"
            width="390px"
            cursor="pointer"
          />
          <ShoesInfo name="MAX003" price="129,000원" />
        </FlexBox>
      </Content2>
      {/* NOTE: 디자인 확정되서 다른 화면에도 적용되면 수정하기 */}
      <FlexBox
        width="1200px"
        height="66px"
        margin="0 auto"
        justifyContent="flex-end"
        position="fixed"
        bottom="50px"
      >
        {/* NOTE: 스크롤을 내리면 그때 나타나도록 수정. opacity 속성 이용하면 될 듯. */}
        <Button
          width="66px"
          height="66px"
          padding="0"
          backgroundColor="transparent"
          onClick={handleScroll}
        >
          <Image src={top} alt="위쪽방향 화살표" width="66px" height="66px" />
        </Button>
      </FlexBox>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  width: 1200px;
  height: auto;
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
