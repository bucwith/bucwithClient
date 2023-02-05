import React from "react";
import { useMutation } from "react-query";
import styled from "styled-components";
import { bucketType } from "../../@types/enums";
import { checkBucket } from "../../api/my-api";
import { BucketListType } from "../../pages/List";
import theme from "../../styles/theme";
import { FlexBox } from "../Wrapper";
import { useNavigate } from "react-router-dom";

// images
import lightIcon from "../../assets/images/icon_lantern.png";
import arrowIcon from "../../assets/images/icon_arrow-right.png";
import editIcon from "../../assets/images/icon-pencil.png";
import starIcon from "../../assets/images/list_star.png";
import { MODAL_BGCOLOR } from "../../constant";
interface BucketItemProps {
  data: BucketListType;
  setCongratModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEditBucketShow: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedBucketData: React.Dispatch<React.SetStateAction<BucketListType>>;
}

type ChipDataType = {
  text: string;
  color: string;
};

const BucketItem = ({
  data,
  setCongratModal,
  setIsEditBucketShow,
  setSelectedBucketData,
}: BucketItemProps) => {
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = React.useState(data?.isFinished);

  const renderChip = () => {
    if (data.isFinished === undefined) {
      return null;
    }

    const checkboxMutation = useMutation(() =>
      checkBucket(data?.bucketId ?? -1)
    );

    const handleCheckClick = () => {
      if (!isChecked) {
        setCongratModal(true);
      }

      checkboxMutation.mutate();
      setIsChecked((prev) => !prev);
    };

    const getData = () => {
      switch (data.type) {
        default:
          return { text: "꾸준히", color: "#D47F7F" };

        case bucketType.BT002:
          return { text: "일년동안", color: "#3D9EBC" };

        case bucketType.BT003:
          return { text: "오랫동안", color: "#63BC77" };
      }
    };

    const chipData: ChipDataType = getData();

    return (
      <FlexBox
        gap="8px"
        style={{ margin: "10px 0 20px" }}
        direction="row"
        justify="start"
      >
        <ChipCheckBox
          color={chipData.color}
          isFinished={isChecked}
          onClick={(e) => {
            e.stopPropagation();
            handleCheckClick();
          }}
        >
          {isChecked && "✔"}
        </ChipCheckBox>
        <Chip color={chipData.color}>{chipData.text}</Chip>
      </FlexBox>
    );
  };

  const handleEditClick = () => {
    setSelectedBucketData(data && data);
    setIsEditBucketShow(true);
  };
  const cutContents = (contents: string) => {
    const text = contents.split("\n");
    if (text.length > 2) {
      const showText = text.slice(0, 2);
      showText[1] += " ...";
      return showText.join("\n");
    }
    return contents;
  };

  const iconImage = isChecked ? (
    <img
      width="50px"
      height="50px"
      style={{ margin: "-5px 0 0 -5px" }}
      src={starIcon}
      alt="별모양 아이콘"
    />
  ) : (
    <img src={lightIcon} alt="랜턴 아이콘" />
  );

  return (
    <ItemBox onClick={() => navigate(`/me/bucket/${data?.bucketId}`)}>
      <EditButtonBox>
        <EditButton as={"button"} onClick={() => handleEditClick()}>
          <img width="14px" src={editIcon} />
          <p>수정하기</p>
        </EditButton>
      </EditButtonBox>
      <FlexBox style={{ alignItems: "flex-start" }}>
        {iconImage}
        {renderChip()}
        <ItemTitle>{cutContents(data?.contents)}</ItemTitle>
      </FlexBox>
      <img src={arrowIcon} />
    </ItemBox>
  );
};

export default BucketItem;

const EditButtonBox = styled.span`
  padding: 20px;
  top: 0;
  right: 0;
  position: absolute;
`;

const EditButton = styled(FlexBox)`
  flex-direction: row;
  justify-content: flex-end;
  gap: 4px;
  > * {
    color: white;
    font-size: 12px;
  }
  &:disabled {
    opacity: 0.4;
  }
`;

const ItemBox = styled(FlexBox)`
  padding: 30px 20px;
  background-color: ${MODAL_BGCOLOR};
  border-radius: 30px;
  flex-direction: row;
  position: relative;
`;

const ItemTitle = styled.h2`
  white-space: pre-wrap;
  line-height: 22px;
  font-weight: 400;
  font-size: 16px;
  color: ${theme.colors.whiteColor};
  text-align: left;
`;

const Chip = styled.span<{ color: string }>`
  border: 1px solid ${(props) => props.color};
  color: ${(props) => props.color};
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 1.2rem;
`;

const ChipCheckBox = styled.div<{ color: string; isFinished: boolean }>`
  width: 26px;
  height: 26px;
  margin: 0;
  background-color: ${(props) => (props.isFinished ? props.color : "inherit")};
  color: white;
  border: 1px solid ${(props) => props.color};
  border-radius: 8px;
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
