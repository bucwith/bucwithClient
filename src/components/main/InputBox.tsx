import React from "react";
import styled from "styled-components";
import SubTitle from "./SubTitle";
import TextArea from "./TextArea";
import Button from "../Button";
import { ButtonColor } from "../../@types/enums";

interface InputBoxProps {
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
}: InputBoxProps) {
  return (
    <Wrap gap="20px">
      {title && <SubTitle text={title}></SubTitle>}
      <TextArea placeholder={placeholder} textarea={textarea} />
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
  gap: string;
}
const Wrap = styled.div<WrapProps>`
  padding: 30px 20px;
  background: rgba(52, 55, 68, 0.5);
  backdrop-filter: blur(15px);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap};
`;
