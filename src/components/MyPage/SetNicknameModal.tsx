import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { InputBox } from "./Modal/SetNicknameModalStyledComponent";
import { FlexBox, ModalBlackWrapper, ModalWrapper } from "../Wrapper";
import { PrimaryButton, CloseBtn } from "../Button";
import { PrimaryText } from "../Title"

interface IconSelectModalProps {
  setNicknameModal: React.Dispatch<React.SetStateAction<boolean>>;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
  nickname: string;
}

const IconSelectModal = ({setNicknameModal, setNickname, nickname}: IconSelectModalProps) => {
  const [changeNickname, setChangeNickname] = useState(nickname)

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  });

  return (
    <>
      <ModalWrapper>
        <Container>
          <FlexBox gap="30px">
            <PrimaryText as="h3" fontSize="20px" lineHeight="23px">닉네임 수정</PrimaryText>
            <CloseBtn onClick={() => {setNicknameModal(false)}} />
            <FlexBox as="form" gap="17px">
              <InputBox type="text" defaultValue={nickname} ref={inputRef} onChange={() => {setChangeNickname(inputRef.current.value)}} spellCheck="false" />
              <PrimaryButton type="submit" onClick={() => {setNickname(changeNickname); setNicknameModal(false);}}>저장하기</PrimaryButton>
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
