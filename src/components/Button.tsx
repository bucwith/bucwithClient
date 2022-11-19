import React from "react";
import styled from "styled-components";
import { ButtonColor } from "../@types/enums";
import theme from "../styles/theme";
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
      case ButtonColor.Google:
        return (
          <GoogleButton disabled={disabled} onClick={onClick}>
            {text}
          </GoogleButton>
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

const GoogleButton = styled.button`
  width: 100%;
  color: #6280ea;
  font-size: 1.6rem;
  padding: 1.7rem;
  line-height: 2.9rem;
  background-color: ${theme.colors.whiteColor};
  border-radius: 1.8rem;
  &:active {
    background-color: #eaeef5;
  }
`;
