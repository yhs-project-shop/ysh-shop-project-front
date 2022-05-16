import React from "react";
import styled from "styled-components";
import { FlexBox } from "../FlexBox";

type InputProps = {
  onChange?: React.FormEventHandler<HTMLDivElement>;
  type: string;
  value?: string;
  placeholder?: string;
  name?: string;
  labelName?: string;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  boxSizing?: string;
  border?: string;
  fontSize?: string;
  fontColor?: string;
  borderBottom?: string;
  borderTop?: string;
  radius?: string;
  isLabel?: boolean;
  labelWidth?: string;
  labelHeight?: string;
  cursor?: "pointer" | "text";
  id?: string;
  multiple?: boolean;
};

function Input(props: InputProps) {
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
      <StyledInput {...props} />
    </FlexBox>
  ) : (
    <StyledInput {...props} />
  );
}

Input.defaultProps = {
  width: "324px",
  height: "43px",
  margin: "0",
  padding: "8px 12px",
  boxSizing: "border-box",
  cursor: "text",
  labelHeight: "65px",
  labelWidth: "310px",
  fontSize: "18px",
};

const StyledLabel = styled.label`
  font-size: 0.9rem;
  margin-bottom: 6px;
`;

const StyledInput = styled.input<InputProps>`
  box-sizing: border-box;
  border: 1px solid #c9c9c9;
  &::placeholder {
    color: #b0b0b0;
  }
  /* TODO: hover 고치기..  */
  ${(props) => (props.cursor ? `&:hover{cursor: ${props.cursor}}` : "")}
  ${(props) => (props.width ? `width: ${props.width}` : "")};
  ${(props) => (props.height ? `height: ${props.height}` : "")};
  ${(props) => (props.border ? `border: ${props.border}` : "")};
  ${(props) =>
    props.borderBottom ? `border-bottom: ${props.borderBottom}` : ""};
  ${(props) => (props.borderTop ? `border-top: ${props.borderTop}` : "")};
  ${(props) => (props.radius ? `border-radius: ${props.radius}` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")};
  ${(props) => (props.padding ? `padding: ${props.padding}` : "")};
  ${(props) => (props.boxSizing ? `box-sizing: ${props.boxSizing}` : "")};
  ${(props) => (props.fontSize ? `font-size: ${props.fontSize}` : "")};
  ${(props) => (props.fontColor ? `color: ${props.fontColor}` : "")};
`;

export { Input };
