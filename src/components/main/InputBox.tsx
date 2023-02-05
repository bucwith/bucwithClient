import React from "react";
import styled from "styled-components";
import SubTitle from "./SubTitle";
import TextArea, { TextAreaProps } from "./TextArea";
import Button from "../Button";
import Chip from "../Chip";
import { bucketType, ButtonColor } from "../../@types/enums";
import { MODAL_BGCOLOR } from "../../constant";

interface InputBoxProps extends TextAreaProps {
  title?: string;
  buttonText: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onClickButton?: () => void;
  textarea?: boolean;
  value?: string;
  type?: "BT001" | "BT002" | "BT003";
  setType?: React.Dispatch<React.SetStateAction<"BT001" | "BT002" | "BT003">>;
}

export default function InputBox({
  title,
  placeholder,
  buttonText,
  onClickButton,
  textarea,
  onChange,
  value,
  type,
  setType,
  inputValue,
  setInputValue,
}: InputBoxProps) {
  return (
    <Wrap gap="20px">
      {title && <SubTitle text={title}></SubTitle>}
      <ChipWrap>
        <Chip
          text="꾸준히!"
          isFocus={type === bucketType.BT001}
          onClick={() => setType(bucketType.BT001)}
        />
        <Chip
          text="일년안에!"
          isFocus={type === bucketType.BT002}
          onClick={() => setType(bucketType.BT002)}
        />
        <Chip
          text="오랫동안!"
          isFocus={type === bucketType.BT003}
          onClick={() => setType(bucketType.BT003)}
        />
      </ChipWrap>
      <TextArea
        placeholder={placeholder}
        textarea={textarea}
        onChange={onChange}
        value={value}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <Button
        onClick={onClickButton}
        disabled={!inputValue}
        text={buttonText}
        color={ButtonColor.Primary}
      />
    </Wrap>
  );
}

interface WrapProps {
  gap?: string;
}
export const Wrap = styled.div<WrapProps>`
  padding: 30px 20px;
  background: ${MODAL_BGCOLOR};
  backdrop-filter: blur(15px);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap};
  @media (max-width: 344px) {
    padding: 2.5rem 1.6rem;
  }
`;
export const ChipWrap = styled.ul`
  display: flex;
  gap: 8px;
`;
