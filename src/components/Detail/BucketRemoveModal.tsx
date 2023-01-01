import React from "react";
import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import { removeBucket } from "../../api/my-api";
import { PrimaryBlackButton, PrimaryButton } from "../Button";
import SubTitle from "../main/SubTitle";
import { ModalBox } from "../Star/style";
import { FlexBox, ModalBlackWrapper, ModalWrapper } from "../Wrapper";
interface BucketRemoveModalProps {
  bucketId: number;
  setIsRemoveBucketShow: React.Dispatch<React.SetStateAction<boolean>>;
}
const BucketRemoveModal = ({
  bucketId,
  setIsRemoveBucketShow,
}: BucketRemoveModalProps) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    ["removeBucket"],
    () => removeBucket(bucketId),
    { onSuccess: () => queryClient.invalidateQueries(["getData"]) }
  );

  const handleRemoveButton = () => {
    mutate();
    setIsRemoveBucketShow(false);
  };

  return (
    <ModalWrapper>
      <ModalBox gap="30px">
        <SubTitle isCentered={true} text="이 풍등을 삭제할까요?" />
        <Description>{`'삭제하기’ 버튼을 누르면\n벅윗 풍등과 응원별이 모두 삭제됩니다.`}</Description>
        <FlexBox direction="row" gap="10px">
          <PrimaryBlackButton onClick={() => handleRemoveButton()}>
            삭제하기
          </PrimaryBlackButton>
          <PrimaryButton onClick={() => setIsRemoveBucketShow(false)}>
            안할래요
          </PrimaryButton>
        </FlexBox>
      </ModalBox>
      <ModalBlackWrapper />
    </ModalWrapper>
  );
};

export default BucketRemoveModal;

const Description = styled.pre`
  font-weight: 400;
  font-size: 16px;
  color: white;
  text-align: center;
  line-height: 22px;
`;
