import React from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
};

const TitleText = styled.h1`
  font-size: 26px;
  font-weight: 700;
  color: white;
  line-height: 30.47px;
`;

export default function Title({ text }: Props) {
  return <TitleText>{text}</TitleText>;
}

