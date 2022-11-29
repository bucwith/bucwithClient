import styled from "styled-components";
import background from "../assets/bgImg.png";
interface WrapperProps {
  gap?: string;
  padding?: string;
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
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  padding: ${(props) => props.padding};
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
  flex-direction: column;
  gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};
`;

/**
 * just for gap and padding
 */
export const FlexBox = styled.div<WrapperProps>`
  width: 100%;
  display: flex;
  padding: ${(props) => props.padding};
  gap: ${(props) => props.gap};
`;
