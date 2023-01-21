import styled from "styled-components";
import glow from "../../../assets/list_glow.png";
import arrow from "../../../assets/icon_arrow-right.png";

interface IconProps {
  main: boolean;
  iconColor: number;
}

interface BtnProps {
  isRight: boolean;
}
  
interface ColorProps {
  select: boolean;
}
  
export const Icon = styled.li<IconProps>`
  width: ${(props) => props.main ? "90px" : "40px"};
  height: ${(props) => props.main ? "90px" : "40px"};
  border-radius: 100%;
  background-color: ${(props) => props.main ? props.color : "transparent"};
  background-image: ${(props) => props.main ? `url(${props.iconColor}), url(${glow})` : `url(${props.iconColor})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${(props) => props.main ? "65px 65px, cover" : "30px 30px"};
  opacity: ${(props) => props.main ? "1" : "0.5"};
`

export const Blur = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  filter: blur(15px);
  background-color: rgba(205, 203, 255, 0.6);
`

export const IconMoveBtn = styled.button<BtnProps>`
  width: 100%;
  height: 100%;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: right center;
  transform: ${(props) => props.isRight ? "none" : "rotate(180deg)"};
`

export const Color = styled.li<ColorProps>`
  width: 26px;
  height: 26px;
  border-radius: 100%;
  border: ${(props) => props.select ? "1px solid white" : "none"};
  background-color: ${(props) => props.color};
`

export const BtnWrapper = styled.li`
  width: 30px;
  height: 30px;
  padding: 5px
`