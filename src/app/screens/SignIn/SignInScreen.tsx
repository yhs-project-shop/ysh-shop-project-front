import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, FlexBox, Input, Title } from "../../components";
import { Form, Text } from "../../components";
import { userActions } from "../../redux/modules/user";

function SignInScreen() {
  // prop destruction

  // lib hooks
  const dispatch = useDispatch();
  const history = useHistory();

  // state, ref, querystring hooks
  const [inputData, setInputData] = useState({
    userId: "",
    password: "",
  });

  // form hooks

  // query hooks

  // calculated values

  // effects

  // handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userActions.signInDB(inputData));
  };

  return (
    <Form
      method="post"
      onSubmit={handleSubmit}
      width="350px"
      height="400px"
      margin=" 30px auto"
    >
      <Title type="h1" size="39px" color="#7001f7">
        LOGIN
      </Title>
      <FlexBox
        width="324px"
        height="120px"
        direction="column"
        justifyContent="space-between"
        alignItems="flex-end"
        margin="15px auto 0"
      >
        <Input
          name="userId"
          type="text"
          placeholder="ID"
          onChange={handleChange}
        />
        <Input
          name="password"
          type="password"
          placeholder="PW"
          onChange={handleChange}
        />
        <Text size="12px" color="rgba(0, 0, 0, 0.3)">
          아이디 | 비밀번호 찾기
        </Text>
      </FlexBox>
      <Button
        backgroundColor="#7001f7"
        fontSize="18px"
        margin="30px auto 0"
        type="submit"
      >
        로그인
      </Button>
      <Button
        onClick={() => {
          history.push("/signup");
        }}
        backgroundColor="white"
        fontSize="18px"
        margin="30px auto 0"
        color="#7001f7"
        border="solid 2px #7001f7"
        radius="21.5px"
      >
        회원가입
      </Button>
    </Form>
  );
}

export { SignInScreen };
