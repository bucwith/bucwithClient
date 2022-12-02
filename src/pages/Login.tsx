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
  const REDIRECT_URI = "http://localhost:3000/oauth/callback/kakao"
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAOKEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  
  return (
    <ImagedWrapper>
      <VerticalCentered gap="40px">
        <Title primary={`오늘도 BucWith은\n당신의 바램을 응원해요.`} />
        <a href={KAKAO_AUTH_URL}>
        <Button
          text=" "
          color={ButtonColor.Kakao}

          />
        </a>
      </VerticalCentered>
    </ImagedWrapper>
  );
};

export default Login;