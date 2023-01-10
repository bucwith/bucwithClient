import React from "react";
import styled from "styled-components";
import { FlexBox, ModalBlackWrapper, ModalWrapper } from "../Wrapper";
import { PrimaryButton } from "../Button";
import arrow from "../../assets/icon_arrow-right.png";
import closeBtn from "../../assets/icon_close.png";
import glow from "../../assets/list_glow.png";
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

interface IconProps {
  main: boolean;
  iconColor: number;
}

interface BtnProps {
  isRight: boolean;
}

interface ColorProps {
  select: boolean;
}

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
            <Title>프로필 아이콘 선택</Title>
            <CloseBtn type="button" onClick={() => {setIconSelectModal(false)}} />
            <IconWrapper>
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
            </IconWrapper>
            <FlexBox gap="16px">
              <ColorWrapperTitle>아이콘 색상</ColorWrapperTitle>
              <FlexBox as="ul" gap="20px" direction="row">
                <Color onClick={()=>{setSelectIconColor(0)}} color={"#FF68DE"} select={selectIconColor === 0} />
                <Color onClick={()=>{setSelectIconColor(4)}} color={"#F5E148"} select={selectIconColor === 4} />
                <Color onClick={()=>{setSelectIconColor(8)}} color={"#007BED"} select={selectIconColor === 8} />
              </FlexBox>
            </FlexBox>
            <FlexBox gap="16px">
              <ColorWrapperTitle>배경 색상</ColorWrapperTitle>
              <FlexBox as="ul" gap="20px" direction="row">
                <Color onClick={()=>{setSelectColor("#88BF9E")}} color={"#88BF9E"} select={selectColor === "#88BF9E"} />
                <Color onClick={()=>{setSelectColor("#E06C6C")}} color={"#E06C6C"} select={selectColor === "#E06C6C"} />
                <Color onClick={()=>{setSelectColor("#175F5A")}} color={"#175F5A"} select={selectColor === "#175F5A"} />
                <Color onClick={()=>{setSelectColor("#172C5F")}} color={"#172C5F"} select={selectColor === "#172C5F"} />
                <Color onClick={()=>{setSelectColor("#000000")}} color={"#000000"} select={selectColor === "#000000"} />
                <Color onClick={()=>{setSelectColor("#602E9E")}} color={"#602E9E"} select={selectColor === "#602E9E"} />
              </FlexBox>
            </FlexBox>
            <PrimaryButton type="submit" onClick={() => {setProfileIcon([IconList[Math.abs((selectIcon % 4 < 0 ? selectIcon % 4 + 4 : selectIcon % 4))+selectIconColor], selectColor]); setIconSelectModal(false);}}>저장하기</PrimaryButton>
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

const Title = styled.h3`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #FFFFFF;
`;

const CloseBtn = styled.button`
  position: absolute;
  right: 20px;
  top: 30px;
  background-image: url(${closeBtn});
  background-repeat: no-repeat;
  background-size: contain;
  width: 20px;
  height: 20px;
`

const IconWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

const Icon = styled.li<IconProps>`
  width: ${(props) => props.main ? "90px" : "40px"};
  height: ${(props) => props.main ? "90px" : "40px"};
  border-radius: 100%;
  background-color: ${(props) => props.main ? props.color : "transparent"};
  background-image: ${(props) => props.main ? `url(${props.iconColor}), url(${glow})` : `url(${props.iconColor})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${(props) => props.main ? "65px 65px, cover" : "30px 30px"};
  opacity: ${(props) => props.main ? "1" : "0.5"};
  `

const Blur = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  filter: blur(15px);
  background-color: rgba(205, 203, 255, 0.6);
`

const BtnWrapper = styled.li`
  width: 30px;
  height: 30px;
  padding: 5px
`

const IconMoveBtn = styled.button<BtnProps>`
  width: 100%;
  height: 100%;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: right center;
  transform: ${(props) => props.isRight ? "none" : "rotate(180deg)"};
`

const ColorWrapperTitle = styled.h3`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #FFFFFF;
`

const Color = styled.li<ColorProps>`
  width: 26px;
  height: 26px;
  border-radius: 100%;
  border: ${(props) => props.select ? "1px solid white" : "none"};
  background-color: ${(props) => props.color};
`
