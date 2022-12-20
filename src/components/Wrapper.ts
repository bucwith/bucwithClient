import styled from "styled-components";
import spaceBgImg from "../assets/space_bg.png";
interface WrapperProps {
  gap?: string;
  padding?: string;
  direction?: string;
  justify?: string;
  animation?: boolean;
}

export const VerticalCentered = styled.div<WrapperProps>`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};
`;

export const ImagedWrapper = styled.div<WrapperProps>`
  width: 100%;
  height: 100vh;
  padding: 20px;
  background-image: url(${spaceBgImg});
  background-size: cover;
  background-repeat: no-repeat;
  padding: ${(props) => props.padding};
  > * {
    ${(props) => (props.animation ? null : `animation : none;`)}
  }
`;

export const DarkWrapper = styled.div<WrapperProps>`
  width: 100%;
  height: 100vh;
  background-color: #141415;
  padding: ${(props) => props.padding};
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
