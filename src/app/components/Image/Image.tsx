import React from "react";
import styled from "styled-components";

function Image(props: {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  margin?: string;
}) {
  // prop destruction
  const { src } = props;

  // lib hooks

  // state, ref, querystring hooks

  // form hooks

  // query hooks

  // calculated values

  // effects

  // handlers
  return <StyledImg loading="lazy" {...props} src={src} />;
}

const StyledImg = styled.img<{
  width?: string;
  height?: string;
  margin?: string;
}>`
  ${(props) => (props.width ? `width: ${props.width}` : "")};
  ${(props) => (props.height ? `height: ${props.height}` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")};
`;

export { Image };
