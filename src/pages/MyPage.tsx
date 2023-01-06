import React from "react";
import styled from "styled-components";
import { VerticalCentered } from "../components/Wrapper";
import blue_comet from "../assets/main_icons/blue_comet.png";
import glow from "../assets/list_glow.png";
import pencil from "../assets/icon-pencil.png";
import arrow from "../assets/icon_arrow-right.png";
import IconSelectModal from "../components/MyPage/IconSelectModal";

const MyPage = () => {
  const [iconSelectModal, setIconSelectModal] = React.useState(false);

  return (
    <div>
      <VerticalCentered gap="20px">
        <Title>마이 페이지</Title>
        <ProfileIcon onClick={()=> setIconSelectModal(true)}></ProfileIcon>
        <ProfileName>풍등이</ProfileName>
      </VerticalCentered>
      {iconSelectModal && <IconSelectModal />}
    </div>
  );
};

export default MyPage;

const Title = styled.h1`
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: white;
  font-weight: 500;
  padding: 10px 0;
`

const ProfileIcon = styled.button`
  background-color: #172C5F;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  transform: translateX(calc(50vw - 50% - 20px));
  background-image: url(${blue_comet}), url(${glow});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 60px 60px, cover;
  position: relative;
  &::after{
    content: "";
    background-color: #141415;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    position: absolute;
    right: 0;
    bottom: 4px;
    background-image: url(${pencil});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 10px 10px;
  }
`

const ProfileName = styled.p`
  transform: translateX(calc(50vw - 50% - 20px));
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: white;
  text-align: center;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: calc(50vw + 5px) center;
`