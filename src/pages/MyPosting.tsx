import React from "react";
import styled from "styled-components";
import { VerticalCentered } from "../components/Wrapper";
import BackArrow from "../components/BackArrow";

const MyPosting = () => {

  return (
    <div>
      <VerticalCentered gap="20px">
        <BackArrow />
        <Title>내가 쓴 게시글</Title>
      </VerticalCentered>
    </div>
  );
};

export default MyPosting;

const Title = styled.h1`
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: white;
  font-weight: 500;
  padding: 10px 0;
`
