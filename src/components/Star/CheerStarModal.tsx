import React from "react";
import { ButtonColor } from "../../@types/enums";
import Button from "../Button";
import SubTitle from "../main/SubTitle";
import TextArea from "../main/TextArea";
import { FlexBox, ModalWrapper } from "../Wrapper";
import { pinkIcons, yellowIcons, blueIcons } from "../../assets/icons";

import { useMutation } from "react-query";
import { putCheerStar } from "../../api/my-api";
import warningIcon from "../../assets/icon_warning.png";
import closeIcon from "../../assets/icon_close.png";
import { useParams } from "react-router-dom";
import {
  Arrow,
  ArrowBox,
  CloseIcon,
  Color,
  IconImage,
  IconList,
  ModalBox,
  WarningMsg,
} from "./style";

const Colors = [
  { color: "#FF6BDE", icons: pinkIcons, code: "P" },
  { color: "#F5E148", icons: yellowIcons, code: "Y" },
  { color: "#007BED", icons: blueIcons, code: "B" },
];

interface CheerStarModalProps {
  setIsCheerStartShow: React.Dispatch<React.SetStateAction<boolean>>;
}
const CheerStarModal = ({ setIsCheerStartShow }: CheerStarModalProps) => {
  const { bucketId } = useParams();
  const [contents, setContents] = React.useState("");
  const [nickname, setNickname] = React.useState("");
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
    <ModalWrapper>
      <ModalBox gap="30px">
        <SubTitle text="응원 별 달기" isCentered />
        <FlexBox justify="center" direction="row">
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
            onTextAreaChange={(e) => setContents(e.target.value)}
          />
          <TextArea
            placeholder="닉네임을 입력해 주세요."
            onInputChange={(e) => setNickname(e.target.value)}
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
            disabled={false}
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
  );
};

export default CheerStarModal;
