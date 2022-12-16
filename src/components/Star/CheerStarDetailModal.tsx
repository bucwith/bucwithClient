import React from "react";
import styled from "styled-components";
import { ButtonColor } from "../../@types/enums";
import getIconSrc from "../../utils/getIconSrc";
import Button, { PrimaryBlackButton, PrimaryButton } from "../Button";
import { FlexBox, ModalWrapper } from "../Wrapper";
import { ModalBox } from "./style";

type StarDataType = {
  bucketId: number;
  contents: string;
  iconCode: string;
  nickname: string;
  registDate: Date;
  starId: number;
};

interface CheerStarDetailModalProps {
  starData: StarDataType;
  setIsCheerStartDetailShow: React.Dispatch<React.SetStateAction<boolean>>;
}
const CheerStarDetailModal = ({
  starData,
  setIsCheerStartDetailShow,
}: CheerStarDetailModalProps) => {
  if (Object.keys(starData).length === 0) {
    return null;
  }

  return (
    <ModalWrapper>
      <ModalBox style={{ zIndex: 100, paddingTop: "120px" }}>
        <MainIcon src={getIconSrc(starData.iconCode)} />
        <FlexBox gap="30px">
          <Title>{`${starData.nickname}님의 응원 별`}</Title>
          <Contents>{starData.contents}</Contents>
          <FlexBox gap="10px" direction="row">
            <PrimaryBlackButton style={{ width: "100px" }}>
              삭제
            </PrimaryBlackButton>
            <PrimaryButton onClick={() => setIsCheerStartDetailShow(false)}>
              확인했어요
            </PrimaryButton>
          </FlexBox>
        </FlexBox>
      </ModalBox>
      <ModalWrapper style={{ opacity: "0.7", backgroundColor: "black" }} />
    </ModalWrapper>
  );
};

export default CheerStarDetailModal;

const MainIcon = styled.img`
  width: 120px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.h1`
  color: #ffffff;
  font-weight: 700;
  font-size: 20px;
`;

const Contents = styled.p`
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
`;
