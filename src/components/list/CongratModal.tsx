import React from "react";
import styled from "styled-components";
import { FlexBox, ModalWrapper } from "../Wrapper";
import star from "../../assets/main_icons/yellow_star.png";
import Button from "../Button";
import { ButtonColor } from "../../@types/enums";
interface CongratModalProps {
  setCongratModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const CongratModal = ({ setCongratModal }: CongratModalProps) => {
  return (
    <ModalWrapper>
      <Container>
        <img src={star} width="130px" alt="" style={{ marginBottom: "20px" }} />
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
      <ModalWrapper style={{ opacity: 0.1, zIndex: 100 }} />
    </ModalWrapper>
  );
};

export default CongratModal;

const Container = styled(FlexBox)`
  background-color: #24252c;
  border-radius: 30px;
  z-index: 200;
  padding: 30px 20px;
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
