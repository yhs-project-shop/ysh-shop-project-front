import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";

function ProductsScreen() {
  // prop destruction

  // lib hooks
  // 여기에서 state는 리덕스 스토어가 가진 전체 데이터예요.
  // 우리는 그 중, bucket 안에 들어있는 list를 가져옵니다.
  const my_lists = useSelector((state: RootState) => state.product.list);

  // state, ref, querystring hooks

  // form hooks

  // query hooks

  // calculated values

  // effects

  // handlers

  return (
    <div>
      Product
      <div>
        <label htmlFor="quantity">수량</label>
        <input type="number" name="quantity" min="1" max="30" step="1" />
      </div>
    </div>
  );
}

export { ProductsScreen };
