import React from "react";
import styled from "styled-components";
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
    if (iconIndex > 0) {
      setIconIndex((prev) => prev - 1);
    }
  };

  const cheerStar = useMutation({
    mutationFn: () =>
      putCheerStar({ bucketId, nickname, contents, iconColor, iconIndex }),
  });

  const check = () => {
    console.log(name);
    console.log(contents);
  };
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
            <Arrow onClick={() => clickPrev()}>‹</Arrow>
            <Arrow onClick={() => clickNext()}>›</Arrow>
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
        <Button
          disabled={false}
          text="응원 별 달기"
          color={ButtonColor.Primary}
          // onClick={() => check()}
          onClick={() => cheerStar.mutate()}
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
`;

const Color = styled.div<Colorprops>`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const Arrow = styled.div`
  font-size: 40px;
  color: white;
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

const IconImage = styled.img`
  width: 30px;
  opacity: 0.33;
  &.active {
    opacity: 1;
    width: 68px;
  }
`;
