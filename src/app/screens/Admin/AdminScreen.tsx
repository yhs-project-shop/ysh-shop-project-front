import React, { useState } from "react";
import {
  Button,
  FlexBox,
  Form,
  ImageUpload,
  Input,
  Title,
} from "../../components";
import { TextBox } from "../../components/TextBox";

type ProductForm = {
  name: string;
  brand: string;
  category: string;
  price: number;
  desc: string;
  img: string;
};

function AdminScreen() {
  // prop destruction

  // lib hooks

  // state, ref, querystring hooks
  const [inputData, setInputData] = useState<ProductForm>({
    name: "",
    brand: "",
    category: "",
    price: 0,
    desc: "",
    img: "",
  });

  // form hooks

  // query hooks

  // calculated values

  // effects

  // handlers

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> &
      React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("제품등록 폼 제출 완료~!");
  };

  console.log("제품등록 폼: ", inputData);

  return (
    <Form
      method="post"
      onSubmit={handleSubmit}
      width="90%"
      height="600px"
      margin=" 50px auto"
    >
      <Title type="h2">제품등록</Title>
      <FlexBox height="auto">
        <FlexBox padding="30px" justifyContent="center" alignItems="center">
          <ImageUpload />
        </FlexBox>
        <FlexBox
          height="500px"
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          margin="0 auto"
        >
          <Input
            isLabel={true}
            labelName="제품명"
            name="name"
            type="text"
            placeholder="제품명"
            onChange={handleChange}
          />
          <Input
            isLabel={true}
            labelName="브랜드"
            name="brand"
            type="text"
            placeholder="브랜드"
            onChange={handleChange}
          />
          <Input
            isLabel={true}
            labelName="카테고리"
            name="category"
            type="text"
            placeholder="카테고리"
            onChange={handleChange}
          />
          <Input
            isLabel={true}
            labelName="가격"
            name="price"
            type="text"
            placeholder="가격"
            onChange={handleChange}
          />
          <TextBox
            isLabel={true}
            labelName="상세 설명"
            name="pwd"
            placeholder="제품 상세 설명"
            onChange={handleChange}
          />
          <Button
            backgroundColor="#864fc8"
            fontSize="1.2rem"
            margin="30px auto 0"
            type="submit"
          >
            제품 등록
          </Button>
        </FlexBox>
      </FlexBox>
    </Form>
  );
}

export { AdminScreen };
