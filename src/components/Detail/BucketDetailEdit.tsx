import React from "react";
import { useMutation } from "react-query";
import styled from "styled-components";
import { bucketType } from "../../@types/enums";
import { editBucket } from "../../api/my-api";
import { PrimaryBlackButton, PrimaryButton } from "../Button";
import Chip from "../Chip";
import SubTitle from "../main/SubTitle";
import { InputArea } from "../main/TextArea";
import {
  FlexBox,
  ModalBlackWrapper,
  ModalWrapper,
  VerticalCentered,
} from "../Wrapper";
import CloseIcon from "../../assets/icon_close.png";
interface BucketDetailEditProps {
  contents: string;
  setIsEditBucketShow: React.Dispatch<React.SetStateAction<boolean>>;
  setIsRemoveBucketShow: React.Dispatch<React.SetStateAction<boolean>>;
  bucketId: number;
}

const BucketDetailEdit = ({
  contents,
  setIsEditBucketShow,
  setIsRemoveBucketShow,
  bucketId,
}: BucketDetailEditProps) => {
  const [inputValue, setInputValue] = React.useState(contents);
  const [type, setType] = React.useState<keyof typeof bucketType>(
    bucketType.BT001
  );

  const { mutate } = useMutation(
    () =>
      editBucket({
        bucketId,
        contents: inputValue.trim(),
        type: type,
      }),
    {
      onSuccess: (data) => {
        setIsEditBucketShow(false);
        setInputValue(data.bucket?.contents);
      },
    }
  );

  const handleRemoveModalButton = () => {
    setIsEditBucketShow(false);
    setIsRemoveBucketShow(true);
  };

  const handleEditSubmitButton = () => {
    mutate();
  };

  return (
    <>
      <ModalWrapper>
        <VerticalCentered gap="40px" style={{ width: "100%" }}>
          <Wrap gap="20px" style={{ position: "relative" }}>
            <CloseButton
              src={CloseIcon}
              onClick={() => setIsEditBucketShow(false)}
            />
            <SubTitle text="어떤 종류의 버킷리스트인가요?" />
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
            <InputArea
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
            <FlexBox direction="row" gap="10px">
              <PrimaryBlackButton onClick={() => handleRemoveModalButton()}>
                삭제
              </PrimaryBlackButton>
              <PrimaryButton
                onClick={() => handleEditSubmitButton()}
                disabled={!inputValue}
              >
                수정하기
              </PrimaryButton>
            </FlexBox>
          </Wrap>
        </VerticalCentered>
      </ModalWrapper>
      <ModalBlackWrapper />
    </>
  );
};

export default BucketDetailEdit;

interface WrapProps {
  gap?: string;
}
export const Wrap = styled.div<WrapProps>`
  padding: 30px 20px;
  background: rgba(52, 55, 68);
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

const CloseButton = styled.img`
  position: absolute;
  top: 30px;
  right: 20px;
`;
