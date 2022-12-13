import React from "react";
import styled from "styled-components";
import { DarkWrapper, FlexBox, HorizonCentered } from "../components/Wrapper";
import theme from "../styles/theme";
import mainImage from "../assets/list_image.png";
import BucketItem from "../components/list/BucketItem";
import { useQuery } from "react-query";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import { getBucketList } from "../api/my-api";
import { TOKEN } from "../constant";
import CongratModal from "../components/list/CongratModal";

export interface BucketListType {
  bucketId?: number;
  contents: string;
  userId: number;
  type: string;
  registDate?: Date;
  isFinished?: boolean;
}

const List = () => {
  if (localStorage.getItem("token")) {
    localStorage.setItem("token", TOKEN);
    localStorage.setItem("name", "양꼬치");
  }

  const [congratModal, setCongratModal] = React.useState(true);

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
          <StyledImg src={mainImage} />
          <FlexBox gap="20px">
            {data.map((bucket: BucketListType, index: number) => (
              <BucketItem
                key={index}
                data={bucket}
                setCongratModal={setCongratModal}
              />
            ))}
          </FlexBox>
        </ScrollWrapper>
      </HorizonCentered>
      <NavigationBar />
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
