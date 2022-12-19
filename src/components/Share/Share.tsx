import React, { ChangeEventHandler } from "react";
import styled from "styled-components";
import Title from "../Title";
import linkIcon from "../../assets/icon_link.png";
import kakaoIcon from "../../assets/icon_kakao.png";
import fbIcon from "../../assets/icon_fb.png";
import twitterIcon from "../../assets/icon_twitter.png";
import closeIcon from "../../assets/icon_close.png";
import downloadIcon from "../../assets/icon_download.png";

const ShareWarp = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  top: -30px;
  bottom: -30px;
  left: -20px;
  right: -20px;
`;

const ShareInnerWarp = styled.div`
  position: absolute;
  background-color: #24252c;
  border-radius: 30px 30px 0 0;
  padding: 30px 20px;
  bottom: 0;
  left: 20px;
  right: 20px;
  text-align: center;
  z-index: 1100;
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
  height: 59px;
  color: white;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  text-align: left;
  padding: 0 20px;
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
}

export default function Share({
  modalClose,
  saveImg,
  setIsShare,
  setIsSnackBarShow,
}: any) {
  const shareItems = [
    {
      imgUrl: kakaoIcon,
      title: "카카오톡",
      onClick: () =>
        window.open(
          "https://www.kakaocorp.com/page/service/service/KakaoTalk?lang=ko"
        ),
    },
    {
      imgUrl: fbIcon,
      title: "페이스북",
      onClick: () => window.open("https://www.facebook.com/"),
    },
    {
      imgURL: twitterIcon,
      title: "twitter",
      onClick: () => window.open("https://twitter.com/"),
    },
    {
      imgURL: linkIcon,
      title: "링크 복사",
      onClick: () =>
        navigator.clipboard.writeText(window.location.href).then(() => {
          setIsSnackBarShow(true);
        }),
    },
  ];
  return (
    <ShareWarp onClick={modalClose}>
      <ShareInnerWarp>
        <Title primary={`내 버킷 공유하기`}></Title>
        <CloseButton onClick={modalClose}></CloseButton>
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
        <SaveButton onClick={() => saveImg(setIsShare)}>
          내 앨범에 이미지 저장하기
        </SaveButton>
      </ShareInnerWarp>
    </ShareWarp>
  );
}
