import styled, { keyframes } from "styled-components";
import { Wrap } from "../main/InputBox";
import { FlexBox } from "../Wrapper";

interface Colorprops {
  color: string;
}
export const ModalBox = styled(Wrap)`
  width: 100%;
  background-color: #24252c;
  position: relative;
  z-index: 1000;
`;

export const Color = styled.div<Colorprops>`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export const Arrow = styled.button`
  font-size: 40px;
  color: white;
  background-color: inherit;
  :disabled {
    opacity: 0.3;
  }
`;

export const ArrowBox = styled(FlexBox)`
  position: absolute;
  flex-direction: row;
  top: 100px;
`;

export const IconList = styled(FlexBox)<{ iconIndex: number }>`
  position: absolute;
  flex-direction: row;
  top: 0;
  transform: translate(50%, 0);
  left: ${(props) => -(props.iconIndex * 90 + 34)}px;
`;

export const dungdung = keyframes`
 0%{
  margin-bottom: 0;
 }
 50% {
  margin-bottom: 4px;
 }
  100%{
  margin-bottom: 0;
 }
`;

export const IconImage = styled.img`
  width: 30px;
  opacity: 0.33;
  position: relative;
  &.active {
    /* animation: ${dungdung} 1s linear infinite; */
    width: 68px;
    opacity: 1;
  }
`;
// ::after {
//   content: "";
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 90px;
//   height: 90px;
//   background-color: white;
//   /* background: rgba(205, 203, 255, 0.6); */
//   opacity: 0.5;
//   /* filter: blur(15px); */
//   z-index: 3000;
// }

export const WarningMsg = styled.span`
  font-weight: 400;
  font-size: 12px;
  color: #dbdcdd;
`;

export const CloseIcon = styled.img`
  width: 20px;
  position: absolute;
  top: 30px;
  right: 20px;
`;
