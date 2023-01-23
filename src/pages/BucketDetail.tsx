import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import theme from "../styles/theme";
import { FlexBox, ModalBlackWrapper } from "../components/Wrapper";
import Button from "../components/Button";
import { ButtonColor } from "../@types/enums";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Share from "../components/Share/Share";
import { useQuery } from "react-query";
import { getBucketData, getCheerStar } from "../api/my-api";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkWrapper, userDataAtom } from "../store/atoms";
import getIconSrc from "../utils/getIconSrc";
import { CHEER_STAR_LOCATION } from "../constant";
import lanternRising from "../assets/lanternRising.png";
import { AnimationBox, AnimationContexts } from "../lib/animation";
import CheerStarDetailModal from "../components/Star/CheerStarDetailModal";
import CheerStarRemove from "../components/Star/CheerStarRemove";
import lanternsStopped from "../assets/lantern.png";
import SnackBar from "../components/Share/SnackBar";
import { BucketListType } from "./List";
import BackArrow from "../components/BackArrow";
import { MainWrap, PaginationBall } from "./Guest";

type StarDataType = {
  bucketId: number;
  contents: string;
  iconCode: string;
  nickname: string;
  registDate: Date;
  starId: number;
};

interface BucketDetailProps {
  exportElementAsPNG: () => any;
}
const BucketDetail = ({ exportElementAsPNG }: BucketDetailProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const { bucketId } = useParams();

  const [data, setData] = useState<BucketListType>();
  const [isShare, setIsShare] = useState(false);
  const [isSnackBarShow, setIsSnackBarShow] = React.useState(false);
  const [isCheerStarDetailShow, setIsCheerStartDetailShow] =
    React.useState(false);
  const [isRemoveModalShow, setIsRemoveModalShow] = React.useState(false);
  const [starData, setStarData] = React.useState<StarDataType | undefined>();
  const userData = useRecoilValue(userDataAtom);
  const locationData = location.state?.data;
  const [starsData, setStarsData] = React.useState<[StarDataType][]>([]);

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

  // 첫번째 페이지 데이터
  const { isFetching: isFirstStarFetching } = useQuery(
    ["getCheerStar", isRemoveModalShow],
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
    ["getCheerStar", isRemoveModalShow, page],
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
  useEffect(() => {
    setData(locationData ?? bucket?.bucket);
  }, [locationData, bucket]);

  const setIsDark = useSetRecoilState(isDarkWrapper);
  useEffect(() => {
    setIsDark(false);
  }, []);

  const handleMeListClick = () => {
    return navigate("/");
  };

  const isAnimationNeed = path.includes("completion");

  const saveImg = () => {
    if (isShare) {
      setIsShare(false);
    }
    exportElementAsPNG();
  };

  const handleStarClick = (index: number) => {
    setStarData(starsData[page][index]);
    setIsCheerStartDetailShow(true);
  };

  React.useEffect(() => {
    if (isSnackBarShow) {
      setTimeout(() => {
        setIsSnackBarShow(false);
      }, 3000);
    }
  }, [isSnackBarShow]);

  const modalClose = (e: any) => {
    if (e.target !== e.currentTarget) return;
    setIsShare(false);
  };

  // 페이지 관련
  // 서버에서 페이지를 0부터 받아서 0부터 시작.

  const cheerContainerRef = React.useRef<HTMLDivElement>();

  const getPagination = () => {
    const arr = [];
    for (let i = 0; i < totalPage; i++) {
      arr.push(i);
    }
    return arr;
  };

  const autoSwipe = () => {
    const scrollLeft = cheerContainerRef.current.scrollLeft;

    const isNext = scrollLeft - 390 * page > 50;
    const isPrev = scrollLeft - 390 * page < -50;
    const newPage = isPrev ? page - 1 : isNext ? page + 1 : page;

    setPage(newPage);

    cheerContainerRef.current.scrollTo({
      left: newPage * viewWidth,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isSnackBarShow && <SnackBar text="링크가 복사되었어요." />}
      {isShare ? (
        <Share
          modalClose={modalClose}
          saveImg={saveImg}
          setIsShare={setIsShare}
          setIsSnackBarShow={setIsSnackBarShow}
          bucketIdFromData={data?.bucketId}
        />
      ) : null}
      <MainWrap animation={path.includes("completion")} justify="space-between">
        {bucketId && <BackArrow />}
        <>
          <AnimationContexts animation={isAnimationNeed}>
            {!isFetching && (
              <FlexBox gap="8px">
                <SecondaryText>
                  {`'${userData?.name}'님의 버킷리스트는`}
                </SecondaryText>
                <FlexBox direction="row">
                  <PrimaryText style={{ position: "relative" }}>
                    {data?.contents}
                  </PrimaryText>
                </FlexBox>
              </FlexBox>
            )}
          </AnimationContexts>
          <AnimationBox animation={isAnimationNeed} style={{ height: "38.5%" }}>
            <div style={{ position: "relative", height: "100%" }}>
              {isAnimationNeed ? (
                <img
                  style={{
                    width: "325px",
                  }}
                  src={lanternRising}
                />
              ) : (
                <img
                  src={lanternsStopped}
                  style={{ width: "100%", height: "100%" }}
                />
              )}
            </div>
          </AnimationBox>
          <AnimationContexts animation={isAnimationNeed}>
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
              <FlexBox
                gap="10px"
                direction="row"
                style={{ flexGrow: 1, zIndex: 1000 }}
              >
                {bucketId ? null : (
                  <Button
                    disabled={false}
                    text="내 리스트 보기"
                    color={ButtonColor.Black}
                    onClick={handleMeListClick}
                  />
                )}
                <Button
                  disabled={false}
                  text="내 버킷 공유하기"
                  color={ButtonColor.Primary}
                  onClick={() => setIsShare(true)}
                />
              </FlexBox>
            </FlexBox>
          </AnimationContexts>
        </>
      </MainWrap>
      {/* 응원별 내용 확인 모달 */}
      {isCheerStarDetailShow && starData && (
        <CheerStarDetailModal
          starData={starData}
          setIsCheerStartDetailShow={setIsCheerStartDetailShow}
          setIsRemoveModalShow={setIsRemoveModalShow}
        />
      )}
      {/* 응원별 삭제 모달 */}
      {starData && isRemoveModalShow && (
        <CheerStarRemove
          setIsRemoveModalShow={setIsRemoveModalShow}
          starId={starData?.starId}
        />
      )}
      <AnimationBlackWrapper animation={isAnimationNeed} />

      {/* 응원별 */}
      <CheerShowView ref={cheerContainerRef}>
        {!isFirstStarFetching &&
          !nextPageStarsFetching &&
          starsData &&
          starsData?.map((stars: StarDataType[], index: number) => (
            <CheerStarContainer key={index} onTouchEnd={autoSwipe}>
              {stars?.map((star, index) => (
                <img
                  key={index}
                  src={getIconSrc(star.iconCode)}
                  style={{
                    width: "13%",
                    position: "absolute",
                    ...CHEER_STAR_LOCATION[index],
                  }}
                  onClick={() => handleStarClick(index)}
                />
              ))}
            </CheerStarContainer>
          ))}
      </CheerShowView>
    </>
  );
};

export default BucketDetail;

export const PrimaryText = styled.p`
  position: relative;
  white-space: pre-wrap;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: ${theme.colors.whiteColor};
  ::before {
    content: '"';
    position: absolute;
    top: 0;
    left: -16px;
  }
  ::after {
    content: '"';
    position: absolute;
    top: 0;
    right: -16px;
  }
`;

const SecondaryText = styled.h2`
  font-weight: 500;
  font-size: 16px;
  color: ${theme.colors.whiteColor};
`;

const wrapperKeyframe = keyframes`
0% {
opacity: 0.4;
}
100% {
opacity: 0;
}
`;

const animationBlack = css`
  animation: 2s ${wrapperKeyframe} linear;
`;

const AnimationBlackWrapper = styled(ModalBlackWrapper)<{ animation: boolean }>`
  opacity: 0;
  z-index: -1;
  ${(props) => (props.animation ? animationBlack : null)};
`;

export const CheerShowView = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transition-property: transform;
  transition-duration: 0ms;
  transform: translateY(-50%);
  overflow-x: scroll;
  overflow-y: hidden;
  height: 50%;
  white-space: nowrap;
  z-index: 1100;
  animation: linear 0.2s;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CheerStarContainer = styled.div`
  position: relative;
  width: 100vw;
  display: inline-block;
  height: 100%;
`;
