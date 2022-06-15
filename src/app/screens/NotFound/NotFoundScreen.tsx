import React from "react";
import { Text, FlexBox, Image } from "../../components";
import notFound from "../../../assets/icon_notfound.webp";

function NotFoundScreen() {
  // prop destruction

  // lib hooks

  // state, ref, querystring hooks

  // form hooks

  // query hooks

  // calculated values

  // effects

  // handlers

  return (
    <FlexBox direction="column" alignItems="center" margin="97px 0 0 0">
      <Image src={notFound} alt="슬픈 얼굴의 정사각형" width="123px" />
      <Text
        size="39px"
        weight="600"
        color="rgba(0, 0, 0, 0.3)"
        height="55px"
        margin="25.5px 0 0 0"
      >
        No result found..
      </Text>
    </FlexBox>
  );
}

export { NotFoundScreen };
