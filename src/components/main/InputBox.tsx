import React from "react";
import styled from "styled-components";
import SubTitle from "./SubTitle";
import TextArea, { TextAreaProps } from "./TextArea";
import Button from "../Button";
import Chip from '..//Chip'
import { ButtonColor } from "../../@types/enums";

interface InputBoxProps extends TextAreaProps {
  title?: string;
  placeholder: string;
  buttonText: string;
  onClickButton?: () => void;
  textarea?: boolean;
}

export default function InputBox({
  title,
  placeholder,
  buttonText,
  onClickButton,
  textarea,
  onInputChange,
  onTextAreaChange,
}: InputBoxProps) {
  return (
    <Wrap gap="20px">
      {title && <SubTitle text={title}></SubTitle>}
      <Chip text="가보자고" isFocus={ false }></Chip>
      <TextArea
        placeholder={placeholder}
        textarea={textarea}
        onInputChange={onInputChange}
        onTextAreaChange={onTextAreaChange}
      />
      <Button
        onClick={onClickButton}
        disabled={false}
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
  background: rgba(52, 55, 68, 0.5);
  backdrop-filter: blur(15px);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap};
`;
