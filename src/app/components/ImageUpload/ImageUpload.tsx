import React from "react";
import styled from "styled-components";
import { Input } from "../Input";

function ImageUpload() {
  // prop destruction

  // lib hooks

  // state, ref, querystring hooks

  // form hooks

  // query hooks

  // calculated values

  // effects

  // handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const count
    console.log("이미지 업로드 인풋 체인지: ", e.target.files);
  };

  return (
    <Container>
      ImageUpload
      <div>여기가 이미지</div>
      <div>업로드</div>
      <StyledLabel htmlFor="img">업로드</StyledLabel>
      <StyledInput type="file" id="img" onChange={handleChange} multiple />
    </Container>
  );
}

const Container = styled.div`
  width: 300px;
  height: 300px;
  border: 2px solid pink;
`;

const StyledLabel = styled.label`
  display: block;
  width: 50px;
  height: 30px;
  font-size: 14px;
  text-align: center;
  line-height: 30px;
  color: white;
  background-color: #864fc8;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledInput = styled(Input)`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export { ImageUpload };
