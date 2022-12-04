import React from "react";
import styled from "styled-components";
import { DarkWrapper, FlexBox, HorizonCentered } from "../components/Wrapper";
import theme from "../styles/theme";
import mockListImg from "../assets/mock_list_img.png";
import BucketItem from "../components/list/BucketItem";
import { useQuery } from "react-query";
import { getBucketList } from "../api/my-api";

export interface BucketListType {
  bucketId?: number;
  contents: string;
  userId: number;
  type: string;
  registDate?: Date;
}

const List = () => {
  const { data } = useQuery(["getData"], () => getBucketList());

  if (!data) {
    return null;
  }

  return (
    <DarkWrapper padding="30px 20px">
      <HorizonCentered direction="column">
        <ListTitle style={{ paddingBottom: "10px" }}>
          내 리스트 보관함
        </ListTitle>
        <ScrollWrapper>
          <StyledImg src={mockListImg} />
          <FlexBox gap="20px" direction="column">
            {data.map((bucket: BucketListType, index: number) => (
              <BucketItem key={index} data={bucket} />
            ))}
          </FlexBox>
        </ScrollWrapper>
      </HorizonCentered>
    </DarkWrapper>
  );
};

export default List;

const ListTitle = styled.h1`
  color: ${theme.colors.whiteColor};
  font-size: 17px;
`;

const StyledImg = styled.img`
  padding: 10px 0 30px;
`;

const ScrollWrapper = styled.div`
  overflow: scroll;
`;
