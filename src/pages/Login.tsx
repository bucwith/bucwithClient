import React from "react";
import { ButtonColor } from "../@types/enums";
import Button from "../components/Button";
import Title from "../components/Title";
import { ImagedWrapper, VerticalCentered } from "../components/Wrapper";
  const Login = () => {
  const BACK_URL = `http://61.97.184.195:8080/oauth2/authorization/kakao`
  const handleRedirect = () => {
    return location.href=(BACK_URL);
  };

  return (
    <ImagedWrapper>
      <VerticalCentered gap="40px">
        <Title primary={`오늘도 BucWith은\n당신의 바램을 응원해요.`} />
        <Button
          text="카카오로 간편 로그인"
          color={ButtonColor.Kakao}
          onClick={handleRedirect}
        />
      </VerticalCentered>
    </ImagedWrapper>
  );
};

export default Login;
