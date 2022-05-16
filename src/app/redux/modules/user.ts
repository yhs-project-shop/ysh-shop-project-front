import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { storage } from "../../libs/storage";
import { UserModel } from "../../models/user-model";
import { userRepository } from "../../repositories";
import { Action, Dispatch } from "redux";

// 액션 타입
// const SIGN_UP = "SIGN_UP";
// const SIGN_IN = "SIGN_IN";
// const SIGN_OUT = "SIGN_OUT";
// const DELETE_USER = "DELETE_USER";

export enum ActionType {
  SIGN_UP = "SIGN_UP",
  SIGN_IN = "SIGN_IN",
  SIGN_OUT = "SIGN_OUT",
  DELETE_USER = "DELETE_USER",
}

// 액션 interface
interface SignInAction {
  type: ActionType.SIGN_IN;
  payload: { token: string; user: { userId: string; password: string } };
}

// 액션 생성 함수
const signUp = createAction(
  ActionType.SIGN_UP,
  (user: { id: string; pwd: string; name: string; email: string }) => ({ user })
);
const signIn = createAction(
  ActionType.SIGN_IN,
  (token: string, user: { userId: string; password: string }) => ({
    token,
    user,
  })
);
const signOut = createAction(ActionType.SIGN_OUT, () => ({}));
const deleteUser = createAction(
  ActionType.DELETE_USER,
  (user: { id: string }) => ({
    user,
  })
);

// initialState
const initialState: { user: UserModel; is_login: boolean } = {
  user: {
    id: 1,
    name: "김텐드",
    role: "CUSTOMER",
    phone: "010-1234-5678",
    address: "서울특별시 가나구 다라로 177",
    email: "abc@gmail.com",
    birth: "1995-10-13",
  },
  is_login: storage.getItem("token") ? true : false,
};

// 미들웨어
const signUpDB = (userInfo: {
  id: string;
  pwd: string;
  name: string;
  email: string;
}) => {
  return async (
    dispatch: Dispatch<Action>,
    getState: UserModel & boolean,
    { history }: any
  ) => {
    const info = {
      userId: userInfo.id,
      password: userInfo.pwd,
      name: userInfo.name,
      email: userInfo.email,
    };
    try {
      console.log("여기가 회원가입 미들웨어 axios호출 바로 전!!!", info);
      const response = await userRepository.signUp(info);
      response && history.push("/signin");
    } catch (error) {
      console.log(error);
    }
  };
};

const signInDB = (userInfo: { userId: string; password: string }) => {
  return async (
    dispatch: Dispatch<Action>,
    getState: UserModel & boolean,
    { history }: any
  ) => {
    try {
      console.log("여기가 로그인 미들웨어 axios호출 바로 전!!!", userInfo);
      const response: any = await userRepository.signIn(userInfo);
      console.log(
        "로그인 axios 통신 후 response: ",
        typeof response.data.token
      );
      if (response) {
        dispatch(userActions.signIn(response.data.token, userInfo));
        history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// 리듀서
export default handleActions(
  {
    [ActionType.SIGN_UP]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [ActionType.SIGN_IN]: (state, action) =>
      produce(state, (draft) => {
        storage.setItem("token", "");
        console.log(action.payload);
        draft.is_login = true;
      }),
    [ActionType.SIGN_OUT]: (state, action) =>
      produce(state, (draft) => {
        storage.clear();
        draft.user = {
          id: 0,
          name: "",
          role: "CUSTOMER",
          phone: "",
          address: "",
          email: "",
          birth: "0000-00-00",
        };
        draft.is_login = false;
      }),
  },
  initialState
);

export const userActions = {
  signUpDB,
  signInDB,
  signIn,
  signUp,
  signOut,
};
