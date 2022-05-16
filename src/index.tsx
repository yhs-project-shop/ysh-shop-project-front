import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";

// 리덕스를 주입해줄 프로바이더를 불러옵니다!
import { Provider } from "react-redux";
// 연결할 스토어도 가지고 와요.
import store from "./app/redux/configStore";

// 이 부분이 index.html에 있는 div#root에 우리가 만든 컴포넌트를 실제로 렌더링하도록 연결해주는 부분이다.
// BrowserRouter는 웹 브라우저가 가지고 있는 주소 관련 정보를 props로 넘겨준다.
// 현재 내가 어느 주소를 보고 있는 지 쉽게 알려준다.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
