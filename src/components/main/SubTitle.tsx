import React from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
};

const SubTitleText = styled.h2`
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: white;
`;

export default function SubTitle({ text }: Props) {
  return <SubTitleText>{text}</SubTitleText>;
}

