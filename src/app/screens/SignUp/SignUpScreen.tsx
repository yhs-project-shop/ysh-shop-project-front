import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, FlexBox, Form, Input, Title } from "../../components";
import { userActions } from "../../redux/modules/user";
import { userRepository } from "../../repositories";

function SignUpScreen() {
  // prop destruction

  // lib hooks
  const dispatch = useDispatch();

  // state, ref, querystring hooks
  const [inputData, setInputData] = useState({
    id: "",
    pwd: "",
    name: "",
    email: "",
  });
  const [pwdCheck, setPwdCheck] = useState("");
  const [checkMessage, setCheckMessage] = useState({
    id: "중복 확인을 해주세요!",
    pwd: "영어, 숫자, 특수문자를 섞어주세요!",
    pwdCheck: "비밀번호가 일치하지 않습니다!",
    email: "중복 확인을 해주세요!",
  });

  // form hooks

  // query hooks

  // calculated values

  // effects
  useEffect(() => {
    if (inputData["pwd"] !== pwdCheck) {
      console.log("비밀번호가 맞지 않습니다.");
    } else {
      console.log("비밀번호 재확인 완료!");
    }
  }, [pwdCheck]);

  // handlers
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> &
      React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (e.target.name === "pwdCheck") {
      setPwdCheck(e.target.value);
    } else {
      setInputData({ ...inputData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userActions.signUpDB(inputData));
  };

  async function handleCheck(e: React.MouseEvent<HTMLButtonElement>) {
    const name = e.currentTarget.name === "id" ? "id" : "email";
    console.log("axios 중복 요청에 보내는 데이터: ", {
      target: name,
      value: inputData[name],
    });
    const response = await userRepository.dataCheck({
      target: name,
      value: inputData[name],
    });
    console.log("중복확인 후 response: ", response);
  }

  return (
    <Form
      method="post"
      onSubmit={handleSubmit}
      width="400px"
      height="auto"
      margin="0 auto"
    >
      <Title type="h2">회원 가입</Title>
      <FlexBox
        height="500px"
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        margin="30px 0 0 0"
      >
        <FlexBox
          width="310px"
          height="auto"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <FlexBox justifyContent="space-between">
            <Input
              width="260px"
              isLabel={true}
              labelWidth="260px"
              labelName="아이디"
              type="text"
              name="id"
              placeholder="아이디"
              onChange={handleChange}
            />
            <Button
              type="button"
              name="id"
              width="40px"
              height="40px"
              fontSize="12px"
              weight="light"
              margin="24px 0 0 0"
              padding="5px"
              backgroundColor="#864fc8"
              onClick={handleCheck}
            >
              중복확인
            </Button>
          </FlexBox>
          <FlexBox width="310px" height="auto" margin="5px 0 0 0">
            {checkMessage.id}
          </FlexBox>
        </FlexBox>
        <Input
          isLabel={true}
          labelName="비밀번호"
          type="password"
          name="pwd"
          placeholder="비밀번호"
          onChange={handleChange}
        />
        <Input
          isLabel={true}
          labelName="비밀번호 재확인"
          type="password"
          name="pwdCheck"
          placeholder="비밀번호 재확인"
          onChange={handleChange}
        />
        <Input
          isLabel={true}
          name="name"
          labelName="이름"
          type="text"
          placeholder="이름"
          onChange={handleChange}
        />
        <FlexBox
          width="310px"
          height="auto"
          justifyContent="space-between"
          alignItems="center"
        >
          <Input
            width="260px"
            isLabel={true}
            labelWidth="260px"
            labelName="이메일"
            type="email"
            name="email"
            placeholder="이메일"
            onChange={handleChange}
          />
          <Button
            type="button"
            name="email"
            width="40px"
            height="40px"
            fontSize="12px"
            weight="light"
            margin="24px 0 0 0"
            padding="5px"
            backgroundColor="#864fc8"
            onClick={handleCheck}
          >
            중복확인
          </Button>
        </FlexBox>
      </FlexBox>
      <Button
        type="submit"
        backgroundColor="#864fc8"
        width="310px"
        fontSize="1.2rem"
        margin="50px auto 0"
      >
        가입하기
      </Button>
    </Form>
  );
}

export { SignUpScreen };
