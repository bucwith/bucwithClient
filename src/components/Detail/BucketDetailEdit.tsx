import React from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { bucketType } from "../../@types/enums";
import { editBucket } from "../../api/my-api";
import { PrimaryBlackButton, PrimaryButton } from "../Button";
import Chip from "../Chip";
import SubTitle from "../main/SubTitle";
import TextArea from "../main/TextArea";
import {
  FlexBox,
  ModalBlackWrapper,
  ModalWrapper,
  VerticalCentered,
} from "../Wrapper";

interface BucketDetailEditProps {
  contents: string;
  setIsEditBucketShow: React.Dispatch<React.SetStateAction<boolean>>;
  setIsRemoveBucketShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const BucketDetailEdit = ({
  contents,
  setIsEditBucketShow,
  setIsRemoveBucketShow,
}: BucketDetailEditProps) => {
  const [inputValue, setInputValue] = React.useState(contents);
  const navigate = useNavigate();
  const [type, setType] = React.useState<keyof typeof bucketType>(
    bucketType.BT001
  );

  const addBucketMutation = useMutation(
    () =>
      editBucket({
        userId: 1,
        contents: inputValue,
        type: type,
      }),
    {
      onSuccess: () =>
        navigate("/me/completion", {
          state: {
            contents: inputValue,
          },
        }),
    }
  );

  const handleRemoveModalButton = () => {
    setIsEditBucketShow(false);
    setIsRemoveBucketShow(true);
  };

  const handleEditSubmitButton = () => {
    setIsEditBucketShow(false);
    addBucketMutation.mutate();
  };

  return (
    <ModalWrapper>
      <VerticalCentered gap="40px" style={{ width: "100%", zIndex: 1000 }}>
        <Wrap gap="20px">
          {contents && <SubTitle text={contents}></SubTitle>}
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
            textarea={true}
            onTextAreaChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <FlexBox direction="row" gap="10px">
            <PrimaryBlackButton onClick={() => handleRemoveModalButton()}>
              삭제
            </PrimaryBlackButton>
            <PrimaryButton onClick={() => handleEditSubmitButton()}>
              수정하기
            </PrimaryButton>
          </FlexBox>
        </Wrap>
      </VerticalCentered>
      <ModalBlackWrapper />
    </ModalWrapper>
  );
};

export default BucketDetailEdit;

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
