import React from "react";
import styled from "styled-components";
import SubTitle from "./SubTitle";
import TextArea, { TextAreaProps } from "./TextArea";
import Button from "../Button";
import Chip from "../Chip";
import { BucketTypeEnum, ButtonColor } from "../../@types/enums";

interface InputBoxProps extends TextAreaProps {
  title?: string;
  placeholder: string;
  buttonText: string;
  onClickButton?: () => void;
  textarea?: boolean;
  value?: string;
}

export default function InputBox({
  title,
  placeholder,
  buttonText,
  onClickButton,
  textarea,
  onInputChange,
  onTextAreaChange,
  value,
}: InputBoxProps) {
  const [bucketType, setBucketType] = React.useState<BucketTypeEnum>(
    BucketTypeEnum.BT001
  );
  return (
    <Wrap gap="20px">
      {title && <SubTitle text={title}></SubTitle>}
      <ChipWrap>
        {/* map 돌리기 */}
        <Chip
          text="꾸준히!"
          isFocus={bucketType === BucketTypeEnum.BT001}
          onClick={() => setBucketType(BucketTypeEnum.BT001)}
        />
        <Chip
          text="일년안에!"
          isFocus={bucketType === BucketTypeEnum.BT002}
          onClick={() => setBucketType(BucketTypeEnum.BT002)}
        />
        <Chip
          text="오랫동안!"
          isFocus={bucketType === BucketTypeEnum.BT003}
          onClick={() => setBucketType(BucketTypeEnum.BT003)}
        />
      </ChipWrap>
      <TextArea
        placeholder={placeholder}
        textarea={textarea}
        onInputChange={onInputChange}
        onTextAreaChange={onTextAreaChange}
        value={value}
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
export const ChipWrap = styled.ul`
  display: flex;
  gap: 8px;
`;
