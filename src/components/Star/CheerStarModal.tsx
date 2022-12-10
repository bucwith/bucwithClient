import React from "react";
import styled, { keyframes } from "styled-components";
import { ButtonColor } from "../../@types/enums";
import Button from "../Button";
import { Wrap } from "../main/InputBox";
import SubTitle from "../main/SubTitle";
import TextArea from "../main/TextArea";
import { FlexBox, ModalWrapper } from "../Wrapper";
import { pinkIcons } from "./icons";
import { yellowIcons } from "./icons";
import { blueIcons } from "./icons";
import { useMutation } from "react-query";
import { putCheerStar } from "../../api/my-api";
import warningIcon from "../../assets/icon_warning.png";
import closeIcon from "../../assets/icon_close.png";
const Colors = [
  { color: "#FF6BDE", icons: pinkIcons, code: "P" },
  { color: "#F5E148", icons: yellowIcons, code: "Y" },
  { color: "#007BED", icons: blueIcons, code: "B" },
];

const CheerStarModal = () => {
  const [contents, setContents] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const bucketId = 44;
  const [iconIndex, setIconIndex] = React.useState<number>(0);
  const [icons, setIcons] = React.useState(pinkIcons);
  const [iconColor, setIconColor] = React.useState("P");

  const clickNext = () => {
    if (iconIndex < icons.length - 1) {
      setIconIndex((prev) => prev + 1);
    }
  };

  const clickPrev = () => {
    setIconIndex((prev) => prev - 1);
  };

  const cheerStar = useMutation({
    mutationFn: () =>
      putCheerStar({ bucketId, nickname, contents, iconColor, iconIndex }),
  });

  return (
    <ModalWrapper>
      <ModalBox gap="30px">
        <SubTitle text="응원 별 달기" isCentered />
        <FlexBox justify="center">
          <div
            style={{
              width: "248px",
              height: "68px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <IconList gap="60px" iconIndex={iconIndex}>
              {icons.map((icon, index) => (
                <IconImage
                  src={icon}
                  key={index}
                  className={iconIndex === index ? "active" : ""}
                />
              ))}
            </IconList>
          </div>
          <ArrowBox justify="center" gap="120px">
            <Arrow onClick={() => clickPrev()} disabled={iconIndex === 0}>
              ‹
            </Arrow>
            <Arrow
              onClick={() => clickNext()}
              disabled={iconIndex === icons.length - 1}
            >
              ›
            </Arrow>
          </ArrowBox>
        </FlexBox>
        <FlexBox gap="20px" justify="center">
          {Object.values(Colors).map((data, index) => (
            <Color
              key={index}
              color={data.color}
              onClick={() => {
                setIcons(data.icons);
                setIconColor(data.code);
              }}
            />
          ))}
        </FlexBox>
        <FlexBox
          gap="10px"
          direction="column"
          style={{ alignItems: "stretch" }}
        >
          <TextArea
            placeholder="응원 메세지를 작성해보세요."
            textarea
            onTextAreaChange={(e) => setContents(e.target.value)}
          />
          <TextArea
            placeholder="닉네임을 입력해 주세요."
            onInputChange={(e) => setNickname(e.target.value)}
          />
        </FlexBox>
        <FlexBox gap="10px" direction="column">
          <FlexBox justify="center" gap="4px">
            <img src={warningIcon} alt="" />
            <WarningMsg>
              응원별은 등록 후 수정 또는 삭제가 불가능해요.
            </WarningMsg>
          </FlexBox>
          <Button
            disabled={false}
            text="응원 별 달기"
            color={ButtonColor.Primary}
            onClick={() => cheerStar.mutate()}
          />
        </FlexBox>
        <CloseIcon
          src={closeIcon}
          alt="닫기 버튼"
          onClick={() => "닫히는 event"}
        />
      </ModalBox>
    </ModalWrapper>
  );
};

export default CheerStarModal;

interface Colorprops {
  color: string;
}
const ModalBox = styled(Wrap)`
  width: 100%;
  background-color: #24252c;
  position: relative;
`;

const Color = styled.div<Colorprops>`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const Arrow = styled.button`
  font-size: 40px;
  color: white;
  background-color: inherit;
  :disabled {
    opacity: 0.3;
  }
`;

const ArrowBox = styled(FlexBox)`
  position: absolute;
  top: 100px;
`;

const IconList = styled(FlexBox)<{ iconIndex: number }>`
  position: absolute;
  top: 0;
  transform: translate(50%, 0);
  left: ${(props) => -(props.iconIndex * 90 + 34)}px;
`;

const dungdung = keyframes`
 0%{
  margin-bottom: 0;
 }
 50% {
  margin-bottom: 4px;
 }
  100%{
  margin-bottom: 0;
 }
`;

const IconImage = styled.img`
  width: 30px;
  opacity: 0.33;
  position: relative;
  &.active {
    animation: ${dungdung} 1s linear infinite;
    width: 68px;
    opacity: 1;
  }
`;
// ::after {
//   content: "";
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 90px;
//   height: 90px;
//   background-color: white;
//   /* background: rgba(205, 203, 255, 0.6); */
//   opacity: 0.5;
//   /* filter: blur(15px); */
//   z-index: 3000;
// }

const WarningMsg = styled.span`
  font-weight: 400;
  font-size: 12px;
  color: #dbdcdd;
`;

const CloseIcon = styled.img`
  width: 20px;
  position: absolute;
  top: 30px;
  right: 20px;
`;
