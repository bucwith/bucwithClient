import React from "react";
import styled from "styled-components";
import { DarkWrapper, FlexBox, HorizonCentered } from "../components/Wrapper";
import theme from "../styles/theme";
import mainImage from "../assets/list_image.png";
import BucketItem from "../components/list/BucketItem";
import { useQuery } from "react-query";
import { getBucketList, getUserData } from "../api/my-api";
import CongratModal from "../components/list/CongratModal";
import { useRecoilState } from "recoil";
import { userDataAtom } from "../store/atoms";
import NavigationBarLite from "../components/NavigationBar/NavigationBarLite";
import { useNavigate } from "react-router-dom";

export interface BucketListType {
  bucketId?: number;
  contents: string;
  userId: number;
  type: string;
  registDate?: Date;
  isFinished?: boolean;
}

const List = () => {
  const [userData, setUserData] = useRecoilState(userDataAtom);
  const [congratModal, setCongratModal] = React.useState(false);
  const { data } = useQuery(["getData"], () => getBucketList());
  const navigate = useNavigate();
  const { data: userRawData } = useQuery(["getUserData"], () =>
    userData.userId === -1 ? getUserData() : null
  );

  React.useEffect(() => {
    if (userRawData) {
      setUserData(userRawData);
    }
  }, [userRawData]);

  return (
    <DarkWrapper padding="30px 20px">
      <HorizonCentered direction="column">
        <ListTitle style={{ paddingBottom: "10px" }}>
          내 리스트 보관함
        </ListTitle>
        <ScrollWrapper>
          <StyledImg src={mainImage} />
          <FlexBox gap="20px" style={{ position: "relative" }}>
            <AddButton onClick={() => navigate("/me/add")}>+</AddButton>
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
      {/* <NavigationBarLite /> */}
      {congratModal && <CongratModal setCongratModal={setCongratModal} />}
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
  padding-top: 4px;
`;
