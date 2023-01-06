import React from "react";
import styled from "styled-components";
import { FlexBox, ModalBlackWrapper, ModalWrapper } from "../Wrapper";
import { PrimaryButton } from "../Button";
import arrow from "../../assets/icon_arrow-right.png";
import glow from "../../assets/list_glow.png";
import blue_comet from "../../assets/main_icons/blue_comet.png";
import blue_star from "../../assets/main_icons/blue_star.png";
import blue_planet from "../../assets/main_icons/blue_planet.png";
import blue_rocket from "../../assets/main_icons/blue_rocket.png";

interface IconProps {
    main: boolean;
}

interface BtnProps {
    isRight: boolean;
}

interface ColorProps {
    color: string;
    select: boolean;
}

const IconSelectModal = () => {
//   const [isMain, setIsMain] = React.useState(false);

  return (
    <>
      <ModalWrapper>
        <Container>
          <FlexBox gap="30px">
            <Title>프로필 아이콘 선택</Title>
            <IconWrapper>
              <Icon main={false}>
                <Blur />
              </Icon>
              <BtnWrapper>
                <IconMoveBtn isRight={false}></IconMoveBtn>
              </BtnWrapper>
              <Icon main={true}></Icon>
              <BtnWrapper>
                <IconMoveBtn isRight={true}></IconMoveBtn>
              </BtnWrapper>
              <Icon main={false}>
                <Blur />
              </Icon>
            </IconWrapper>
            <ColorWrapper>
              <ColorWrapperTitle>아이콘 색상</ColorWrapperTitle>
              <ColorList>
                <Color color={"#FF68DE"} select={false}></Color>
                <Color color={"#F5E148"} select={true}></Color>
                <Color color={"#007BED"} select={false}></Color>
              </ColorList>
            </ColorWrapper>
            <ColorWrapper>
              <ColorWrapperTitle>배경 색상</ColorWrapperTitle>
              <ColorList>
                <Color color={"#88BF9E"} select={false}></Color>
                <Color color={"#E06C6C"} select={false}></Color>
                <Color color={"#175F5A"} select={false}></Color>
                <Color color={"#172C5F"} select={true}></Color>
                <Color color={"#000000"} select={false}></Color>
                <Color color={"#602E9E"} select={false}></Color>
              </ColorList>
            </ColorWrapper>
            <PrimaryButton>저장하기</PrimaryButton>
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
`;

const Title = styled.h3`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #FFFFFF;
`;

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
  background-color: ${(props) => props.main ? "#172C5F" : "transparent"};
  background-image: ${(props) => props.main ? `url(${glow}), url(${blue_comet})` : `url(${blue_comet})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${(props) => props.main ? "cover, 65px 65px" : "30px 30px"};
  opacity: ${(props) => props.main ? "1" : "0.5"};
  `

const Blur = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  filter: blur(20px);
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

const ColorWrapper = styled.div`

`

const ColorWrapperTitle = styled.h3`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #FFFFFF;
  margin-bottom: 16px;
`

const ColorList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const Color = styled.li<ColorProps>`
  width: 26px;
  height: 26px;
  border-radius: 100%;
  border: ${(props) => props.select ? "1px solid white" : "none"};
  background-color: ${(props) => props.color};
`
