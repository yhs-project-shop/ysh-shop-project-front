import React from "react";
import styled from "styled-components";

function Text(props: { children: string; color?: string; size?: string }) {
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

const StyledSpan = styled.span<{ color?: string; size?: string }>`
  ${(props) => (props.color ? `color: ${props.color}` : "")};
  ${(props) => (props.size ? `font-size: ${props.size}` : "")};
`;

export { Text };
