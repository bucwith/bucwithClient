import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import communityIcon from "../../assets/images/icon_community.png";
import groupIcon from "../../assets/images/icon_group.png";
import lightIcon from "../../assets/images/icon_light.png";
import listIcon from "../../assets/images/icon_list.png";
import notiIcon from "../../assets/images/icon_noti.png";
import { MODAL_BGCOLOR } from "../../constant";

const NaviWarp = styled.div`
  position: absolute;
  background-color: ${MODAL_BGCOLOR};
  border-radius: 86px;
  bottom: 15px;
  left: 50px;
  right: 50px;
`;

const FlexWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 20px 30px;
`;

const Items = styled.li``;

const Click = styled.button`
  background-color: rgba(0, 0, 0, 0);
`;

const Sub = styled.p`
  padding: 2px;
  color: white;
  font-size: 10px;
  font-weight: 700;
  line-height: 12px;
`;

const MiddleBar = styled.div`
  margin: auto 0;
  width: 0px;
  height: 44px;
  border: 1px solid rgba(211, 212, 219, 0.2);
`;

export default function NavigationBarLite() {
  const navigate = useNavigate();
  const handleLightClick = () => {
    return navigate("/me/add");
  };

  const handlelistClick = () => {
    return navigate("/");
  };
  return (
    <NaviWarp>
      <FlexWrapper>
        <Items>
          <Click onClick={handleLightClick}>
            <img src={lightIcon} />
            <Sub>풍등 추가</Sub>
          </Click>
        </Items>
        <MiddleBar />
        <Items>
          <Click onClick={handlelistClick}>
            <img src={listIcon} />
            <Sub>내 리스트</Sub>
          </Click>
        </Items>
      </FlexWrapper>
    </NaviWarp>
  );
}
