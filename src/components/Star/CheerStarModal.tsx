import React from "react";
import styled from "styled-components";
import { ButtonColor } from "../../@types/enums";
import Button from "../Button";
import { Wrap } from "../main/InputBox";
import SubTitle from "../main/SubTitle";
import TextArea from "../main/TextArea";
import { FlexBox, ModalWrapper } from "../Wrapper";
import Star from "../../assets/icon-star-01.png";

const Colors = {
  WhiteStar: "#ffffff",
  YellowStar: "#FFE922",
  GreenStar: "#00B2A8",
  BlueStar: "#007BED",
  OrangeStar: "#ED8E00",
};

const CheerStarModal = () => {
  const [color, setColor] = React.useState(Colors.WhiteStar);
  return (
    <ModalWrapper>
      <ModalBox gap="30px">
        <SubTitle text="응원 별 달기" isCentered />
        <FlexBox justify="center">
          <StarImg src={Star} />
          <ArrowBox justify="space-around">
            <Arrow>‹</Arrow>
            <Arrow>›</Arrow>
          </ArrowBox>
        </FlexBox>
        <FlexBox gap="20px" justify="center">
          {Object.values(Colors).map((color, index) => (
            <Color key={index} color={color} />
          ))}
        </FlexBox>
        <FlexBox
          gap="10px"
          direction="column"
          style={{ alignItems: "stretch" }}
        >
          <TextArea placeholder="응원 메세지를 작성해보세요." textarea />
          <TextArea placeholder="닉네임을 입력해 주세요." />
        </FlexBox>
        <Button
          disabled={false}
          text="응원 별 달기"
          color={ButtonColor.Primary}
        />
      </ModalBox>
    </ModalWrapper>
  );
};

export default CheerStarModal;

interface Colorprops {
  color: string;
}
const ModalBox = styled(Wrap)`
  width: 100%;
  background-color: #24252c;
`;

const Color = styled.div<Colorprops>`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const StarImg = styled.img`
  width: 90px;
`;

const Arrow = styled.div`
  font-size: 40px;
  color: white;
`;

const ArrowBox = styled(FlexBox)`
  position: absolute;
  top: 110px;
  left: 0;
`;
