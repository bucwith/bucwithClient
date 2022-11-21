import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonColor } from "../@types/enums";
import Button from "../components/Button";
import Title from "../components/Title";
import { ImagedWrapper, VerticalCentered } from "../components/Wrapper";

const Login = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    return navigate("/nickname");
  };
  return (
    <ImagedWrapper>
      <VerticalCentered gap="40px">
        <Title primary={`오늘도 BucWith은\n당신의 바램을 응원해요.`} />
        <Button
          text="Google 계정으로 로그인"
          color={ButtonColor.Google}
          onClick={handleLoginClick}
        />
      </VerticalCentered>
    </ImagedWrapper>
  );
};

export default Login;
