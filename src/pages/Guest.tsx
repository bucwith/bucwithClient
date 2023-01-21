import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MainLightImg from "../assets/lantern.png";
import theme from "../styles/theme";
import { FlexBox } from "../components/Wrapper";
import Button from "../components/Button";
import { ButtonColor } from "../@types/enums";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getBucketData, getCheerStar } from "../api/my-api";
import CheerStarModal from "../components/Star/CheerStarModal";
import getIconSrc from "../utils/getIconSrc";
import { CHEER_STAR_LOCATION } from "../constant";
import { PrimaryText } from "./BucketDetail";

type StarDataType = {
  bucketId: number;
  contents: string;
  iconCode: string;
  nickname: string;
  registDate: Date;
  starId: number;
};

const Guest = () => {
  const navigate = useNavigate();
  const { bucketId } = useParams();
  const [isCheerStarShow, setIsCheerStartShow] = React.useState(false);
  const [page, setPage] = useState(0);

  const { data: bucket } = useQuery(["getBucket"], () =>
    bucketId ? getBucketData(Number(bucketId)) : null
  );

  const { data: stars } = useQuery(["getCheerStar", isCheerStarShow], () =>
    bucketId ? getCheerStar(Number(bucketId)) : null
  );

  const handleMeListClick = () => {
    return navigate("/");
  };

  const totalPage = Math.floor(stars?.totalCnt / 7) + 1;

  const getPagination = () => {
    const arr = [];
    for (let i = 0; i < totalPage; i++) {
      arr.push(i);
    }
    return arr;
  };

  return (
    <>
      <MainWrap justify="space-between">
        <FlexBox>
          <SecondaryText>{`${bucket?.userName}님의 버킷리스트는`}</SecondaryText>
          <PrimaryText>{bucket?.bucket.contents}</PrimaryText>
        </FlexBox>
        <LanternContainer>
          <img width="325px" src={MainLightImg} />
        </LanternContainer>
        <FlexBox gap="30px">
          <FlexBox direction="row" gap="9px">
            {totalPage > 1 &&
              getPagination().map((_, index) => {
                return (
                  <PaginationBall
                    key={index}
                    className={page === index ? "active" : ""}
                  />
                );
              })}
          </FlexBox>
          <FlexBox gap="10px" direction="row">
            <Button
              disabled={false}
              text="나도 풍등 날리기"
              color={ButtonColor.Black}
              onClick={handleMeListClick}
            />
            <Button
              disabled={false}
              text="응원별 달기"
              color={ButtonColor.Primary}
              onClick={() => setIsCheerStartShow(true)}
            />
          </FlexBox>
        </FlexBox>
      </MainWrap>
      {isCheerStarShow && (
        <CheerStarModal setIsCheerStartShow={setIsCheerStartShow} />
      )}
      <div
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      >
        {stars &&
          stars.stars.content?.map((star: StarDataType, index: number) => {
            return (
              <img
                key={index}
                src={getIconSrc(star.iconCode)}
                style={{
                  width: "55px",
                  position: "absolute",
                  ...CHEER_STAR_LOCATION[index],
                }}
              />
            );
          })}
      </div>
    </>
  );
};

export default Guest;

const LanternContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const MainWrap = styled(FlexBox)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  padding-top: 60px;
  height: 100%;
  z-index: 999;
`;

const SecondaryText = styled.h2`
  font-weight: 400;
  font-size: 16px;
  white-space: pre-wrap;
  margin-bottom: 8px;
  text-align: center;
  color: ${theme.colors.whiteColor};
`;

export const PaginationBall = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  border: 1px solid white;
  &.active {
    width: 20px;
    background-color: white;
  }
`;
