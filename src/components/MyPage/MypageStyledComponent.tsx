import styled from "styled-components";
import glow from "../../assets/images/list_glow.png";
import pencil from "../../assets/images/icon-pencil.png";
import bell from "../../assets/images/icon_bell.png";
import arrow from "../../assets/images/icon_arrow-right.png";

interface profileIconProps {
  icon: string;
}

interface mypageSectionHeaderIconProps {
  icon: string;
}

export const Category = styled.li`
  font-family: "Roboto";
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  text-align: center;
  padding: 10px 13.9px;
  border: 1px solid #4d4e54;
  border-radius: 30px;
  &.isSelect {
    color: #000000;
    background-color: white;
  }
`;

export const ProfileIcon = styled.button<profileIconProps>`
  background-color: ${(props) => props.color};
  width: 80px;
  height: 80px;
  border-radius: 100%;
  transform: translateX(calc(50vw - 50% - 20px));
  background-image: ${(props) => `url(${props.icon}), url(${glow})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 60px 60px, cover;
  position: relative;
  &::after {
    content: "";
    background-color: #141415;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    position: absolute;
    right: 0;
    bottom: 4px;
    background-image: url(${pencil});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 10px 10px;
  }
`;

export const ProfileName = styled.button`
  transform: translateX(calc(50vw - 50% - 20px));
  font-family: "Roboto";
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: white;
  text-align: center;
  width: fit-content;
  &::after {
    content: "";
    width: 25px;
    height: 23px;
    position: absolute;
    right: -15px;
    bottom: 1px;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const MypageSectionTitle = styled.button<mypageSectionHeaderIconProps>`
  width: 100%;
  padding-left: 24px;
  background-image: ${(props) =>
    props.icon === bell
      ? `url(${props.icon})`
      : `url(${props.icon}), url(${arrow})`};
  background-repeat: no-repeat;
  background-position: left center, right center;
  background-size: 18px 18px, 20px 20px;
  text-align: left;
  margin-bottom: ${(props) => (props.icon === bell ? "20px" : "0")};
  font-family: "Roboto";
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;

export const MypageSectionWrapper = styled.section`
  margin-top: 30px;
`;
