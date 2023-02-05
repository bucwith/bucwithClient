import React from "react";
import styled, { css, keyframes } from "styled-components";
import check from "../../assets/images/icon_checkmark.png";
import { MODAL_BGCOLOR } from "../../constant";
import { FlexBox } from "../Wrapper";
const SnackBar = ({ text }: { text: string }) => {
  return (
    <SnackBox>
      <FlexBox direction="row" justify="center" gap="4px">
        <img src={check} alt="" />
        {text}
      </FlexBox>
    </SnackBox>
  );
};

export default SnackBar;

const fade = keyframes`
0% {
    opacity: 0;
}

100% {
    opacity: 1;
}
`;

const SnackBox = styled.div`
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  padding: 17px 30px;
  background: ${MODAL_BGCOLOR};
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
  border-radius: 34.5px;
  font-weight: 400;
  font-size: 14px;
  color: #c4c8d3;
  z-index: 99999;
  white-space: nowrap;
  animation: 0.2s linear ${fade};
`;
