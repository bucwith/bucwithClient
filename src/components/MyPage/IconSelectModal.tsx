import React from "react";
import styled from "styled-components";
import { FlexBox, ModalBlackWrapper, ModalWrapper } from "../Wrapper";
import { PrimaryButton, CloseBtn } from "../Button";
import { PrimaryText } from "../Title"
import { Icon, Blur, IconMoveBtn, Color, BtnWrapper } from "./Modal/IconSelectModalStyledComponent";
import blue_comet from "../../assets/main_icons/blue_comet.png";
import blue_star from "../../assets/main_icons/blue_star.png";
import blue_planet from "../../assets/main_icons/blue_planet.png";
import blue_rocket from "../../assets/main_icons/blue_rocket.png";
import pink_comet from "../../assets/main_icons/pink_comet.png";
import pink_star from "../../assets/main_icons/pink_star.png";
import pink_planet from "../../assets/main_icons/pink_planet.png";
import pink_rocket from "../../assets/main_icons/pink_rocket.png";
import yellow_comet from "../../assets/main_icons/yellow_comet.png";
import yellow_star from "../../assets/main_icons/yellow_star.png";
import yellow_planet from "../../assets/main_icons/yellow_planet.png";
import yellow_rocket from "../../assets/main_icons/yellow_rocket.png";
import { ICON_COLOR } from "../../constant";

interface IconSelectModalProps {
  setIconSelectModal: React.Dispatch<React.SetStateAction<boolean>>
  setProfileIcon: React.Dispatch<React.SetStateAction<string[]>>
}

const IconSelectModal = ({setIconSelectModal, setProfileIcon}: IconSelectModalProps) => {
  const [selectColor, setSelectColor] = React.useState("#172C5F");
  const [selectIconColor, setSelectIconColor] = React.useState(8);
  const [selectIcon, setSelectIcon] = React.useState(0)
  const IconList = [pink_comet, pink_star, pink_planet, pink_rocket, yellow_comet, yellow_star, yellow_planet, yellow_rocket, blue_comet, blue_star, blue_planet, blue_rocket]

  return (
    <>
      <ModalWrapper>
        <Container>
          <FlexBox as="form" gap="30px">
            <PrimaryText as="h3" fontSize="20px" lineHeight="23px" fontFamily="Roboto">관심 카테고리 설정</PrimaryText>
            <CloseBtn type="button" onClick={() => {setIconSelectModal(false)}} />
            <FlexBox as="ul" gap="10px" direction="row">
              <Icon main={false} iconColor={IconList[Math.abs(((selectIcon - 1) % 4 < 0 ? (selectIcon - 1) % 4 + 4 : (selectIcon - 1) % 4))+selectIconColor]}>
                <Blur />
              </Icon>
              <BtnWrapper>
                <IconMoveBtn type="button" isRight={false} onClick={() => {setSelectIcon(selectIcon - 1)}} />
              </BtnWrapper>
              <Icon main={true} color={selectColor} iconColor={IconList[Math.abs((selectIcon % 4 < 0 ? selectIcon % 4 + 4 : selectIcon % 4))+selectIconColor]} />
              <BtnWrapper>
                <IconMoveBtn type="button" isRight={true} onClick={() => {setSelectIcon(selectIcon + 1)}} />
              </BtnWrapper>
              <Icon main={false} iconColor={IconList[Math.abs(((selectIcon + 1) % 4 < 0 ? (selectIcon + 1) % 4 + 4 : (selectIcon + 1) % 4))+selectIconColor]}>
                <Blur />
              </Icon>
            </FlexBox>
            <FlexBox gap="16px">
            <PrimaryText as="h4" fontSize="14px" lineHeight="16px" fontFamily="Roboto">아이콘 색상</PrimaryText>
              <FlexBox as="ul" gap="20px" direction="row">
                {ICON_COLOR.icon_color.map((v, index) => {
                  return <Color key={index} onClick={()=>{setSelectIconColor(0 + index*4)}} color={v} select={selectIconColor === 0 + index*4} /> 
                })}
              </FlexBox>
            </FlexBox>
            <FlexBox gap="16px">
              <PrimaryText as="h4" fontSize="14px" lineHeight="16px" fontFamily="Roboto">배경 색상</PrimaryText>
              <FlexBox as="ul" gap="20px" direction="row">
                {ICON_COLOR.bg_color.map((v, index) => {
                  return <Color key={index} onClick={()=>{setSelectColor(v)}} color={v} select={selectColor === v} /> 
                })}
              </FlexBox>
            </FlexBox>
            <PrimaryButton type="submit" onClick={() => {setProfileIcon([IconList[Math.abs((selectIcon % 4 < 0 ? selectIcon % 4 + 4 : selectIcon % 4))+selectIconColor], selectColor]); setIconSelectModal(false);}}>저장하기</PrimaryButton> {/*component화 대상*/}
          </FlexBox>
        </Container>
      </ModalWrapper>
      <ModalBlackWrapper />
    </>
  );
};

export default IconSelectModal;

const Container = styled(FlexBox)`
  background-color: #24252c;
  border-radius: 30px;
  padding: 30px 20px;
  position: relative;
`;
