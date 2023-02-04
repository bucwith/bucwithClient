import React from "react";
import styled, { css } from "styled-components";
import { Category } from "./MypageStyledComponent";
import {
  FlexBox,
  ModalBlackWrapper,
  ModalWrapper,
  CategoryWrapper,
} from "../Wrapper";
import { PrimaryButton, CloseBtn } from "../Button";
import { PrimaryText } from "../Title";
import { Modalon, Modaloff } from "../../lib/animation";
import { MODAL_BGCOLOR } from "../../constant";

interface CategorySelectModalProps {
  setInterestCategoryModal: React.Dispatch<React.SetStateAction<boolean>>;
  interestCategoryModal: boolean;
  selectCategoryList: string[];
  setSelectCategoryList: React.Dispatch<React.SetStateAction<string[]>>;
}

interface CategorySelectModalContainerProps {
  interestCategoryModal: boolean;
}

const SelectCategoryModal = ({
  setInterestCategoryModal,
  interestCategoryModal,
  selectCategoryList,
  setSelectCategoryList,
}: CategorySelectModalProps) => {
  const category_list: string[] = [
    "#영화",
    "#여행",
    "#대학합격",
    "#미용/뷰티",
    "#연애",
    "#자격증",
    "#공부",
    "#다이어트",
    "#음식",
    "#동물",
    "#게임",
    "#IT",
    "#돈",
    "#건강",
    "#운동",
    "#휴식/힐링",
    "#외국어",
    "#심리/마음",
    "#운전",
    "#취미",
    "#기타",
  ];
  const [modaloff, setModaloff] = React.useState(interestCategoryModal);
  const isSelectList: string[] = [];

  return (
    <>
      <ModalWrapper>
        <Container interestCategoryModal={modaloff}>
          <FlexBox as="form" gap="30px">
            <PrimaryText as="h3" fontSize="20px" lineHeight="23px">
              관심 카테고리 설정
            </PrimaryText>
            <CloseBtn
              type="button"
              onClick={() => {
                setTimeout(() => {
                  setInterestCategoryModal(false);
                }, 1000);
                setModaloff(false);
              }}
            />
            <CategoryWrapper
              as="ul"
              gap="12px 8px"
              onClick={(e) => {
                (e.target as Element).nodeName === "LI" &&
                  (e.target as Element).classList.toggle("isSelect");
              }}
            >
              {category_list.map((v, index) => {
                return (
                  <Category
                    key={index}
                    className={selectCategoryList.includes(v) && "isSelect"}
                  >
                    {v}
                  </Category>
                );
              })}
            </CategoryWrapper>
            <PrimaryButton
              type="button"
              onClick={() => {
                setTimeout(() => {
                  setInterestCategoryModal(false);
                }, 1000);
                setModaloff(false);
                document
                  .querySelectorAll(".isSelect")
                  .forEach((v) => isSelectList.push(v.textContent));
                setSelectCategoryList(isSelectList);
              }}
            >
              저장하기
            </PrimaryButton>
          </FlexBox>
        </Container>
      </ModalWrapper>
      <ModalBlackWrapper />
    </>
  );
};

export default SelectCategoryModal;

const Container = styled(FlexBox)<CategorySelectModalContainerProps>`
  background-color: ${MODAL_BGCOLOR};
  border-radius: 30px 30px 0 0;
  padding: 30px 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: 1s;
  animation: ${(props) =>
    props.interestCategoryModal
      ? css`
          ${Modalon} 1s ease-in-out forwards
        `
      : css`
          ${Modaloff} 1s ease-in-out forwards
        `};
`;
