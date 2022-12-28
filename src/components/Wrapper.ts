import styled, { css } from "styled-components";
import spaceBgImg from "../assets/space_bg.png";
interface WrapperProps {
  gap?: string;
  padding?: string;
  direction?: string;
  justify?: string;
  animation?: boolean;
  dark?: boolean;
}

export const VerticalCentered = styled.div<WrapperProps>`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};
`;
// 후에 정규식으로 변경
const isDark = window.location.href.includes("list");

const img = css`
  background-image: url(${spaceBgImg});
  background-size: cover;
  background-repeat: no-repeat;
`;

const dark = css`
  background-color: #141415;
`;

export const ImagedWrapper = styled.div<WrapperProps>`
  position: fixed;
  right: 0;
  left: 0;
  height: 100vh;
  padding: ${(props) => (props.padding ? props.padding : "20px")};
  > * {
    ${(props) => (props.animation ? null : `animation : none;`)}
  }
  ${isDark ? dark : img}
`;

export const HorizonCentered = styled.div<WrapperProps>`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};
`;

export const FlexBox = styled.div<WrapperProps>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: ${(props) => props.justify};
  align-items: center;
  padding: ${(props) => props.padding};
  gap: ${(props) => props.gap};
`;

export const ModalWrapper = styled.div`
  padding: 30px 20px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBlackWrapper = styled(ModalWrapper)`
  opacity: 0.4;
  z-index: 1100;
  background-color: black;
`;
