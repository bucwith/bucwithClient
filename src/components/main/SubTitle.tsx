import React from "react";
import styled from "styled-components";

type Props = {
  text: string;
  isCentered?: boolean;
};

interface SubtitleProps {
  isCentered: boolean | undefined;
}

const SubTitleText = styled.h2<SubtitleProps>`
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: white;
  text-align: ${(props) => (props.isCentered ? "center" : "left")};
`;

export default function SubTitle({ text, isCentered }: Props) {
  return <SubTitleText isCentered={isCentered}>{text}</SubTitleText>;
}
