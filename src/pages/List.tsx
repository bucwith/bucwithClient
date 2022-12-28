import React from "react";
import styled from "styled-components";
import { FlexBox, HorizonCentered, ImagedWrapper } from "../components/Wrapper";
import theme from "../styles/theme";
import mainImage from "../assets/list_image.png";
import BucketItem from "../components/list/BucketItem";
import { useQuery } from "react-query";
import { getBucketList } from "../api/my-api";
import CongratModal from "../components/list/CongratModal";
import { useNavigate } from "react-router-dom";

export interface BucketListType {
  bucketId?: number;
  contents: string;
  userId?: number;
  type: string;
  registDate?: Date;
  isFinished?: boolean;
}

const List = () => {
  // const { data: token } = useQuery(["token"], () => getToken());
  const [congratModal, setCongratModal] = React.useState(false);

  const { data } = useQuery(["getData"], () => getBucketList());
  const navigate = useNavigate();

  return (
    <>
      <HorizonCentered direction="column">
        <ListTitle style={{ paddingBottom: "10px" }}>
          내 리스트 보관함
        </ListTitle>
        <ScrollWrapper>
          <StyledImg src={mainImage} />
          <FlexBox gap="20px" style={{ position: "relative" }}>
            <AddButton onClick={() => navigate("/me/add")}>
              <FlexBox>+</FlexBox>
            </AddButton>
            {data?.map((bucket: BucketListType, index: number) => (
              <BucketItem
                key={index}
                data={bucket}
                setCongratModal={setCongratModal}
              />
            ))}
          </FlexBox>
        </ScrollWrapper>
      </HorizonCentered>
      {congratModal && <CongratModal setCongratModal={setCongratModal} />}
    </>
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
  width: 100%;
  overflow: scroll;
  text-align: center;
`;

const AddButton = styled.div`
  position: absolute;
  top: -66px;
  right: 0;
  width: 46px;
  height: 46px;
  background-color: #7958fc;
  border-radius: 50%;
  font-size: 40px;
  color: white;
  text-align: center;
  vertical-align: top;
  padding-top: 4px;
  font-weight: 300;
`;
