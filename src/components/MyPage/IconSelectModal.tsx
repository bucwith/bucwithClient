import React from "react";
import styled from "styled-components";
import { FlexBox, ModalBlackWrapper, ModalWrapper } from "../Wrapper";
import { PrimaryButton, CloseBtn } from "../Button";
import { PrimaryText } from "../Title"
import { Icon, Blur, IconMoveBtn, Color, BtnWrapper } from "./Modal/IconSelectModalStyledComponent";
import { ICON_COLOR, ICON_CODE } from "../../constant";
import { putUserIcon } from "../../api/my-api"

interface IconSelectModalProps {
  setIconSelectModal: React.Dispatch<React.SetStateAction<boolean>>
  profileIcon: string[]
}

const IconSelectModal = ({setIconSelectModal, profileIcon}: IconSelectModalProps) => {
  const [selectColor, setSelectColor] = React.useState(profileIcon[1]);
  const [selectIconColor, setSelectIconColor] = React.useState(profileIcon[0].slice(-1) === "B" ? 8 : (profileIcon[0].slice(-1) === "Y" ? 4 : 0));
  const [selectIcon, setSelectIcon] = React.useState(Object.keys(ICON_CODE).indexOf(profileIcon[0]));

  return (
    <>
      <ModalWrapper>
        <Container>
          <FlexBox as="form" gap="30px">
            <PrimaryText as="h3" fontSize="20px" lineHeight="23px" fontFamily="Roboto">관심 카테고리 설정</PrimaryText>
            <CloseBtn type="button" onClick={() => {setIconSelectModal(false)}} />
            <FlexBox as="ul" gap="10px" direction="row">
              <Icon main={false} iconColor={Object.values(ICON_CODE)[Math.abs(((selectIcon - 1) % 4 < 0 ? (selectIcon - 1) % 4 + 4 : (selectIcon - 1) % 4))+selectIconColor]}>
                <Blur />
              </Icon>
              <BtnWrapper>
                <IconMoveBtn type="button" isRight={false} onClick={() => {setSelectIcon(selectIcon - 1 < selectIconColor ? selectIcon + 3 : selectIcon - 1)}} />
              </BtnWrapper>
              <Icon main={true} color={selectColor} iconColor={Object.values(ICON_CODE)[Math.abs((selectIcon % 4 < 0 ? selectIcon % 4 + 4 : selectIcon % 4))+selectIconColor]} />
              <BtnWrapper>
                <IconMoveBtn type="button" isRight={true} onClick={() => {setSelectIcon(selectIcon + 1 > selectIconColor + 3 ? selectIcon - 3 : selectIcon + 1)}} />
              </BtnWrapper>
              <Icon main={false} iconColor={Object.values(ICON_CODE)[Math.abs(((selectIcon + 1) % 4 < 0 ? (selectIcon + 1) % 4 + 4 : (selectIcon + 1) % 4))+selectIconColor]}>
                <Blur />
              </Icon>
            </FlexBox>
            <FlexBox gap="16px">
            <PrimaryText as="h4" fontSize="14px" lineHeight="16px" fontFamily="Roboto">아이콘 색상</PrimaryText>
              <FlexBox as="ul" gap="20px" direction="row">
                {ICON_COLOR.icon_color.map((v, index) => {
                  return <Color key={index} onClick={()=>{setSelectIconColor(index*4); setSelectIcon(selectIcon - selectIconColor + index*4)}} color={v} select={selectIconColor === 0 + index*4} /> 
                })}
              </FlexBox>
            </FlexBox>
            <FlexBox gap="16px">
              <PrimaryText as="h4" fontSize="14px" lineHeight="16px" fontFamily="Roboto">배경 색상</PrimaryText>
              <FlexBox as="ul" gap="20px" direction="row">
                {Object.values(ICON_COLOR.bg_color).map((v, index) => {
                  return <Color key={index} onClick={()=>{setSelectColor(v)}} color={v} select={selectColor === v} /> 
                })}
              </FlexBox>
            </FlexBox>
            <PrimaryButton type="submit" onClick={() => {putUserIcon(Object.keys(ICON_CODE)[selectIcon], Object.keys(ICON_COLOR.bg_color).find(key => ICON_COLOR.bg_color[key] === selectColor)); setIconSelectModal(false);}}>저장하기</PrimaryButton>
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
