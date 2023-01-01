import React from "react";
import styled, { css } from "styled-components";
import { ButtonColor } from "../@types/enums";
import kakaoIcon from "../assets/kakao_icon.png";

interface ButtomProps {
  disabled?: boolean;
  text: string;
  onClick?: () => void;
  color: ButtonColor;
  icon?: string;
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
            <img src={kakaoIcon} />
            {text}
          </KakaoButton>
        );
      case ButtonColor.Black:
        return (
          <PrimaryBlackButton disabled={disabled} onClick={onClick}>
            {text}
          </PrimaryBlackButton>
        );
    }
  }
}

const KakaoButton = styled.button`
  width: 100%;
  height: 60px;
  color: black;
  background-color: #fee500;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  font-size: 1.6rem;
  cursor: pointer;
  padding: 1.7rem;
  line-height: 2.9rem;
  border-radius: 1.8rem;

  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  &:active {
    background-color: #eaeef5;
  }
`;

const buttonStyle = css`
  width: 100%;
  font-size: 1.6rem;
  padding: 1.6rem;
  border-radius: 1.6rem;
  color: #fff;
`;

export const PrimaryButton = styled.button`
  ${buttonStyle}
  background-color: #7958fc;
  z-index: 100;
  /* active = pressed */
  &:active {
    background-color: #4f35b6;
  }
  &:disabled {
    /* opacity: 0.4; */
    background-color: #170f30;
    color: #313131;
  }
`;

export const PrimaryBlackButton = styled.button`
  ${buttonStyle}
  background-color: #303451;
  /* active = pressed */
  &:active {
    background-color: #292c45;
  }
  z-index: 1100;
`;
