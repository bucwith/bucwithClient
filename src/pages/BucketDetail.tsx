import React, { useState } from "react";
import styled from "styled-components";
import MainLightImg from "../assets/main_light.png";
import theme from "../styles/theme";
import { FlexBox, ImagedWrapper } from "../components/Wrapper";
import Button from "../components/Button";
import { ButtonColor } from "../@types/enums";
import { useLocation, useNavigate } from "react-router-dom";
import Share from "../components/Share/Share";
import { useQuery } from "react-query";
import { getCheerStar } from "../api/my-api";
import mockStar from "../assets/main_icons/blue_comet.png";

import { pinkIcons, yellowIcons, blueIcons } from "../assets/icons";

type StarType = {
  bucketId: number;
  contents: string;
  iconCode: string;
  nickname: string;
  registDate: Date;
  starId: number;
};

const BucketDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isShare, setIsShare] = useState(false);

  const modalClose = (e: any) => {
    if (e.target !== e.currentTarget) return;
    setIsShare(false);
  };

  const cheerStarData = [
    { top: -70, left: 110 },
    { top: -10, left: 230 },
    { top: 100, left: 250 },
    { top: 250, left: 200 },
    { top: 280, left: 60 },
    { top: 180, left: -30 },
    { top: 10, left: -30 },
  ];

  const getIconUrl = (iconCode: string) => {
    const color = iconCode.slice(-1);
    const shapeIndex = Number(iconCode.slice(-2, -1));

    switch (color) {
      case "B":
        return blueIcons[shapeIndex + 1];

      case "Y":
        return yellowIcons[shapeIndex + 1];

      default:
        return pinkIcons[shapeIndex + 1];
    }
  };

  const { data } = useQuery(["getCheerStar"], () => getCheerStar(44));

  const handleMeListClick = () => {
    return navigate("/me/list");
  };

  return (
    <ImagedWrapper>
      <MainWrap direction="column" justify="space-between">
        {isShare ? <Share modalClose={modalClose} /> : null}
        <FlexBox direction="column">
          <SecondaryText>{`소현님의 버킷리스트는`}</SecondaryText>
          <PrimaryText>운동하기 운동ㅇㅇㅇ</PrimaryText>
        </FlexBox>
        <LanternContainer>
          <img
            style={{
              height: "280px",
            }}
            src={MainLightImg}
          />
          {data.map((star: StarType, index: number) => {
            return (
              <img
                key={index}
                src={getIconUrl(star.iconCode)}
                style={{
                  width: "60px",
                  position: "absolute",
                  top: `${cheerStarData[index].top}px`,
                  left: `${cheerStarData[index].left}px`,
                }}
              />
            );
          })}
        </LanternContainer>
        <FlexBox gap="10px" direction="row">
          <Button
            disabled={false}
            text={`내 리스트 보러가기`}
            color={ButtonColor.Black}
            onClick={handleMeListClick}
          />
          <Button
            disabled={false}
            text={`내 버킷 공유하기`}
            color={ButtonColor.Primary}
            onClick={() => setIsShare(true)}
          />
        </FlexBox>
      </MainWrap>
    </ImagedWrapper>
  );
};

export default BucketDetail;

const LanternContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const MainWrap = styled(FlexBox)`
  padding-top: 60px;
  height: 100%;
`;

const PrimaryText = styled.h1`
  font-weight: 700;
  font-size: 26px;
  white-space: pre-wrap;
  color: ${theme.colors.whiteColor};
  line-height: 30px;
  text-align: center;
`;

const SecondaryText = styled.h2`
  font-weight: 400;
  font-size: 16px;
  white-space: pre-wrap;
  margin-bottom: 8px;
  text-align: center;
  color: ${theme.colors.whiteColor};
`;
