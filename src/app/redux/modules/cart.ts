import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { CartModel } from "../../models";

// 액션
const LOAD = "LOAD";
const UPDATE = "UPDATE";
const REMOVE = "REMOVE";

// 액션 생성 함수
const load = createAction(LOAD, (cart: CartModel) => ({ cart }));
const update = createAction(UPDATE, (cart: CartModel) => ({ cart }));
const remove = createAction(REMOVE, (cart: CartModel) => ({ cart }));

// 초기 상태값
const initialState: { list: Array<CartModel> } = {
  list: [
    {
      name: "기본제품",
      image: "이미지0",
      price: 1000,
      brand: "Tend",
      quantity: 0,
      size: "220",
    },
    {
      name: "lightfly",
      image: "이미지1",
      price: 100000,
      brand: "tend",
      quantity: 1,
      size: "230",
    },
    {
      name: "peierce",
      image: "이미지2",
      price: 200000,
      brand: "tend",
      quantity: 2,
      size: "250",
    },
  ],
};

// 리듀서
// 실질적으로 store에 들어가 있는 데이터를 변경하는 곳이죠!
export default handleActions(
  {
    [LOAD]: (state, action) => produce(state, (draft) => {}),
    [UPDATE]: (state, action) => produce(state, (draft) => {}),
    [REMOVE]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

export const cartActions = {
  load,
  update,
  remove,
};
