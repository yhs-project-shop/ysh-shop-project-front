import React from "react";
import styled from "styled-components";
import { FlexBox } from "../FlexBox";

type SelectProps = {
  onChange?: React.ChangeEventHandler<HTMLSelectElement> &
    React.FormEventHandler<HTMLDivElement>;
  optionList: Array<{ name: string }>;
  isLabel?: boolean;
  name?: string;
  defaultValue?: string;
  labelWidth?: string;
  labelHeight?: string;
  labelName?: string;
  width?: string;
  height?: string;
  padding?: string;
  fontSize?: string;
  fontColor?: string;
  border?: string;
  radius?: string;
  margin?: string;
  boxSizing?: string;
};

function Select(props: SelectProps) {
  // prop destruction
  const { optionList, isLabel, labelHeight, labelWidth, labelName } = props;

  // lib hooks

  // state, ref, querystring hooks

  // form hooks

  // query hooks

  // calculated values

  // effects

  // handlers
  return isLabel ? (
    <FlexBox width={labelWidth} height={labelHeight} direction="column">
      <StyledLabel htmlFor={labelName}>{labelName}</StyledLabel>
      <StyledSelect {...props}>
        {optionList.map((item) => {
          return <option key={item.name}>{item.name}</option>;
        })}
      </StyledSelect>
    </FlexBox>
  ) : (
    <StyledSelect {...props}>
      {optionList.map((item) => {
        return <option key={item.name}>{item.name}</option>;
      })}
    </StyledSelect>
  );
}

Select.defaultProps = {
  width: "300px",
  height: "35px",
  margin: "0",
  padding: "0 0 0 10px",
  boxSizing: "border-box",
  labelHeight: "60px",
  labelWidth: "300px",
};

const StyledLabel = styled.label``;

const StyledSelect = styled.select<SelectProps>`
  border: 1px solid #c9c9c9;
  &:hover {
    cursor: pointer;
  }
  &::placeholder {
    color: #b0b0b0;
  }
  border-radius: 4px;
  ${(props) => (props.width ? `width: ${props.width}` : "")};
  ${(props) => (props.height ? `height: ${props.height}` : "")};
  ${(props) => (props.radius ? `border-radius: ${props.radius}` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")};
  ${(props) => (props.padding ? `padding: ${props.padding}` : "")};
  ${(props) => (props.border ? `border: ${props.border}` : "")};
  ${(props) => (props.boxSizing ? `box-sizing: ${props.boxSizing}` : "")};
  ${(props) => (props.fontSize ? `font-size: ${props.fontSize}` : "")};
  ${(props) => (props.fontColor ? `color: ${props.fontColor}` : "")};
`;

export { Select };
