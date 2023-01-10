import React from "react";
import styled, { keyframes, css } from "styled-components";
import { FlexBox, ModalBlackWrapper, ModalWrapper } from "../Wrapper";
import { PrimaryButton } from "../Button";
import closeBtn from "../../assets/icon_close.png";

interface CategorySelectModalProps {
  setInterestCategoryModal: React.Dispatch<React.SetStateAction<boolean>>;
  interestCategoryModal: boolean;
  selectCategoryList: string[];
  setSelectCategoryList: React.Dispatch<React.SetStateAction<string[]>>;
}

interface CategorySelectModalContainerProps {
    interestCategoryModal: boolean;
}

const SelectCategoryModal = ({setInterestCategoryModal, interestCategoryModal, selectCategoryList, setSelectCategoryList} : CategorySelectModalProps) => {
  const category_list: string[] = ["#영화", "#여행", "#대학합격", "#미용/뷰티", "#연애", "#자격증", "#공부", "#다이어트", "#음식", "#동물", "#게임", "#IT", "#돈", "#건강", "#운동", "#휴식/힐링", "#외국어", "#심리/마음", "#운전", "#취미", "#기타"]
  const [modaloff, setModaloff] = React.useState(interestCategoryModal);
  const selectList: string[] = [];

  return (
    <>
      <ModalWrapper>
        <Container interestCategoryModal={modaloff}>
          <FlexBox as="form" gap="30px">
            <Title>관심 카테고리 설정</Title>
            <CloseBtn type="button" onClick={() => {setTimeout(() => {setInterestCategoryModal(false);}, 1000); setModaloff(false)}} />
            <CategoryWrapper onClick={(e) => {(e.target as Element).nodeName === "LI" && (e.target as Element).classList.toggle("isSelect");}}>
              {category_list.map((v, index) => {
                return <Category key={index} className={selectCategoryList.includes(v) && "isSelect"}>{v}</Category>
              })}
            </CategoryWrapper>
            <PrimaryButton type="button" onClick={() => {setTimeout(() => {setInterestCategoryModal(false);}, 1000); setModaloff(false); document.querySelectorAll(".isSelect").forEach((v) => selectList.push(v.textContent)); setSelectCategoryList(selectList)}}>저장하기</PrimaryButton>
          </FlexBox>
        </Container>
      </ModalWrapper>
      <ModalBlackWrapper />
    </>
  );
};

export default SelectCategoryModal;

const Modalon = keyframes`
  0%{
    transform: translateY(100%) ;
  }
  100%{
    transform: translateY(0);
  }
`

const Modaloff = keyframes`
  0%{
    transform: translateY(0) ;
  }
  100%{
    transform: translateY(100%);
  }
`

const Container = styled(FlexBox)<CategorySelectModalContainerProps>`
  background-color: #24252c;
  border-radius: 30px 30px 0 0;
  padding: 30px 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: 1s;
  animation: ${(props) => props.interestCategoryModal ? css`${Modalon} 1s ease-in-out forwards` : css`${Modaloff} 1s ease-in-out forwards`};
`;

const Title = styled.h3`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #FFFFFF;
`;

const CloseBtn = styled.button`
  position: absolute;
  right: 20px;
  top: 30px;
  background-image: url(${closeBtn});
  background-repeat: no-repeat;
  background-size: contain;
  width: 20px;
  height: 20px;
`

const CategoryWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  gap: 12px 8px;
`

const Category = styled.li`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
  text-align: center;
  padding: 10px 13.9px;
  border: 1px solid #4D4E54;
  border-radius: 30px;
  &.isSelect{
    color: #000000;
    background-color: white;
  }
`
