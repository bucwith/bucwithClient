import React from "react";
import styled from "styled-components";

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

const ChipButton = styled.button`
  padding: 10px 16px;
  border-radius: 30px;
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid white;
  font-size: 1.4rem;
`;

const ChipFocusButton = styled.button`
  padding: 10px 16px;
  border-radius: 30px;
  background-color: white;
  border: 1px solid white;
  color: black;
  font-size: 1.4rem;
`;

export default Chip;
