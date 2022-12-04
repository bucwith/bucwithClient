import React from "react";
import styled from "styled-components";
import { DarkWrapper, FlexBox, HorizonCentered } from "../components/Wrapper";
import theme from "../styles/theme";
import mockListImg from "../assets/mock_list_img.png";
import BucketItem from "../components/list/BucketItem";
const List = () => {
  return (
    <DarkWrapper padding="30px 20px">
      <HorizonCentered direction="column">
        <ListTitle>내 리스트 보관함</ListTitle>
        <StyledImg src={mockListImg} />
        <FlexBox gap="20px">
          <BucketItem />
        </FlexBox>
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
