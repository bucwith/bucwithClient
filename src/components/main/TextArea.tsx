import React from "react";
import styled from "styled-components";
import iconPencil from "../../assets/icon-pencil.png";

const inputCss = `
  width: 100%;
  background: rgba(240, 243, 245, 0.2);
  border-radius: 16px;
  border: none;
  padding: 20px;
  color: rgba(255, 255, 255, 0.8);
  &::placeholder {
    padding: 0 0 0 30px;
    line-height: top;
    background-repeat: no-repeat;
    background-image: url(${iconPencil});
    color: rgba(255, 255, 255, 0.8);
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }
`;

const Input = styled.input`
  ${inputCss};
`;

const InputArea = styled.textarea`
  ${inputCss};
  height: 164px;
  resize: none;
`;

interface TextAreaProps {
  placeholder: string;
  textarea?: boolean;
}
export default function TextArea({ placeholder, textarea }: TextAreaProps) {
  return (
    <div>
      {textarea ? (
        <InputArea placeholder={placeholder} />
      ) : (
        <Input placeholder={placeholder} />
      )}
    </div>
  );
}
