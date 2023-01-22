import React from "react";
import styled from "styled-components";
import { FlexBox } from "../components/Wrapper";

const Practice = () => {
  return (
    <FlexBox
      style={{
        color: "white",
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
      justify="space-between"
    >
      <div>
        <div>내가 하고 싶은 건</div>
        <div>이것 입니다.</div>
      </div>
      <div>
        <FlexBox>풍등</FlexBox>
      </div>
      <button style={{ backgroundColor: "white" }}>제출하기</button>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          transform: "translateY(-50%)",
          overflow: "scroll",
          height: "100px",
          whiteSpace: "nowrap",
        }}
      >
        <CheerStar>응원별</CheerStar>
        <CheerStar>응원별</CheerStar>
      </div>
    </FlexBox>
  );
};

export default Practice;

const CheerStar = styled.div`
  display: inline-block;
  width: 375px;
  height: 100px;
  background-color: tomato;
`;
