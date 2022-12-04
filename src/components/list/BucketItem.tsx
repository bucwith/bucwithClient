import React from "react";
import styled from "styled-components";
import lightIcon from "../../assets/icon_lantern.png";
import { BucketListType } from "../../pages/List";
import theme from "../../styles/theme";
interface BucketItemProps {
  data: BucketListType;
}
const BucketItem = ({ data }: BucketItemProps) => {
  return (
    <ItemBox>
      <img src={lightIcon} />
      <Chip>꾸준히</Chip>
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

const Chip = styled.span`
  border: 1px solid #d47f7f;
  color: #d47f7f;
  padding: 6px 10px;
  border-radius: 8px;
  margin: 10px 0 20px;
`;

const ItemTitle = styled.h2`
  font-weight: 400;
  font-size: 1.6rem;
  color: ${theme.colors.whiteColor};
`;
