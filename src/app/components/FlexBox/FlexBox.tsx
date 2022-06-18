import React from "react";
import styled from "styled-components";

type FlexBoxProps = {
  children: React.ReactNode;
  direction?: string;
  wrap?: string;
  justifyContent?: string;
  alignContent?: string;
  alignItems?: string;
  flexBasis?: string;
  flexGrow?: string;
  flexShrink?: string;
  alignSelf?: string;
  width: string;
  height?: string;
  border?: string;
  borderBottom?: string;
  padding?: string;
  margin?: string;
  boxSizing?: string;
  radius?: string;
  backgroundColor?: string;
  cursor?: string;
  position?: string;
  bottom?: string;
};

function FlexBox(props: FlexBoxProps) {
  // prop destruction

  // lib hooks

  // state, ref, querystring hooks

  // form hooks

  // query hooks

  // calculated values

  // effects

  // handlers
  return <StyledBox {...props}>{props.children}</StyledBox>;
}

FlexBox.defaultProps = {
  width: "100%",
  height: "100%",
  direction: "row",
  margin: "0",
  padding: "0",
};

const StyledBox = styled.div<FlexBoxProps>`
  display: flex;
  box-sizing: border-box;
  ${(props) => (props.cursor ? `cursor: ${props.cursor}` : "")};
  ${(props) => (props.boxSizing ? `box-sizing: ${props.boxSizing}` : "")};
  ${(props) => (props.direction ? `flex-direction: ${props.direction}` : "")};
  ${(props) =>
    props.backgroundColor ? `background-color: ${props.backgroundColor}` : ""};
  ${(props) => (props.wrap ? `flex-wrap: ${props.wrap}` : "")};
  ${(props) =>
    props.justifyContent ? `justify-content: ${props.justifyContent}` : ""};
  ${(props) =>
    props.alignContent ? `align-content: ${props.alignContent}` : ""};
  ${(props) => (props.alignItems ? `align-items: ${props.alignItems}` : "")};
  ${(props) => (props.flexBasis ? `flex-basis: ${props.flexBasis}` : "")};
  ${(props) => (props.flexGrow ? `flex-grow: ${props.flexGrow}` : "")};
  ${(props) => (props.flexShrink ? `flex-shrink: ${props.flexShrink}` : "")};
  ${(props) => (props.alignSelf ? `align-self: ${props.alignSelf}` : "")};

  ${(props) => (props.width ? `width: ${props.width}` : "")};
  ${(props) => (props.height ? `height: ${props.height}` : "")};
  ${(props) => (props.border ? `border: ${props.border}` : "")};
  ${(props) =>
    props.borderBottom ? `border-bottom: ${props.borderBottom}` : ""};
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")};
  ${(props) => (props.padding ? `padding: ${props.padding}` : "")};
  ${(props) => (props.radius ? `border-radius: ${props.radius}` : "")};
  ${(props) => (props.position ? `position: ${props.position}` : "")};
  ${(props) => (props.bottom ? `bottom: ${props.bottom}` : "")};
`;

export { FlexBox };
