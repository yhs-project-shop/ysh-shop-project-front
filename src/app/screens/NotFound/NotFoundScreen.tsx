import React from "react";
import { useHistory } from "react-router-dom";

function NotFoundScreen() {
  // prop destruction

  // lib hooks
  let history = useHistory();

  // state, ref, querystring hooks

  // form hooks

  // query hooks

  // calculated values

  // effects

  // handlers

  return (
    <div>
      NotFound
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        뒤로가기
      </button>
    </div>
  );
}

export { NotFoundScreen };
