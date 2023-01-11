import React from "react";
import styled from "styled-components";
import getIconSrc from "../../utils/getIconSrc";
import { PrimaryBlackButton, PrimaryButton } from "../Button";
import { FlexBox, ModalBlackWrapper, ModalWrapper } from "../Wrapper";
import { ModalBox } from "./style";
import glow from "../../assets/detail_glow.png";
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
  setIsRemoveModalShow?: React.Dispatch<React.SetStateAction<boolean>>;
}
const CheerStarDetailModal = ({
  starData,
  setIsCheerStartDetailShow,
  setIsRemoveModalShow,
}: CheerStarDetailModalProps) => {
  if (Object.keys(starData).length === 0) {
    return null;
  }

  const handleRemoveButton = () => {
    setIsCheerStartDetailShow(false);
    setIsRemoveModalShow(true);
  };

  return (
    <ModalWrapper>
      <ModalBox style={{ paddingTop: "120px" }}>
        <MainIconBox>
          <FlexBox
            style={{ width: "100%", height: "100%", position: "relative" }}
          >
            <img
              width="120px"
              src={getIconSrc(starData.iconCode)}
              style={{ zIndex: "9999" }}
            />
            <Glow src={glow} />
          </FlexBox>
        </MainIconBox>
        <FlexBox gap="30px">
          <Title>{`${starData.nickname}님의 응원 별`}</Title>
          <Contents>{starData.contents}</Contents>
          <FlexBox gap="10px" direction="row">
            <PrimaryBlackButton
              onClick={() => handleRemoveButton()}
              style={{ width: "100px" }}
            >
              삭제
            </PrimaryBlackButton>
            <PrimaryButton onClick={() => setIsCheerStartDetailShow(false)}>
              확인했어요
            </PrimaryButton>
          </FlexBox>
        </FlexBox>
      </ModalBox>
      <ModalBlackWrapper />
    </ModalWrapper>
  );
};

export default CheerStarDetailModal;

const MainIconBox = styled(FlexBox)`
  width: 160px;
  height: 160px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  > img {
    width: 120px;
    height: 120px;
  }
`;

const Glow = styled.img`
  position: absolute;
  top: 50%;
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
