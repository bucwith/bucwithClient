import React, { useState } from "react";
import styled from "styled-components";
import { CATEGORY_CHIP } from "../../constant";
import { PrimaryButton } from "../Button";
import { CloseIcon } from "../Star/style";
import { FlexBox, ModalBlackWrapper } from "../Wrapper";
import closeIcon from "../../assets/icon_close.png";

interface CategoryDrawerProps {
  setOpenCategoryDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  setCategories: React.Dispatch<React.SetStateAction<number[]>>;
  categories: number[];
}

const CategoryDrawer = ({
  setOpenCategoryDrawer,
  setCategories,
  categories,
}: CategoryDrawerProps) => {
  const [tempCategories, setTempCategories] = useState<number[]>(categories);

  const handleClickChip = (index: number) => {
    console.log(tempCategories);
    if (tempCategories.includes(index)) {
      return setTempCategories((prev) => prev.filter((item) => item !== index));
    }

    if (categories.length === 3) {
      return null;
      // return 안내문구
    }

    return setTempCategories((prev) => [...prev, index]);
  };
  // 엑스 눌렀을 때, 카테고리 적용 안되게 적용하기 눌렀을 때 값 한번에 넘기기
  return (
    <>
      <ModalBlackWrapper />
      <DrawerContainer gap="30px">
        <CloseIcon
          src={closeIcon}
          onClick={() => setOpenCategoryDrawer(false)}
        />
        <FlexBox gap="10px">
          <Title>카테고리 선택</Title>
          <SubTitle>최대 3개까지 선택할 수 있어요.</SubTitle>
        </FlexBox>
        <FlexBox
          justify="flex-start"
          gap="8px"
          direction="row"
          style={{ flexWrap: "wrap" }}
        >
          {CATEGORY_CHIP.map((text, index) => (
            <CategoryChip
              onClick={() => handleClickChip(index)}
              className={tempCategories.includes(index) ? "active" : ""}
              key={index}
            >{`#${text}`}</CategoryChip>
          ))}
        </FlexBox>
        <PrimaryButton
          onClick={() => {
            setCategories(tempCategories);
            setOpenCategoryDrawer(false);
          }}
        >
          적용하기
        </PrimaryButton>
      </DrawerContainer>
    </>
  );
};

export default CategoryDrawer;

const DrawerContainer = styled(FlexBox)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 30px 20px;
  background-color: #24252c;
  z-index: 9999;
  border-radius: 30px 30px 0px 0px;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
`;

const SubTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
`;

const CategoryChip = styled.span`
  padding: 10px 16px;
  color: white;
  border-radius: 30px;
  border: 1px solid white;
  /* font-weight: 700; */
  font-size: 12px;
  &.active {
    background-color: white;
    color: black;
  }
`;
