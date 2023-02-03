import React, { ChangeEventHandler } from "react";
import styled from "styled-components";
import linkIcon from "../../assets/images/icon_link.png";
import kakaoIcon from "../../assets/images/icon_kakao.png";
import fbIcon from "../../assets/images/icon_fb.png";
import twitterIcon from "../../assets/images/icon_twitter.png";
import closeIcon from "../../assets/images/icon_close.png";
import downloadIcon from "../../assets/images/icon_download.png";
import { ModalBlackWrapper } from "../Wrapper";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userDataAtom } from "../../store/atoms";

const ShareInnerWarp = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #24252c;
  border-radius: 30px 30px 0 0;
  padding: 30px 20px;
  text-align: center;
  z-index: 9999;
`;

const FlexWrapper = styled.ul`
  display: flex;
  justify-content: space-evenly;
  margin: 30px 0;
`;

const Items = styled.li``;

const Click = styled.button`
  background-color: rgba(0, 0, 0, 0);
`;

const Sub = styled.p`
  padding: 6px;
  color: white;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0px;
`;

const SaveButton = styled.button`
  background-color: #4d4e54;
  border-radius: 16px;
  width: 100%;
  color: white;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  padding: 20px;
  background-image: url(${downloadIcon});
  background-repeat: no-repeat;
  background-position: 94% 48%;
`;

const CloseButton = styled.button`
  width: 20px;
  height: 20px;
  background-image: url(${closeIcon});
  position: absolute;
  top: 32px;
  right: 26px;
  background-color: #24252c;
`;

export interface TextAreaProps {
  placeholder: string;
  textarea?: boolean;
  onInputChange?: ChangeEventHandler<HTMLInputElement>;
  onTextAreaChange?: ChangeEventHandler<HTMLTextAreaElement>;
  value?: string;
  setIsSnackBarShow: React.Dispatch<React.SetStateAction<boolean>>;
  bucketIdFromData: number;
}

export default function Share({
  modalClose,
  saveImg,
  setIsSnackBarShow,
  bucketIdFromData,
}: any) {
  const { bucketId } = useParams();

  const shareLink = encodeURI(
    `${process.env.REACT_APP_DOMAIN}/guest/${bucketId ?? bucketIdFromData}`
  );
  const userData = useRecoilValue(userDataAtom);
  // const shareLink = `${window.location.origin}/guest/${
  //   bucketId ?? bucketIdFromData
  // }`;
  const shareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "벅윗",
        description: `${userData?.name}님의 소망을 응원해주세요.`,
        imageUrl: process.env.REACT_APP_SHARE_IMG,
        link: {
          mobileWebUrl: shareLink,
          webUrl: shareLink,
        },
      },
      // 배포 후 플레이스토어 다운으로 연결
      // buttons: [
      //   {
      //     title: "웹으로 이동",
      //     link: {
      //       mobileWebUrl: "https://developers.kakao.com",
      //       webUrl: "https://developers.kakao.com",
      //     },
      //   },
      //   {
      //     title: "앱으로 이동",
      //     link: {
      //       mobileWebUrl: "https://developers.kakao.com",
      //       webUrl: "https://developers.kakao.com",
      //     },
      //   },
      // ],
    });
  };

  const shareItems = [
    {
      imgURL: kakaoIcon,
      title: "카카오톡",
      onClick: () => shareKakao(),
    },
    {
      imgURL: fbIcon,
      title: "페이스북",
      onClick: () =>
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${shareLink}`,
          "_blank",
          "width=600,height=400"
        ),
    },
    {
      imgURL: twitterIcon,
      title: "twitter",
      onClick: () =>
        window.open(
          `https://twitter.com/intent/tweet?url=${shareLink}&text=${`저의 소망을 응원해주세요!`}&hashtags=벅윗리스트`
        ),
    },
    {
      imgURL: linkIcon,
      title: "링크 복사",
      onClick: () => {
        if(/ANDROID_APP/i.test(navigator.userAgent)) {
          window.NativeAndroid.copyToClipboard(shareLink);
          setIsSnackBarShow(true);
          return;
        }

        //일반적인 브라우저 환경이라면, 카카오 Javascript SDK 를 이용한 카카오로그인을 시도한다.
        navigator.clipboard.writeText(shareLink).then(() => {
          setIsSnackBarShow(true);
        })
      },
    },
  ];

  return (
    <>
      <ModalBlackWrapper onClick={modalClose} />
      <ShareInnerWarp>
        <Title>내 버킷 공유하기</Title>
        <CloseButton onClick={modalClose} />
        <FlexWrapper>
          {shareItems.map((item) => (
            <Items key={item.title}>
              <Click onClick={item.onClick}>
                <img src={item.imgURL} />
                <Sub>{item.title}</Sub>
              </Click>
            </Items>
          ))}
        </FlexWrapper>
        <SaveButton onClick={() => saveImg()}>
          내 앨범에 이미지 저장하기
        </SaveButton>
      </ShareInnerWarp>
    </>
  );
}

const Title = styled.h2`
  font-weight: 700;
  font-size: 20px;
  color: white;
`;
