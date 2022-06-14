import React from "react";
import styled from "styled-components";

type TextProps = {
  children: string;
  color?: string;
  size?: string;
  weight?: string;
  margin?: string;
  height?: string;
};

function Text(props: TextProps) {
  // prop destruction
  const { children } = props;

  // lib hooks

  // state, ref, querystring hooks

  // form hooks

  // query hooks

  // calculated values

  // effects

  // handlers
  return <StyledSpan {...props}>{children}</StyledSpan>;
}

const StyledSpan = styled.span<TextProps>`
  margin: 0;
  padding: 0;
  ${(props) => (props.height ? `height: ${props.height}` : "")};
  ${(props) => (props.color ? `color: ${props.color}` : "")};
  ${(props) => (props.size ? `font-size: ${props.size}` : "")};
  ${(props) => (props.weight ? `font-weight: ${props.weight}` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")};
`;

export { Text };
