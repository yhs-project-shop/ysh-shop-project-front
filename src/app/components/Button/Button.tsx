import React from "react";
import styled from "styled-components";

type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLElement>;
  type: "button" | "submit" | "reset";
  children: string | React.ReactElement;
  name?: string;
  width?: string;
  height?: string;
  border?: string;
  radius?: string;
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  boxSizing?: string;
  weight?: string;
  color?: string;
  fontSize?: string;
  display?: string;
};

function Button(props: ButtonProps) {
  // prop destruction

  // lib hooks

  // state, ref, querystring hooks

  // form hooks

  // query hooks

  // calculated values

  // effects

  // handlers
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

Button.defaultProps = {
  type: "button",
  width: "324px",
  height: "43px",
  margin: "0",
  padding: "7px 0 10px",
  boxSizing: "border-box",
  border: "none",
  color: "white",
  backgroundColor: "white",
};

const StyledButton = styled.button<ButtonProps>`
  display: block;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
  }
  ${(props) => (props.width ? `width: ${props.width}` : "")};
  ${(props) => (props.height ? `height: ${props.height}` : "")};
  ${(props) => (props.border ? `border: ${props.border}` : "")};
  ${(props) => (props.radius ? `border-radius: ${props.radius}` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")};
  ${(props) => (props.padding ? `padding: ${props.padding}` : "")};
  ${(props) =>
    props.backgroundColor ? `background-color: ${props.backgroundColor}` : ""};
  ${(props) => (props.boxSizing ? `box-sizing: ${props.boxSizing}` : "")};
  ${(props) => (props.color ? `color: ${props.color}` : "")};
  ${(props) => (props.weight ? `font-weight: ${props.weight}` : "")};
  ${(props) => (props.fontSize ? `font-size: ${props.fontSize}` : "")};
  ${(props) => (props.display ? `display: ${props.display}` : "")};
`;

export { Button };
