import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PrimaryText = styled.h1`
  font-weight: 700;
  font-size: 26px;
  white-space: pre-wrap;
`;

const SecondaryText = styled.h2`
  font-weight: 400;
  font-size: 16px;
  white-space: pre-wrap;
`;

interface TitleProps {
  primary: string;
  secondary?: string;
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
