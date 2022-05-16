import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";
import User from "./modules/user";
import Product from "./modules/product";
import Cart from "./modules/cart";

export const history = createBrowserHistory();

// root 리듀서를 만들어줍니다.
// 나중에 리듀서를 여러개 만들게 되면 여기에 하나씩 추가해주는 거예요!
const rootReducer = combineReducers({
  user: User,
  product: Product,
  cart: Cart,
  router: connectRouter(history),
});

// 미들웨어 준비
const middlewares = [thunk.withExtraArgument({ history: history })];
// 지금이 어느 환경인지 알려준다. (개발환경, 프로덕트(배포) 환경..)
const env = process.env.NODE_ENV;
// 개발환경에서 logger를 사용해보자.
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// 스토어를 만듭니다.
let store = (initialStore?: typeof rootReducer) =>
  createStore(rootReducer, enhancer);
export default store();

// RootState 라는 타입을 만들어서 내보내주어야 한다는 것 입니다.
// 이 타입은 추후 우리가 컨테이너 컴포넌트를 만들게 될 때
// 스토어에서 관리하고 있는 상태를 조회하기 위해서 useSelector를 사용 할 때 필요로 합니다.
export type RootState = ReturnType<typeof rootReducer>;
