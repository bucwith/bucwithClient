import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import arrowIcon from "../../assets/icon_arrow-right.png";
import { BucketListType } from "../../pages/List";

const RightArrowButton = styled.button`
  width: 26px;
  height: 26px;
  margin: 0 10px 0 auto;
  background-color: rgba(36, 37, 44, 0.1);
`;
interface DetailButtonProps {
  data: BucketListType;
}

export default function DetailButton({ data }: DetailButtonProps) {
  const navigate = useNavigate();
  return (
    <RightArrowButton
      onClick={() =>
        navigate(`/me/bucket/${data.bucketId}`, {
          state: { contents: data.contents },
        })
      }
    >
      <img src={arrowIcon} />
    </RightArrowButton>
  );
}
