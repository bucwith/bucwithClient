import React from "react";
import styled from "styled-components";
import { FlexBox } from "../components/Wrapper";
import BackArrow from "../components/BackArrow";
import { PrimaryText } from "../components/Title";
import MyPosting from "../components/MyPage/MyPosting";

const MyPostingEdit = () => {
  return (
    <div>
      <FlexBox gap="20px">
        <BackArrow />
        <PrimaryText fontSize="18px" lineHeight="22px" padding="10px 0" textAlign="center" fontWeight="500">내가 쓴 게시글</PrimaryText>
        <MyPosting topic={1} date="2022.11.22" category={["#공부", "#자격증"]} content="앱 개발자가 되려면 코딩공부를 어떻게 어디서부터 시작하는게 좋을까요?앱 개발자가 되려면 코딩공부를 어떻게 어디서부터 시작하는게 좋을까요?앱 개발자가 되려면 코딩공부를 어떻게 어디서부터 시작하는게 좋을까요?" heart={3} comment={3} />
      </FlexBox>
    </div>
  );
};

export default MyPostingEdit;