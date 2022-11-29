import React from "react";
import styled from "styled-components";
import { ButtonColor } from "../@types/enums";
import kakaoLogin from "../assets/kakao_login_large_wide.png";

interface ButtomProps {
  disabled?: boolean;
  text: string;
  onClick?: () => void;
  color: ButtonColor;
}

export default function Button({
  text,
  disabled,
  onClick,
  color,
}: ButtomProps) {
  {
    switch (color) {
      case ButtonColor.Primary:
        return (
          <PrimaryButton disabled={disabled} onClick={onClick}>
            {text}
          </PrimaryButton>
        );
      case ButtonColor.Kakao:
        return (
          <KakaoButton disabled={disabled} onClick={onClick}>
            {text}
          </KakaoButton>
        );
    }
  }
}

const PrimaryButton = styled.button`
  width: 100%;
  font-size: 1.6rem;
  padding: 1.7rem;
  line-height: 2.9rem;
  background-color: #7958fc;
  color: #fff;
  border-radius: 1.8rem;

  /* active = pressed */
  &:active {
    background-color: #4f35b6;
  }
`;

const KakaoButton = styled.button`
  width: 100%;
  height: 60px;
  color: black;
  background-image: url(${kakaoLogin});
  background-color: #FEE500;
  background-position: center;
  background-size: contain;
  background-repeat : no-repeat;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  padding: 1.7rem;
  line-height: 2.9rem;
  border-radius: 1.8rem;
  &:active {
    background-color: #eaeef5;
  }
`;