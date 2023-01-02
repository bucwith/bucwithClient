import React, { ChangeEventHandler, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import iconPencil from "../../assets/icon-pencil.png";
import { TEXTAREA_HEIGHT } from "../../constant";

export const inputCss = `
  width: 100%;
  background: rgba(240, 243, 245, 0.2);
  border-radius: 16px;
  border: none;
  padding: 20px;
  color: white;
  font-weight: 500;
  font-size: 16px;
  &::placeholder {
    padding: 0 0 0 30px;
    line-height: top;
    background-repeat: no-repeat;
    background-image: url(${iconPencil});
    opacity: 0.5;
  }
`;

const Input = styled.input`
  ${inputCss};
`;

export const InputArea = styled.textarea`
  height: ${TEXTAREA_HEIGHT}px;
  ${inputCss};
  &:focus {
    outline: none;
  }
`;

export interface TextAreaProps {
  placeholder?: string;
  textarea?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  value?: string;
  disabled?: boolean;
  inputValue?: string;
  setInputValue?: React.Dispatch<React.SetStateAction<string>>;
}
export default function TextArea({
  placeholder,
  textarea,
  onChange,
  value,
  setInputValue,
  inputValue,
}: TextAreaProps) {
  const inputRef = useRef<HTMLTextAreaElement>();

  useEffect(() => {
    const textAreaScrollHeight = inputRef.current?.scrollHeight;
    if (textAreaScrollHeight > TEXTAREA_HEIGHT) {
      setInputValue((prev) => prev.slice(0, -1));
    }
  }, [inputValue]);

  return (
    <div>
      {textarea ? (
        <InputArea
          ref={(ref) => {
            if (ref) {
              inputRef.current = ref;
            }
          }}
          placeholder={placeholder}
          onChange={onChange}
          value={inputValue}
          maxLength={200}
        />
      ) : (
        <Input
          placeholder={placeholder}
          minLength={2}
          maxLength={8}
          onChange={onChange}
          value={value}
        />
      )}
    </div>
  );
}
