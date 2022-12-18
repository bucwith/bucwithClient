import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import theme from "../styles/theme";
import {
  FlexBox,
  ImagedWrapper,
  ModalBlackWrapper,
} from "../components/Wrapper";
import Button from "../components/Button";
import { ButtonColor } from "../@types/enums";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Share from "../components/Share/Share";
import { useQuery } from "react-query";
import { getCheerStar } from "../api/my-api";
import { toPng } from "html-to-image";
import arrow from "../assets/icon_arrow-right.png";
import { useRecoilValue } from "recoil";
import { userDataAtom } from "../store/atoms";
import getIconSrc from "../utils/getIconSrc";
import { CHEER_STAR_LOCATION } from "../constant";
import lanternRising from "../assets/lanternRising.png";
import { AnimationBox, AnimationContexts } from "../lib/animation";
import CheerStarDetailModal from "../components/Star/CheerStarDetailModal";
import CheerStarRemove from "../components/Star/CheerStarRemove";

type StarDataType = {
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

  const { bucketId } = useParams();
  const [isShare, setIsShare] = useState(false);
  const [isCheerStarDetailShow, setIsCheerStartDetailShow] =
    React.useState(false);
  const [isRemoveModalShow, setIsRemoveModalShow] = React.useState(false);
  const [starData, setStarData] = React.useState<StarDataType | undefined>();

  const userData = useRecoilValue(userDataAtom);

  const modalClose = (e: any) => {
    if (e.target !== e.currentTarget) return;
    setIsShare(false);
  };
  const contents = location.state.contents;

  const { data: stars } = useQuery(["getCheerStar"], () =>
    bucketId ? getCheerStar(Number(bucketId)) : null
  );

  const handleMeListClick = () => {
    return navigate("/me/list");
  };

  // 앨범에 저장하는 코드
  const captureRef = React.useRef<HTMLDivElement>();
  const exportElementAsPNG = (
    el: HTMLDivElement | undefined,
    filename: string
  ) => {
    if (el === undefined) {
      return null;
    }

    toPng(el).then((image) => {
      const link = window.document.createElement("a");
      link.download = filename + ".png";
      link.href = image;
      link.click();
    });
  };

  const saveImg = (setIsShare: any) => {
    if (isShare) {
      setIsShare(false);
    }
    exportElementAsPNG(captureRef.current, "test");
  };

  const handleStarClick = (index: number) => {
    setStarData(stars[index]);
    setIsCheerStartDetailShow(true);
  };

  return (
    <ImagedWrapper
      ref={(ref) => {
        if (ref) {
          captureRef.current = ref;
        }
      }}
    >
      {bucketId && <Arrow src={arrow} />}
      <MainWrap justify="space-between">
        {isShare ? (
          <Share
            modalClose={modalClose}
            saveImg={saveImg}
            setIsShare={setIsShare}
          />
        ) : null}
        <AnimationContexts>
          <FlexBox>
            <SecondaryText>{`${userData?.name}님의 버킷리스트는`}</SecondaryText>
            <PrimaryText>{contents}</PrimaryText>
          </FlexBox>
        </AnimationContexts>
        <AnimationBox>
          <img
            style={{
              height: "280px",
            }}
            src={lanternRising}
          />
          {stars &&
            stars.map((star: StarDataType, index: number) => {
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
                  onClick={() => handleStarClick(index)}
                />
              );
            })}
        </AnimationBox>

        <AnimationContexts>
          <FlexBox gap="10px" direction="row" style={{ flexGrow: 1 }}>
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
        </AnimationContexts>
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
          starId={starData.starId}
        />
      )}
      <AnimationBlack />
    </ImagedWrapper>
  );
};

export default BucketDetail;

const MainWrap = styled(FlexBox)`
  position: relative;
  padding-top: 60px;
  height: 100%;
  z-index: 1000;
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

const wrapperKeyframe = keyframes`
0% {
opacity: 0.4;
}
100% {
opacity: 0;

}
`;
const AnimationBlack = styled(ModalBlackWrapper)`
  opacity: 0;
  animation: 2s linear ${wrapperKeyframe};
`;
