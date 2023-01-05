import React from "react";
import styled, { css } from "styled-components";

interface Chiptypes {
  text: string;
  isFocus: boolean;
  onClick: () => void;
}

function Chip({ text, isFocus, onClick }: Chiptypes) {
  return (
    <ListItem onClick={onClick}>
      {isFocus ? (
        <ChipFocusButton>{text}</ChipFocusButton>
      ) : (
        <ChipButton>{text}</ChipButton>
      )}
    </ListItem>
  );
}
const ListItem = styled.li`
  list-style: none;
  margin: 0px;
  padding: 0px;
`;

const chipStype = css`
  padding: 10px 16px;
  border-radius: 30px;
  color: white;
  border: 1px solid white;
  font-size: 1.4rem;
  font-weight: 700;
`;

const ChipButton = styled.button`
  ${chipStype}
  background-color: inherit;
`;

const ChipFocusButton = styled.button`
  ${chipStype}
  background-color: white;
  color: black;
  font-size: 1.4rem;
`;

export default Chip;
