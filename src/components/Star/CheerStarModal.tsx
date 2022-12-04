import React from "react";
import styled, { css } from "styled-components";
import { ButtonColor } from "../../@types/enums";
import Button from "../Button";
import { Wrap } from "../main/InputBox";
import SubTitle from "../main/SubTitle";
import TextArea from "../main/TextArea";
import { FlexBox, ModalWrapper } from "../Wrapper";
import Star from "../../assets/icon-star-01.png";
import { pinkIcons } from "./icons";

const Colors = {
  pink: "#FF6BDE",
  yellow: "#F5E148",
  blue: "#007BED",
};

const activeIconStyle = css`
  width: 68px;
`;
const inActiveIconStyle = css`
  width: 30px;
`;
const CheerStarModal = () => {
  const [color, setColor] = React.useState(Colors.pink);

  const [iconIndex, setIconIndex] = React.useState(0);
  const [icons, setIcons] = React.useState(pinkIcons);
  return (
    <ModalWrapper>
      <ModalBox gap="30px">
        <SubTitle text="응원 별 달기" isCentered />
        <FlexBox justify="center">
          <div style={{ width: "68px", height: "68px", position: "relative" }}>
            <IconList gap="40px">
              {icons.map((icon, index) => (
                <img
                  src={icon}
                  key={index}

                  // style={
                  //   iconIndex === index
                  //     ?  activeIconStyle
                  //     :  inActiveIconStyle
                  // }
                />
              ))}
            </IconList>
          </div>
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

const Arrow = styled.div`
  font-size: 40px;
  color: white;
`;

const ArrowBox = styled(FlexBox)`
  position: absolute;
  top: 110px;
  left: 0;
`;

const IconList = styled(FlexBox)`
  position: absolute;
  top: 0;
  left: 0;
`;
