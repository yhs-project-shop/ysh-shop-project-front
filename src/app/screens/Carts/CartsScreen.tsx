import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { List, CartOrderForm, FlexBox, Title } from "../../components";
import { CartModel } from "../../models";
import { RootState } from "../../redux/configStore";

function CartsScreen() {
  // prop destruction

  // lib hooks
  const cartList = useSelector((state: RootState) => state.cart.list);

  // state, ref, querystring hooks
  const [list, setList] = useState<Array<CartModel>>([]);

  // form hooks

  // query hooks

  // calculated values

  // effects
  useEffect(() => {
    setList(cartList);
  }, [cartList]);

  // handlers

  return (
    <FlexBox direction="column">
      <Title type="h2">장바구니</Title>
      <FlexBox width="90%" margin="30px auto" backgroundColor="#dce6c9">
        <List
          border="1px solid #aba8a8"
          width="800px"
          height="auto"
          direction="column"
          listArray={list}
          // component={CartItem}
        />
        <CartOrderForm />
      </FlexBox>
    </FlexBox>
  );
}

export { CartsScreen };
