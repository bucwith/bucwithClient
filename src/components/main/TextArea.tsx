import React, { ChangeEventHandler, useEffect, useRef } from "react";
import styled from "styled-components";
import iconPencil from "../../assets/images/icon-pencil.png";
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
  outline: none;
  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
    padding: 0 0 0 30px;
    line-height: top;
    background-repeat: no-repeat;
    background-image: url(${iconPencil});
  color: rgba(255, 255, 255, 0.8);
  }
  @media (max-width: 344px) {
     &::placeholder {
      font-size: 1.3rem;
       background-size:1.3rem;
     }
     padding: 1.5rem;
     
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
  height?: string;
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
    <div style={{ flexGrow: 1 }}>
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
