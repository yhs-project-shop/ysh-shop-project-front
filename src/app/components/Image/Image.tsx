import React from "react";
import styled from "styled-components";

type ImageProps = {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  margin?: string;
  cursor?: string;
};

function Image(props: ImageProps) {
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

const StyledImg = styled.img<ImageProps>`
  ${(props) => (props.cursor ? `cursor: ${props.cursor}` : "")};
  ${(props) => (props.width ? `width: ${props.width}` : "")};
  ${(props) => (props.height ? `height: ${props.height}` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")};
`;

export { Image };
