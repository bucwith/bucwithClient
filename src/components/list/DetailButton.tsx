import React from "react";
import styled from "styled-components";
import arrowIcon from "../../assets/icon_arrow-right.png";

const RightArrowButton = styled.button`
  width: 26px;
  height: 26px;
  margin: 0 10px 0 auto;
  background-color: rgba(36,37,44,0.1);
`


export default function DetailButton() {
   
  return (
    <RightArrowButton>
        <img src={arrowIcon} />
    </RightArrowButton>
  );
}
