import React from "react";
import styled from "styled-components";
import MainLightImg from "../assets/main_light.png";
import theme from "../styles/theme";
import { FlexBox, ImagedWrapper } from "../components/Wrapper";
import Button from "../components/Button";
import { ButtonColor } from "../@types/enums";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getBucketData, getCheerStar } from "../api/my-api";
import arrow from "../assets/icon_arrow-right.png";
import CheerStarModal from "../components/Star/CheerStarModal";
import getIconSrc from "../utils/getIconSrc";

type StarType = {
  bucketId: number;
  contents: string;
  iconCode: string;
  nickname: string;
  registDate: Date;
  starId: number;
};

const CHEER_STAR_LOCATION = [
  { top: -70, left: 110 },
  { top: -10, left: 230 },
  { top: 100, left: 250 },
  { top: 250, left: 200 },
  { top: 280, left: 60 },
  { top: 180, left: -30 },
  { top: 10, left: -30 },
];

const Guest = () => {
  const navigate = useNavigate();
  const { bucketId } = useParams();
  const [isCheerStarShow, setIsCheerStartShow] = React.useState(false);

  const { data: bucket } = useQuery(["getBucket"], () =>
    bucketId ? getBucketData(Number(bucketId)) : null
  );

  const { data: stars } = useQuery(["getCheerStar", isCheerStarShow], () =>
    bucketId ? getCheerStar(Number(bucketId)) : null
  );

  const handleMeListClick = () => {
    return navigate("/me/list");
  };

  return (
    <ImagedWrapper>
      <MainWrap justify="space-between">
        <FlexBox>
          <SecondaryText>{`${bucket.userName}님의 버킷리스트는`}</SecondaryText>
          <PrimaryText>{bucket.bucket.contents}</PrimaryText>
        </FlexBox>
        <LanternContainer>
          <img
            style={{
              height: "280px",
            }}
            src={MainLightImg}
          />

          {stars &&
            stars.map((star: StarType, index: number) => {
              return (
                <img
                  key={index}
                  src={getIconSrc(star.iconCode)}
                  style={{
                    width: "60px",
                    position: "absolute",
                    top: `${CHEER_STAR_LOCATION[index].top}px`,
                    left: `${CHEER_STAR_LOCATION[index].left}px`,
                  }}
                />
              );
            })}
        </LanternContainer>
        <FlexBox gap="10px" direction="row">
          <Button
            disabled={false}
            text={`나도 풍등 날리기`}
            color={ButtonColor.Black}
            onClick={handleMeListClick}
          />
          <Button
            disabled={false}
            text={`응원별 달기`}
            color={ButtonColor.Primary}
            onClick={() => setIsCheerStartShow(true)}
          />
        </FlexBox>
      </MainWrap>
      {isCheerStarShow && (
        <CheerStarModal setIsCheerStartShow={setIsCheerStartShow} />
      )}
    </ImagedWrapper>
  );
};

export default Guest;

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

const Arrow = styled.img`
  width: 26px;
  position: absolute;
  top: 55px;
  left: 20px;
  transform: rotate(180deg);
`;
