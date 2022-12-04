import React from "react";
import styled from "styled-components";
import { BucketTypeEnum } from "../../@types/enums";
import lightIcon from "../../assets/icon_lantern.png";
import { BucketListType } from "../../pages/List";
import theme from "../../styles/theme";
import { FlexBox } from "../Wrapper";
interface BucketItemProps {
  data: BucketListType;
}

type ChipDataType = {
  text: string;
  color: string;
};

const BucketItem = ({ data }: BucketItemProps) => {
  const renderChip = () => {
    const getData = () => {
      switch (data.type) {
        default:
          return { text: "꾸준히", color: "#D47F7F" };

        case BucketTypeEnum.BT002:
          return { text: "일년동안", color: "#3D9EBC" };

        case BucketTypeEnum.BT003:
          return { text: "오랫동안", color: "#63BC77" };
      }
    };
    const chipData: ChipDataType = getData();

    return (
      <FlexBox gap="8px" style={{ margin: "10px 0 20px" }}>
        <ChipCheckBox color={chipData.color} />
        <Chip color={chipData.color}>{chipData.text}</Chip>;
      </FlexBox>
    );
  };

  return (
    <ItemBox>
      <img src={lightIcon} />
      {renderChip()}
      <ItemTitle>{data.contents}</ItemTitle>
    </ItemBox>
  );
};

export default BucketItem;

const ItemBox = styled.div`
  width: 100%;
  padding: 30px 20px;
  background-color: rgba(36, 37, 44, 0.5);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

const ChipCheckBox = styled.div<{ color: string }>`
  width: 26px;
  height: 26px;
  margin: 0;
  background-color: inherit;
  border: 1px solid ${(props) => props.color};
  border-radius: 8px;
`;
