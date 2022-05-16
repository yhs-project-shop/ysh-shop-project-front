import React from "react";
import { FlexBox } from "../FlexBox";
import { CartModel } from "../../models/cart-model";
import { Input } from "../Input";
import { QuantitySelect } from "../QuantitySelect";

type CartItemProps = {
  key: number;
} & CartModel;

function CartItem(props: CartItemProps) {
  // prop destruction
  const { image, name, brand, quantity, size, price } = props;

  // lib hooks

  // state, ref, querystring hooks

  // form hooks

  // query hooks

  // calculated values

  // effects

  // handlers
  return (
    <FlexBox
      backgroundColor="white"
      border="1px solid #a3a0a0"
      height="100px"
      radius="2px"
      justifyContent="space-between"
      alignItems="center"
      margin="0 0 20px 0"
    >
      <FlexBox width="10%" height="auto" justifyContent="center">
        <Input width="20px" type="checkbox" cursor="pointer" />
      </FlexBox>
      <FlexBox width="30%" border="1px solid blue">
        {image} | {brand} | {name}
      </FlexBox>
      <FlexBox width="20%" border="1px solid black">
        {size}
      </FlexBox>
      <FlexBox width="20%" height="auto" justifyContent="center">
        <QuantitySelect num={quantity} />
      </FlexBox>
      <FlexBox width="20%" height="auto" justifyContent="center">
        <span>{price}</span>
      </FlexBox>
    </FlexBox>
  );
}

export { CartItem };
