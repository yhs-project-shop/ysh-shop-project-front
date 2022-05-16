import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { ProductModel } from "../../models/product-model";

// 액션
const LOAD = "LOAD";
const CREATE = "CREATE";
const UPDATE = "UPDATE";
const REMOVE = "REMOVE";

// 액션 생성 함수
const load = createAction(LOAD, (product: ProductModel) => ({ product }));
const create = createAction(CREATE, (product: ProductModel) => ({ product }));
const update = createAction(UPDATE, (product: ProductModel) => ({ product }));
const remove = createAction(REMOVE, (product: ProductModel) => ({ product }));

// 초기 상태값
const initialState: { list: Array<ProductModel> } = {
  list: [
    {
      id: 1,
      name: "조던",
      image: "12345",
      price: 100000,
      brand: "나이키",
      category: "농구화",
      desc: "조던 농구화는 왕 멋지다.",
      wishList: [4, 12],
    },
  ],
};

// 리듀서
// 실질적으로 store에 들어가 있는 데이터를 변경하는 곳이죠!
export default handleActions(
  {
    [LOAD]: (state, action) => produce(state, (draft) => {}),
    [CREATE]: (state, action) =>
      produce(state, (draft) => {
        draft.list = [...state.list];
      }),
    [UPDATE]: (state, action) => produce(state, (draft) => {}),
    [REMOVE]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

export const productActions = {
  load,
  create,
  update,
  remove,
};
