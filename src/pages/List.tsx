import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FlexBox, HorizonCentered } from "../components/Wrapper";
import { getBucketList } from "../api/my-api";
import theme from "../styles/theme";
import mainImage from "../assets/images/list_image.png";
import BucketItem from "../components/list/BucketItem";
import { useQuery } from "react-query";
import CongratModal from "../components/list/CongratModal";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isDarkWrapper } from "../store/atoms";
import BucketDetailEdit from "../components/Detail/BucketDetailEdit";
import BucketRemoveModal from "../components/Detail/BucketRemoveModal";

export interface BucketListType {
  bucketId?: number;
  contents: string;
  userId?: number;
  type: string;
  registDate?: Date;
  isFinished?: boolean;
}

const List = () => {
  const [congratModal, setCongratModal] = React.useState(false);
  const setIsDark = useSetRecoilState(isDarkWrapper);
  const [selectedBucketData, setSelectedBucketData] =
    useState<BucketListType>();

  const [isEditBucketShow, setIsEditBucketShow] = React.useState(false);
  const [isRemoveBucketShow, setIsRemoveBucketShow] = React.useState(false);

  useEffect(() => {
    setIsDark(true);
  }, []);

  const { data } = useQuery(["getData", isEditBucketShow], () =>
    getBucketList()
  );
  const navigate = useNavigate();

  return (
    <>
      <HorizonCentered direction="column">
        <PageTitle style={{ paddingBottom: "10px" }}>
          내 리스트 보관함
        </PageTitle>
        <ScrollWrapper>
          <StyledImg src={mainImage} />
          <FlexBox gap="20px" style={{ position: "relative" }}>
            <AddButton onClick={() => navigate("/me/add")}>+</AddButton>
            {data?.map((bucket: BucketListType, index: number) => (
              <BucketItem
                key={index}
                data={bucket}
                setCongratModal={setCongratModal}
                setIsEditBucketShow={setIsEditBucketShow}
                setSelectedBucketData={setSelectedBucketData}
              />
            ))}
          </FlexBox>
        </ScrollWrapper>
      </HorizonCentered>
      {congratModal && <CongratModal setCongratModal={setCongratModal} />}
      {isEditBucketShow && (
        <BucketDetailEdit
          bucketId={selectedBucketData?.bucketId}
          contents={selectedBucketData?.contents}
          setIsEditBucketShow={setIsEditBucketShow}
          setIsRemoveBucketShow={setIsRemoveBucketShow}
        />
      )}
      {isRemoveBucketShow && (
        <BucketRemoveModal
          setIsRemoveBucketShow={setIsRemoveBucketShow}
          bucketId={selectedBucketData?.bucketId}
        />
      )}
    </>
  );
};

export default List;

export const PageTitle = styled.h1`
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
  ::-webkit-scrollbar {
    display: none;
  }
`;

const AddButton = styled(FlexBox)`
  position: absolute;
  top: -66px;
  right: 0;
  width: 46px;
  height: 46px;
  background-color: #7958fc;
  border-radius: 50%;
  font-size: 36px;
  color: white;
  font-weight: 300;
`;
