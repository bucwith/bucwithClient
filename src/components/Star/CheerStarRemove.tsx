import React from "react";
import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import { DeleteCheerStar } from "../../api/my-api";
import { PrimaryBlackButton, PrimaryButton } from "../Button";
import SubTitle from "../main/SubTitle";
import { FlexBox, ModalBlackWrapper, ModalWrapper } from "../Wrapper";
import { ModalBox } from "./style";

interface CheerStarRemoveProps {
  setIsRemoveModalShow: React.Dispatch<React.SetStateAction<boolean>>;
  starId: number;
}
const CheerStarRemove = ({
  setIsRemoveModalShow,
  starId,
}: CheerStarRemoveProps) => {
  const queryClient = useQueryClient();

  const { mutate: removeStar } = useMutation(["removeStar"], () =>
    DeleteCheerStar(starId)
  );

  const handleRemoveButton = () => {
    removeStar();
    setIsRemoveModalShow(false);
    queryClient.invalidateQueries(["removeStar"]);
  };

  return (
    <ModalWrapper>
      <ModalBox gap="30px">
        <SubTitle isCentered={true} text="이 풍등을 삭제할까요?" />
        <Description>{`‘삭제하기’ 버튼을  누르면\n선택한 응원별이 삭제됩니다.`}</Description>
        <FlexBox direction="row" gap="10px">
          <PrimaryBlackButton onClick={() => handleRemoveButton()}>
            삭제하기
          </PrimaryBlackButton>
          <PrimaryButton onClick={() => setIsRemoveModalShow(false)}>
            안할래요
          </PrimaryButton>
        </FlexBox>
      </ModalBox>
      <ModalBlackWrapper />
    </ModalWrapper>
  );
};

export default CheerStarRemove;

const Description = styled.pre`
  font-weight: 400;
  font-size: 16px;
  color: white;
  text-align: center;
  line-height: 22px;
`;
