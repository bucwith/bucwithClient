import React from "react";
import SubTitle from "../components/main/SubTitle";
import Title from "../components/Title";
import { VerticalCentered } from "../components/Wrapper";

const Me = () => {
  return (
    <div>
      <VerticalCentered gap="40px">
        <SubTitle text={`닉네임님의 버킷리스트는`}></SubTitle>
        <Title primary={`“올해안에 자격증 따기”`}></Title>
      </VerticalCentered>
    </div>
  );
};

export default Me;
