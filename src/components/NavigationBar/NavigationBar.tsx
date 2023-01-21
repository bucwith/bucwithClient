import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import communityIcon from "../../assets/icon_community.png";
import groupIcon from "../../assets/icon_group.png";
import lightIcon from "../../assets/icon_light.png";
import listIcon from "../../assets/icon_list.png";
import notiIcon from "../../assets/icon_noti.png";

const NaviWarp = styled.div`
  position: absolute;
  background-color: #24252c;
  border-radius: 30px 30px 0 0;
  border: 0.1px solid white;
  bottom: 0;
  left: 10px;
  right: 10px;
`;

const FlexWrapper = styled.ul`
  display: flex;
  justify-content: space-evenly;
  margin: 12px 0 30px;
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

export default function NavigationBar() {
  const navigate = useNavigate();
  const handleLightClick = () => {
    return navigate("/me/add");
  };
  const handleCommunityClick = () => {
    return navigate("/");
  };
  const handlelistClick = () => {
    return navigate("/");
  };
  const handlenNotiClick = () => {
    return navigate("/");
  };
  const handleGroupClick = () => {
    return navigate("/me");
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
        <Items>
          <Click onClick={handleCommunityClick}>
            <img src={communityIcon} />
            <Sub>커뮤니티</Sub>
          </Click>
        </Items>
        <Items>
          <Click onClick={handlelistClick}>
            <img src={listIcon} />
            <Sub>내 리스트</Sub>
          </Click>
        </Items>
        <Items>
          <Click onClick={handlenNotiClick}>
            <img src={notiIcon} />
            <Sub>알림</Sub>
          </Click>
        </Items>
        <Items>
          <Click onClick={handleGroupClick}>
            <img src={groupIcon} />
            <Sub>마이 페이지</Sub>
          </Click>
        </Items>
      </FlexWrapper>
    </NaviWarp>
  );
}
