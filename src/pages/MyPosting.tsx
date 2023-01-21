import React from "react";
import styled from "styled-components";
import { VerticalCentered } from "../components/Wrapper";
import BackArrow from "../components/BackArrow";
import { PrimaryText } from "../components/Title";

const MyPosting = () => {

  return (
    <div>
      <VerticalCentered gap="20px">
        <BackArrow />
        <PrimaryText fontSize="18px" lineHeight="22px" padding="10px 0" textAlign="center" fontWeight="500">내가 쓴 게시글</PrimaryText>
      </VerticalCentered>
    </div>
  );
};

export default MyPosting;
