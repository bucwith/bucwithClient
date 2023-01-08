import React from "react";
import styled from "styled-components";
import { FlexBox, ModalBlackWrapper, ModalWrapper } from "../Wrapper";
import { PrimaryButton } from "../Button";
import closeBtn from "../../assets/icon_close.png";

interface IconSelectModalProps {
  setNicknameModal: React.Dispatch<React.SetStateAction<boolean>>
}

const IconSelectModal = ({setNicknameModal}: IconSelectModalProps) => {

  return (
    <>
      <ModalWrapper>
        <Container>
          <FlexBox gap="30px">
            <Title>닉네임 수정</Title>
            <CloseBtn onClick={() => {setNicknameModal(false)}} />
            <FlexBox gap="17px">
              <InputBox></InputBox>
              <PrimaryButton>저장하기</PrimaryButton>
            </FlexBox>
          </FlexBox>
        </Container>
      </ModalWrapper>
      <ModalBlackWrapper />
    </>
  );
};

export default IconSelectModal;

const Container = styled(FlexBox)`
  background-color: #24252c;
  border-radius: 30px;
  padding: 30px 20px;
  position: relative;
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

const InputBox = styled.input`
  width: 100%;
`