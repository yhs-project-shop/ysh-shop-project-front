import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { CartItem } from "../CartItem";
import { FlexBox } from "../FlexBox";

type ListProps = {
  listArray: Array<any>;
  width?: string;
  height?: string;
  direction?: string;
  border?: string;
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  alignItems?: string;
};

function List(props: ListProps) {
  // prop destruction
  const { listArray } = props;

  // lib hooks
  const history = useHistory();

  // state, ref, querystring hooks
  const [list, setList] = useState<Array<any>>([]);

  // form hooks

  // query hooks

  // calculated values
  let isEmpty = list.length === 0 ? true : false;
  let url = history.location.pathname;

  // effects
  useEffect(() => {
    setList(listArray);
  }, [listArray]);

  // handlers

  console.log(isEmpty, "장바구니 리스트: ", list);
  // console.dir(component);
  return (
    <FlexBox {...props}>
      {isEmpty ? (
        <p>장바구니가 비었습니다.</p>
      ) : (
        list?.map((info, idx) => {
          if (url === "/cart") {
            return <CartItem key={idx} {...info} />;
          } else if (url === "/admin") {
            return <FlexBox key={idx}>하잉</FlexBox>;
          }
        })
      )}
    </FlexBox>
  );
}

export { List };
