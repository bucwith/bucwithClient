import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import arrow from "../assets/icon_arrow-right.png";

const BackArrow = () => {
  const navigate = useNavigate();
  return (
    <Arrow
      src={arrow}
      onClick={() => {
        navigate(-1);
      }}
    />
  );
};

export default BackArrow;

const Arrow = styled.img`
  width: 26px;
  position: absolute;
  top: 28px;
  left: 20px;
  transform: rotate(180deg);
  z-index: 1000;
`;
