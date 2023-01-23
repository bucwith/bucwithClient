import React, { useState } from "react";
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
import { CheerShowView, CheerStarContainer, PrimaryText } from "./BucketDetail";

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

  const handleMeListClick = () => {
    return navigate("/");
  };

  const getPagination = () => {
    const arr = [];
    for (let i = 0; i < totalPage; i++) {
      arr.push(i);
    }
    return arr;
  };

  //
  //
  // 데이터 fetching
  // bucket
  const { data: bucket, isFetching } = useQuery(["getBucketData"], () =>
    bucketId ? getBucketData(Number(bucketId)) : null
  );
  // star
  // 페이지 관련 변수
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = React.useState(0);
  const [starsData, setStarsData] = React.useState<[StarDataType][]>([]);

  // 첫번째 페이지 데이터
  const { isFetching: isFirstStarFetching } = useQuery(
    ["getCheerStar"],
    () => (bucketId ? getCheerStar(Number(bucketId), 0) : null),
    {
      onSuccess(data) {
        setStarsData([data.stars.content]);
        setTotalPage(Math.floor(data.totalCnt / 7) + 1);
      },
    }
  );

  // 현재 페이지의 다음 페이지 데이터
  const { isFetching: nextPageStarsFetching } = useQuery(
    ["getCheerStar", page],
    () =>
      Boolean(bucketId) && totalPage > 1 && page < totalPage - 1
        ? getCheerStar(Number(bucketId), page + 1)
        : null,
    {
      onSuccess(data) {
        return data?.stars?.content
          ? setStarsData((prev) => {
              const arr = prev;
              arr[page + 1] = data.stars.content;
              return arr;
            })
          : null;
      },
      enabled: !isFirstStarFetching,
    }
  );

  const viewWidth = window.innerWidth;
  const cheerContainerRef = React.useRef<HTMLDivElement>();

  const autoSwipe = () => {
    const direction =
      cheerContainerRef.current.scrollLeft - viewWidth * page > 0
        ? "next"
        : "prev";

    if (
      !(page === 0 && direction === "prev") &&
      !(page === totalPage - 1 && direction === "next")
    ) {
      const newPage = direction === "prev" ? page - 1 : page + 1;
      setPage(newPage);
    }

    cheerContainerRef.current.scrollTo({
      left: page * viewWidth,
      behavior: "smooth",
    });

    console.log(cheerContainerRef.current.scrollLeft);
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
          {/* 페이지네이션 */}
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
      {/* 응원별 */}
      <CheerShowView ref={cheerContainerRef}>
        {!isFirstStarFetching &&
          !nextPageStarsFetching &&
          starsData &&
          starsData?.map((stars: StarDataType[], index: number) => (
            <CheerStarContainer
              key={index}
              onTouchEnd={autoSwipe}
              onMouseUp={autoSwipe}
            >
              {stars?.map((star, index) => (
                <img
                  key={index}
                  src={getIconSrc(star.iconCode)}
                  style={{
                    width: "13%",
                    position: "absolute",
                    ...CHEER_STAR_LOCATION[index],
                  }}
                />
              ))}
            </CheerStarContainer>
          ))}
      </CheerShowView>
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
  padding: 8%;
  padding-top: 11%;

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
