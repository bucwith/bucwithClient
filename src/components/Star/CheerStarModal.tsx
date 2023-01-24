import React from "react";
import { ButtonColor } from "../../@types/enums";
import Button from "../Button";
import SubTitle from "../main/SubTitle";
import TextArea from "../main/TextArea";
import { FlexBox, ModalBlackWrapper, ModalWrapper } from "../Wrapper";
import { pinkIcons, yellowIcons, blueIcons } from "../../assets/images/icons";

import { useMutation } from "react-query";
import { putCheerStar } from "../../api/my-api";
import warningIcon from "../../assets/images/icon_warning.png";
import closeIcon from "../../assets/images/icon_close.png";
import { useParams } from "react-router-dom";
import {
  ActiveStar,
  ActiveStarBox,
  Arrow,
  ArrowBox,
  CloseIcon,
  Color,
  IconList,
  ModalBox,
  Star,
  WarningMsg,
} from "./style";
import styled from "styled-components";
import glow from "../../assets/images/list_glow.png";

const Colors = [
  { color: "#FF6BDE", icons: pinkIcons, code: "P" },
  { color: "#F5E148", icons: yellowIcons, code: "Y" },
  { color: "#007BED", icons: blueIcons, code: "B" },
];

interface CheerStarModalProps {
  setIsCheerStartShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const starCount = pinkIcons.length;

const CheerStarModal = ({ setIsCheerStartShow }: CheerStarModalProps) => {
  const { bucketId } = useParams();
  const [contents, setContents] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [iconIndex, setIconIndex] = React.useState<number>(1);
  const [icons, setIcons] = React.useState(pinkIcons);
  const [iconColor, setIconColor] = React.useState("P");

  const clickNext = () => {
    if (iconIndex === starCount - 1) {
      setIconIndex(0);
    }
    setIconIndex((prev) => prev + 1);
  };

  const clickPrev = () => {
    if (iconIndex === 0) {
      setIconIndex(starCount - 1);
    }
    setIconIndex((prev) => prev - 1);
  };

  const cheerStar = useMutation(
    ["getCheerStar"],
    () =>
      putCheerStar({
        bucketId: Number(bucketId),
        nickname,
        contents,
        iconColor,
        iconIndex,
      }),
    { onSuccess: () => setIsCheerStartShow(false) }
  );

  return (
    <>
      <ModalWrapper>
        <ModalBox gap="30px">
          <SubTitle text="응원 별 달기" isCentered />
          <div style={{ position: "relative" }}>
            <IconList>
              <Star
                src={
                  iconIndex === 0 ? icons[starCount - 1] : icons[iconIndex - 1]
                }
              />
              <ActiveStarBox>
                <ActiveStar src={icons[iconIndex]} />
                <img src={glow} style={{ position: "absolute" }} />
              </ActiveStarBox>
              <Star
                src={
                  iconIndex === starCount - 1 ? icons[0] : icons[iconIndex + 1]
                }
              />
            </IconList>
            <ArrowBox>
              <Arrow onClick={() => clickPrev()}>‹</Arrow>
              <Arrow onClick={() => clickNext()}>›</Arrow>
            </ArrowBox>
          </div>
          <FlexBox gap="20px" justify="center" direction="row">
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
          <FlexBox gap="10px" style={{ alignItems: "stretch" }}>
            <TextArea
              placeholder="응원 메세지를 작성해보세요."
              textarea
              onChange={(e) => setContents(e.target.value)}
            />
            <TextArea
              placeholder="닉네임을 입력해 주세요."
              onChange={(e) => setNickname(e.target.value)}
            />
          </FlexBox>
          <FlexBox gap="10px">
            <FlexBox justify="center" gap="4px" direction="row">
              <img src={warningIcon} alt="" />
              <WarningMsg>
                응원별은 등록 후 수정 또는 삭제가 불가능해요.
              </WarningMsg>
            </FlexBox>
            <Button
              disabled={!contents || !nickname}
              text="응원 별 달기"
              color={ButtonColor.Primary}
              onClick={() => cheerStar.mutate()}
            />
          </FlexBox>
          <CloseIcon
            src={closeIcon}
            alt="닫기 버튼"
            onClick={() => setIsCheerStartShow(false)}
          />
        </ModalBox>
      </ModalWrapper>
      <ModalBlackWrapper />
    </>
  );
};

export default CheerStarModal;

// const Glow = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;
