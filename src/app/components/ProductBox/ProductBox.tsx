import React from "react";
import { FlexBox, Image, Text } from "../../components";

type ProductBoxProps = {
  image: string;
  alt: string;
  name: string;
  price: string;
};

function ProductBox(props: ProductBoxProps) {
  // prop destruction
  const { image, alt, name, price } = { ...props };
  // lib hooks

  // state, ref, querystring hooks

  // form hooks

  // query hooks

  // calculated values

  // effects

  // handlers
  return (
    <FlexBox direction="column">
      <Image src={image} alt={alt} width="390px" cursor="pointer" />
      <Text size="25px" weight="600" height="35px" margin="20px 0 0 0">
        {name}
      </Text>
      <Text
        size="18px"
        color="rgba(0, 0, 0, 0.5)"
        height="25px"
        margin="16px 0 0 0"
      >
        {price}
      </Text>
    </FlexBox>
  );
}

export { ProductBox };
