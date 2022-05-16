import React from "react";
import styled from "styled-components";
import { FlexBox } from "../FlexBox";

type TextBoxProps = {
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  boxSizing?: string;
  isLabel?: boolean;
  name?: string;
  labelName?: string;
  labelWidth?: string;
  labelHeight?: string;
  placeholder?: string;
  border?: string;
  fontSize?: string;
  fontColor?: string;
  radius?: string;
  cursor?: "pointer" | "text";
};

function TextBox(props: TextBoxProps) {
  // prop destruction
  const { labelName, isLabel, labelWidth, labelHeight } = props;

  // lib hooks

  // state, ref, querystring hooks

  // form hooks

  // query hooks

  // calculated values

  // effects

  // handlers
  return isLabel ? (
    <FlexBox
      width={labelWidth}
      height={labelHeight}
      direction="column"
      justifyContent="center"
    >
      <StyledLabel htmlFor={labelName}>{labelName}</StyledLabel>
      <StyledTextBox {...props} />
    </FlexBox>
  ) : (
    <StyledTextBox {...props} />
  );
}

TextBox.defaultProps = {
  width: "300px",
  height: "100px",
  margin: "0",
  padding: "8px 12px",
  boxSizing: "border-box",
  cursor: "text",
  labelHeight: "130px",
  labelWidth: "300px",
  fontSize: "1rem",
  radius: "4px",
};

const StyledLabel = styled.label`
  font-size: 0.9rem;
  margin-bottom: 6px;
`;

const StyledTextBox = styled.textarea<TextBoxProps>`
  box-sizing: border-box;
  resize: none;
  border: 1px solid #c9c9c9;
  &::placeholder {
    color: #b0b0b0;
  }
  /* TODO: hover 고치기..  */
  ${(props) => (props.cursor ? `&:hover{cursor: ${props.cursor}}` : "")}
  ${(props) => (props.width ? `width: ${props.width}` : "")};
  ${(props) => (props.height ? `height: ${props.height}` : "")};
  ${(props) => (props.border ? `border: ${props.border}` : "")};
  ${(props) => (props.radius ? `border-radius: ${props.radius}` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")};
  ${(props) => (props.padding ? `padding: ${props.padding}` : "")};
  ${(props) => (props.boxSizing ? `box-sizing: ${props.boxSizing}` : "")};
  ${(props) => (props.fontSize ? `font-size: ${props.fontSize}` : "")};
  ${(props) => (props.fontColor ? `color: ${props.fontColor}` : "")};
`;

export { TextBox };
