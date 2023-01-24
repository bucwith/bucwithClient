import styled, { css } from "styled-components";
import spaceBgImg from "../assets/images/space_bg.png";
interface WrapperProps {
  gap?: string;
  padding?: string;
  direction?: string;
  justify?: string;
  animation?: boolean;
  isDark?: boolean;
  align?: string;
  margin?: string;
}

export const VerticalCentered = styled.div<WrapperProps>`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};
  /* z-index: 1000; */
`;

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
  ${(props) => (props.isDark ? dark : img)};
  z-index: -1;
  ::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
  }
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
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
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
  z-index: 1300;
`;

export const ModalBlackWrapper = styled(ModalWrapper)`
  opacity: 0.4;
  background-color: black;
  z-index: 900;
`;

export const CategoryWrapper = styled.div<WrapperProps>`
  width: 100%;
  margin: ${(props) => props.margin};
  display: flex;
  flex-direction: ${(props) => props.direction};
  flex-wrap: wrap;
  justify-content: ${(props) => props.justify || "left"};
  align-items: ${(props) => props.align || "center"};
  gap: ${(props) => props.gap};
`;
