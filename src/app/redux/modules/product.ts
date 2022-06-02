import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { ProductModel } from "../../models/product-model";
import { Action, Dispatch } from "redux";
import { productRepository } from "../../repositories";

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

// 미들웨어
const addDB = (productInfo: {
  name: string;
  brand: string;
  category: string;
  price: number;
  desc: string;
  img: string;
}) => {
  return async (
    dispatch: Dispatch<Action>,
    getState: ProductModel & boolean,
    { history }: any
  ) => {
    const info = {
      price: productInfo.price,
      brand: productInfo.brand,
      category: productInfo.category,
      name: productInfo.name,
      image: productInfo.img,
      desciption: productInfo.desc,
    };
    try {
      console.log("여기가 제품 등록 미들웨어 axios 호출 바로 전!!", info);
      const response = await productRepository.add(info);
      console.log("제품등록 결과: ", response);
    } catch (error) {
      console.log(error);
    }
  };
};

const deleteDB = (produceId: number) => {
  return async (
    dispatch: Dispatch<Action>,
    getState: ProductModel & boolean,
    { history }: any
  ) => {
    try {
      console.log("여기가 제품 삭제 미들웨어 axios 호출 바로 전!");
      const response = await productRepository.delete(produceId);
      console.log("제품삭제 결과: ", response);
    } catch (error) {
      console.log(error);
    }
  };
};

const getAllDB = (category: string) => {
  return async (
    dispatch: Dispatch<Action>,
    getState: ProductModel & boolean,
    { history }: any
  ) => {
    try {
      console.log("여기가 제품 전체 가져오기 미들웨어 axios 호출 바로 전!");
      const response = await productRepository.getAll(category);
      console.log("제품 전체 가져오기 결과: ", response);
    } catch (error) {
      console.log(error);
    }
  };
};

const getOneDB = (produceId: number) => {
  return async (
    dispatch: Dispatch<Action>,
    getState: ProductModel & boolean,
    { history }: any
  ) => {
    try {
      console.log("여기가 제품 하나 가져오기 미들웨어 axios 호출 바로 전!");
      const response = await productRepository.getOne(produceId);
      console.log("제품 하나 가져오기 결과: ", response);
    } catch (error) {
      console.log(error);
    }
  };
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
  addDB,
  deleteDB,
  getAllDB,
  getOneDB,
};
