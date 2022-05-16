import React, { useEffect, useState } from "react";
import { Button } from "../Button";
import { FlexBox } from "../FlexBox";

function QuantitySelect(props: { num: number }) {
  // prop destruction
  const { num } = props;

  // lib hooks

  // state, ref, querystring hooks
  const [quantity, setQuantity] = useState(0);

  // form hooks

  // query hooks

  // calculated values

  // effects
  useEffect(() => {
    setQuantity(num);
  }, [num]);

  // handlers
  const handlePlus = (e: React.MouseEvent<HTMLButtonElement>) => {
    setQuantity(quantity + 1);
  };
  const handleMinus = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (quantity !== 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <FlexBox
      width="80px"
      height="30px"
      backgroundColor="#e4e4e4"
      alignItems="center"
      justifyContent="space-between"
      radius="4px"
    >
      <Button
        onClick={handlePlus}
        color="black"
        width="25px"
        height="30px"
        backgroundColor="#e4e4e4"
      >
        +
      </Button>
      {quantity}
      <Button
        onClick={handleMinus}
        color="black"
        width="25px"
        height="30px"
        backgroundColor="#e4e4e4"
      >
        -
      </Button>
    </FlexBox>
  );
}

export { QuantitySelect };
