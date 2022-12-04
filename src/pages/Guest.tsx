import React from "react";
import CheerStarModal from "../components/Star/CheerStarModal";
import { ImagedWrapper } from "../components/Wrapper";
import styled from "styled-components";
import MainLightImg from "../assets/main_light.png";
import theme from "../styles/theme";
import Button from "../components/Button";
import { ButtonColor } from "../@types/enums";
import { useLocation, useNavigate } from "react-router-dom";

const Guest = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMeListClick = () => {
    return navigate("/me/list");
  };
  return (
    <ImagedWrapper>
      <MainWrap>
        <MainLight src={MainLightImg} />
        <ButtonWrap>
          <Button
            disabled={false}
            text={`내 버킷 공유하기`}
            color={ButtonColor.Primary}
          />
          <Button
            disabled={false}
            text={`내 리스트 보러가기`}
            color={ButtonColor.Black}
            onClick={handleMeListClick}
          />
        </ButtonWrap>
      </MainWrap>
      {/* <CheerStarModal /> */}
    </ImagedWrapper>
  );
};

export default Guest;

const MainLight = styled.img`
  height: 280px;
  display: block;
  margin: 0 auto;
`;

const MainWrap = styled.div`
  margin: 130px 0;
`;

const PrimaryText = styled.h1`
  font-weight: 700;
  font-size: 26px;
  white-space: pre-wrap;
  color: ${theme.colors.whiteColor};
  line-height: 30px;
  text-align: center;
  margin-bottom: 180px;
`;

const SecondaryText = styled.h2`
  font-weight: 400;
  font-size: 16px;
  white-space: pre-wrap;
  margin-bottom: 8px;
  text-align: center;
  color: ${theme.colors.whiteColor};
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
