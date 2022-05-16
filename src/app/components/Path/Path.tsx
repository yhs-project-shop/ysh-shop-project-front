import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Path(props: { to: string; children: string; height?: string }) {
  // prop destruction
  const { to, children } = props;

  // lib hooks

  // state, ref, querystring hooks

  // form hooks

  // query hooks

  // calculated values

  // effects

  // handlers
  return (
    <StyledLink {...props} to={to}>
      {children}
    </StyledLink>
  );
}

const StyledLink = styled(Link)<{
  to: string;
  children: string;
  height?: string;
}>`
  color: black;
  text-decoration: none;
  &:hover {
    color: #b261cd;
  }
  ${(props) => (props.height ? `height: ${props.height}` : "")};
`;

export { Path };
