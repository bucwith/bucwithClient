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
import arrow from "../assets/icon_arrow-right.png";
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
  const [page, setPage] = useState(0);

  const modalClose = (e: any) => {
    if (e.target !== e.currentTarget) return;
    setIsShare(false);
  };

  const locationData = location.state?.data;

  const { data: bucket, isFetching } = useQuery(["getBucketData"], () =>
    bucketId ? getBucketData(Number(bucketId)) : null
  );

  const { data: stars, isFetching: isStarFetching } = useQuery(
    ["getCheerStar", isRemoveModalShow],
    () => (bucketId ? getCheerStar(Number(bucketId)) : null)
  );

  useEffect(() => {
    setData(locationData ?? bucket?.bucket);
  }, [locationData, bucket]);

  const setIsDark = useSetRecoilState(isDarkWrapper);
  useEffect(() => {
    setIsDark(false);
  }, []);

  const handleMeListClick = () => {
    return navigate("/me/list");
  };

  const isAnimationNeed = path.includes("completion");

  const saveImg = () => {
    if (isShare) {
      setIsShare(false);
    }
    exportElementAsPNG();
  };

  const handleStarClick = (index: number) => {
    setStarData(stars[index]);
    setIsCheerStartDetailShow(true);
  };

  React.useEffect(() => {
    if (isSnackBarShow) {
      setTimeout(() => {
        setIsSnackBarShow(false);
      }, 3000);
    }
  }, [isSnackBarShow]);

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
      {isSnackBarShow && <SnackBar text="링크가 복사되었어요." />}
      {bucketId && <BackArrow />}
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
          <AnimationBox animation={isAnimationNeed}>
            <div style={{ position: "relative" }}>
              {isAnimationNeed ? (
                <img
                  style={{
                    width: "325px",
                  }}
                  src={lanternRising}
                />
              ) : (
                <img src={lanternsStopped} />
              )}
            </div>
          </AnimationBox>
          <AnimationContexts animation={isAnimationNeed}>
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
      {isCheerStarDetailShow && starData && (
        <CheerStarDetailModal
          starData={starData}
          setIsCheerStartDetailShow={setIsCheerStartDetailShow}
          setIsRemoveModalShow={setIsRemoveModalShow}
        />
      )}
      {starData && isRemoveModalShow && (
        <CheerStarRemove
          setIsRemoveModalShow={setIsRemoveModalShow}
          starId={starData?.starId}
        />
      )}

      <AnimationBlackWrapper animation={isAnimationNeed} />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      >
        {!isStarFetching &&
          stars &&
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
                onClick={() => handleStarClick(index)}
              />
            );
          })}
      </div>
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
