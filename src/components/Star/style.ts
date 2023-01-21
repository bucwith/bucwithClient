import styled from "styled-components";
import { Wrap } from "../main/InputBox";
import { FlexBox } from "../Wrapper";
interface Colorprops {
  color: string;
}
export const ModalBox = styled(Wrap)`
  width: 100%;
  background-color: #24252c;
  position: relative;
  z-index: 9999;
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: row;
`;

export const IconList = styled(FlexBox)`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ActiveStarBox = styled(FlexBox)`
  width: 90px;
  height: 90px;
`;

export const ActiveStar = styled.img`
  width: 68px;
  opacity: 1;
  z-index: 9999;
`;

export const Star = styled.img`
  width: 30px;
  opacity: 0.33;
  overflow: visible;
`;

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
