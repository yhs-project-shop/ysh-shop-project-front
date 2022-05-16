import React from "react";
import styled from "styled-components";

function Image(props: {
  src: string;
  width?: string;
  height?: string;
  alt: string;
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

const StyledImg = styled.img<{ width?: string; height?: string }>`
  ${(props) => (props.width ? `width: ${props.width}` : "")};
  ${(props) => (props.height ? `height: ${props.height}` : "")};
`;

export { Image };
