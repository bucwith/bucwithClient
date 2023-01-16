import React from "react";
import styled, { css } from "styled-components";
import { ButtonColor } from "../@types/enums";
import kakaoIcon from "../assets/kakao_icon.png";
import closeBtn from "../assets/icon_close.png";

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
  font-size: 16px;
  padding: 16px;
  border-radius: 16px;
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
    opacity: 0.4;
    /* background-color: #170f30;
    color: #313131; */
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

export const CloseBtn = styled.button`
  position: absolute;
  right: 20px;
  top: 30px;
  background-image: url(${closeBtn});
  background-repeat: no-repeat;
  background-size: contain;
  width: 20px;
  height: 20px;
`

export const ToggleBtnWrapper = styled.div`
  width: 50px;
  height: 30px;
  background-color: #7958FC;
  border-radius: 20px;
  position: relative;
  transition: 0.5s;
  &::after{
    content: attr(data-text);
    font-family: 'Roboto';
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    position: absolute;
    left: -300px;
    top: 50%;
    transform: translateY(-50%);
  }
  &.isOn{
    background-color: #434657;
  }
`

export const ToggleBtn = styled.button`
  width: 26px;
  height: 26px;
  background: #D9D9D9;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 22px;
  transform: translateY(-50%);
  transition: 0.5s;
  &.isOn{
    left: 2px;
  }
`