import React from "react";
import { useNavigate } from "react-router-dom";
import InputBox from "../components/main/InputBox";
import Title from "../components/Title";
import { VerticalCentered } from "../components/Wrapper";

const SetNickname = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/main");
  };
  return (
    <VerticalCentered gap="40px">
      <Title
        primary="BucWith에 오신 걸 환영해요!"
        secondary="어떤 닉네임으로 할까요?"
      />
      <InputBox
        buttonText="다음"
        placeholder="닉네임을 입력해 주세요."
        onClickButton={handleButtonClick}
      />
    </VerticalCentered>
  );
};

export default SetNickname;
