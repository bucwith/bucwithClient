import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PrimaryText = styled.h1<PrimaryTextProps>`
  font-weight: ${(props) => props.fontWeight ? props.fontWeight : "700"};
  font-size: ${(props) => props.fontSize ? props.fontSize : "26px"};
  white-space: pre-wrap;
  color: ${theme.colors.whiteColor};
  line-height: ${(props) => props.lineHeight ? props.lineHeight : "30px"};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textAlign};
  font-family: ${(props) => props.fontFamily};
`;

const SecondaryText = styled.h2`
  font-weight: 400;
  font-size: 16px;
  white-space: pre-wrap;
  color: ${theme.colors.whiteColor};
`;

interface TitleProps {
  primary: string;
  secondary?: string;
}

interface PrimaryTextProps {
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: string;
  padding? : string;
  textAlign? : string;
  fontFamily? : string;
}

/**
 * 개행 넣고 싶으면 템플릿 리터럴 안에 \n 작성
 */
const Title = ({ primary, secondary }: TitleProps) => {
  return (
    <TitleWrapper>
      <PrimaryText>{primary}</PrimaryText>
      {secondary && <SecondaryText>{secondary}</SecondaryText>}
    </TitleWrapper>
  );
};

export default Title;
