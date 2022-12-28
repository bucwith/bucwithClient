import React from "react";
import { ButtonColor } from "../@types/enums";
import Button from "../components/Button";
import Title from "../components/Title";
import { VerticalCentered } from "../components/Wrapper";
const Login = () => {
  const BACK_URL = `https://bucwiths.shop:8443/oauth2/authorization/kakao`;
  const handleRedirect = () => {
    return (location.href = BACK_URL);
  };

  return (
    <VerticalCentered gap="40px">
      <Title primary={`오늘도 BucWith은\n당신의 바램을 응원해요.`} />
      <Button
        text="카카오로 간편 로그인"
        color={ButtonColor.Kakao}
        onClick={handleRedirect}
      />
    </VerticalCentered>
  );
};

export default Login;
