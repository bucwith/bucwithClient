import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { FlexBox, ModalBlackWrapper, ModalWrapper } from "../Wrapper";
import fanfare from "../../assets/fanfare.png";
import Button from "../Button";
import { ButtonColor } from "../../@types/enums";
interface CongratModalProps {
  setCongratModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const CongratModal = ({ setCongratModal }: CongratModalProps) => {
  const imgRef = useRef<HTMLImageElement>();

  useEffect(() => {
    imgRef.current.src = fanfare;
    return () => {
      imgRef.current.src = "";
    };
  }, []);

  return (
    <>
      <ModalWrapper>
        <Container>
          <Star
            ref={(ref) => {
              if (ref) {
                imgRef.current = ref;
              }
            }}
            src={fanfare}
            alt="축하 별 이미지"
          />
          <FlexBox gap="8px">
            <Title>버킷 완료를 축하해요!</Title>
            <Description>다른 버킷리스트 달성도 응원할게요.</Description>
          </FlexBox>
          <Button
            onClick={() => setCongratModal(false)}
            text="확인"
            color={ButtonColor.Primary}
          />
        </Container>
      </ModalWrapper>
      <ModalBlackWrapper />
    </>
  );
};

export default CongratModal;

const Container = styled(FlexBox)`
  background-color: #24252c;
  border-radius: 30px;
  z-index: 200;
  padding: 250px 20px 30px;
  gap: 20px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: white;
`;

const Description = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: white;
`;

const Star = styled.img`
  width: 350px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
