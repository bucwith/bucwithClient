import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FlexBox, ModalBlackWrapper, ModalWrapper } from "../Wrapper";
import { PrimaryButton } from "../Button";
import closeBtn from "../../assets/icon_close.png";

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
            <Title>닉네임 수정</Title>
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
  padding: 20px;
  background: rgba(240, 243, 245, 0.2);
  border: 1px solid #FFFFFF;
  border-radius: 16px;
  color: white;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
`