import React, { ChangeEventHandler } from "react";
import styled from "styled-components";
import Title from "../Title";
import linkIcon from "../../assets/icon_link.png";
import kakaoIcon from "../../assets/icon_kakao.png";
import fbIcon from "../../assets/icon_fb.png";
import twitterIcon from "../../assets/icon_twitter.png";
import arrowIcon from "../../assets/icon_arrow_R.png";
import downloadIcon from "../../assets/icon_download.png";


const ShareWarp = styled.div`
  position: absolute;
  background-color: rgba(0,0,0,0.6);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const ShareInnerWarp = styled.div`
  position: absolute;
  background-color: #24252C;
  border-radius: 30px 30px 0 0;
  padding: 30px 20px;
  top: 540px;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
`;

const FlexWrapper = styled.ul`
  display: flex;
  justify-content: space-evenly;
  margin: 30px 0;
`;

const Items = styled.li`

`;

const Click = styled.button`
  background-color: rgba(0,0,0,0);
`

const Sub = styled.p`
  padding: 6px;
  color: white;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0px;
`;

const SaveButton = styled.button`
  background-color: #4D4E54;
  border-radius : 16px;
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
`

const CloseButton = styled.button`
  width: 20px;
  height: 20px;
  background-image: url(${arrowIcon});
  position: absolute;
  top: 32px;
  right: 26px;
  background-color: #24252C;
`

export interface TextAreaProps {
  placeholder: string;
  textarea?: boolean;
  onInputChange?: ChangeEventHandler<HTMLInputElement>;
  onTextAreaChange?: ChangeEventHandler<HTMLTextAreaElement>;
  value?: string;
}
export default function Share() {
  return (
    <ShareWarp>
      <ShareInnerWarp>
        <Title primary={`내 버킷 공유하기`}></Title>
        <CloseButton></CloseButton>
        <FlexWrapper>
          <Items>
            <Click>
              <img src={kakaoIcon} />
              <Sub>카카오톡</Sub>
            </Click>
          </Items>
          <Items>
            <Click>
              <img src={fbIcon} />
              <Sub>페이스북</Sub>
            </Click>
          </Items>
          <Items>
            <Click>
              <img src={twitterIcon} />
              <Sub>twitter</Sub>
            </Click>
          </Items>
          <Items>
            <Click>
              <img src={linkIcon} />
              <Sub>링크 복사</Sub>
            </Click>
          </Items>
        </FlexWrapper>
        <SaveButton>내 앨범에 이미지 저장하기</SaveButton>
      </ShareInnerWarp>
    </ShareWarp>
  );
}
