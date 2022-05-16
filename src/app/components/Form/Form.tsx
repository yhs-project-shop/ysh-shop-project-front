import React from "react";
import styled from "styled-components";

type FormProps = {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  children?: React.ReactNode;
  method: string;
  width?: string;
  height?: string;
  border?: string;
  radius?: string;
  margin?: string;
  backgroundColor?: string;
};

function Form(props: FormProps) {
  // prop destruction
  const { children } = props;

  // lib hooks

  // state, ref, querystring hooks

  // form hooks

  // query hooks

  // calculated values

  // effects

  // handlers
  return <StyledForm {...props}>{children}</StyledForm>;
}

const StyledForm = styled.form<FormProps>`
  ${(props) => (props.width ? `width: ${props.width}` : "")};
  ${(props) => (props.height ? `height: ${props.height}` : "")};
  ${(props) => (props.border ? `border: ${props.border}` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")};
  ${(props) => (props.radius ? `border-radius: ${props.radius}` : "")};
  ${(props) =>
    props.backgroundColor ? `background-color: ${props.backgroundColor}` : ""};
`;

export { Form };
