import React from "react";
import { useMutation } from "react-query";
import styled from "styled-components";
import { bucketType } from "../../@types/enums";
import { checkBucket } from "../../api/my-api";
import lightIcon from "../../assets/icon_lantern.png";
import { BucketListType } from "../../pages/List";
import theme from "../../styles/theme";
import { FlexBox } from "../Wrapper";
import arrowIcon from "../../assets/icon_arrow-right.png";
import editIcon from "../../assets/icon-pencil.png";
import { useNavigate } from "react-router-dom";
interface BucketItemProps {
  data: BucketListType;
  setCongratModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEditBucketShow: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedBuckeData: React.Dispatch<React.SetStateAction<BucketListType>>;
}

type ChipDataType = {
  text: string;
  color: string;
};

const BucketItem = ({
  data,
  setCongratModal,
  setIsEditBucketShow,
  setSelectedBuckeData,
}: BucketItemProps) => {
  const navigate = useNavigate();

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

    const [isChecked, setIsChecked] = React.useState(data?.isFinished);

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
          onClick={() => handleCheckClick()}
        >
          {isChecked && "✔"}
        </ChipCheckBox>
        <Chip color={chipData.color}>{chipData.text}</Chip>
      </FlexBox>
    );
  };
  const handleEditClick = () => {
    setSelectedBuckeData(data && data);
    setIsEditBucketShow(true);
  };

  return (
    <ItemBox>
      <EditButton onClick={() => handleEditClick()}>
        <img width="14px" src={editIcon} />
        <p>수정하기</p>
      </EditButton>
      <FlexBox style={{ alignItems: "flex-start" }}>
        <img src={lightIcon} />
        {renderChip()}
        <ItemTitle>{data?.contents}</ItemTitle>
      </FlexBox>
      <img
        src={arrowIcon}
        onClick={() => navigate(`/me/bucket/${data?.bucketId}`)}
      />
    </ItemBox>
  );
};

export default BucketItem;

const EditButton = styled(FlexBox)`
  position: absolute;
  flex-direction: row;
  justify-content: flex-end;
  padding: 20px;
  top: 0;
  right: 0;
  gap: 4px;
  > * {
    color: white;
    font-size: 12px;
  }
`;

const ItemBox = styled(FlexBox)`
  width: 100%;
  padding: 30px 20px;
  background-color: #24252c;
  border-radius: 30px;
  flex-direction: row;
  position: relative;
`;

const ItemTitle = styled.h2`
  font-weight: 400;
  font-size: 1.6rem;
  color: ${theme.colors.whiteColor};
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
