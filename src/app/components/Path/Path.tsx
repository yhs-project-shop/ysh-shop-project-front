import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

function Path(props: {
  url: string;
  text?: string;
  children?: string | React.ReactElement;
  height?: string;
  borderBottom?: string;
  margin?: string;
  color?: string;
}) {
  // prop destruction
  const { url, children, text } = props;

  // lib hooks
  const history = useHistory();

  // state, ref, querystring hooks

  // form hooks

  // query hooks

  // calculated values

  // effects

  // handlers
  const handleLink = (e: React.MouseEvent<HTMLDivElement>) => {
    history.push(`${url}`);
  };

  return (
    <StyledLink {...props} onClick={handleLink}>
      {children}
      {text}
    </StyledLink>
  );
}

Path.defaultProps = {
  color: "#000",
};

const StyledLink = styled.div<{
  height?: string;
  margin?: string;
}>`
  &:hover {
    cursor: pointer;
  }
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  ${(props) => (props.height ? `height: ${props.height}` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")};
  ${(props) => (props.color ? `color: ${props.color}` : "")};
`;

export { Path };
