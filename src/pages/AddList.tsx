import React from "react";
import Title from "../components/Title";
import InputBox from "../components/main/InputBox";
import { useNavigate } from "react-router-dom";
import { ImagedWrapper, VerticalCentered } from "../components/Wrapper";
import { useMutation } from "react-query";
import { postBucWith } from "../api/meAPI";

const AddList = () => {
  const navigate = useNavigate();

  const { mutate, data } = useMutation(postBucWith);
  const handleButtonClick = () => {
    mutate();
    // navigate("/me/setList");
  };
  return (
    <ImagedWrapper>
      <VerticalCentered gap="40px">
        <Title primary={`소현님이\n꿈꾸는 버킷리스트를\n적어주세요.`} />
        <InputBox
          title="어떤 종류의 버킷리스트인가요?"
          buttonText="내 벅윗 풍등 등록하기"
          onClickButton={handleButtonClick}
          placeholder="예) 매일 운동하기 / 술 끊기"
          textarea
        />
      </VerticalCentered>
    </ImagedWrapper>
  );
};

export default AddList;
