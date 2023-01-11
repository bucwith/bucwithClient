import React, { useEffect, useRef } from "react";
import Title from "../components/Title";
import InputBox from "../components/main/InputBox";
import { useNavigate } from "react-router-dom";
import { VerticalCentered } from "../components/Wrapper";
import { useMutation } from "react-query";
import { postBucket } from "../api/my-api";
import { bucketType } from "../@types/enums";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkWrapper, userDataAtom } from "../store/atoms";
import BackArrow from "../components/BackArrow";

const AddList = () => {
  const [inputValue, setInputValue] = React.useState("");

  const navigate = useNavigate();
  const userData = useRecoilValue(userDataAtom);
  const [type, setType] = React.useState<keyof typeof bucketType>(
    bucketType.BT001
  );

  const addBucketMutation = useMutation(
    () =>
      postBucket({
        userId: userData?.userId,
        contents: inputValue.trim(),
        type: type,
      }),
    {
      onSuccess: (data) =>
        navigate("/me/completion", {
          state: {
            data: data,
          },
        }),
    }
  );

  const setIsDark = useSetRecoilState(isDarkWrapper);

  useEffect(() => {
    setIsDark(false);
  }, []);

  return (
    <VerticalCentered gap="40px">
      <BackArrow />
      <Title
        primary={`${userData?.name}님이\n꿈꾸는 버킷리스트를\n적어주세요.`}
      />
      <InputBox
        title="어떤 종류의 버킷리스트인가요?"
        buttonText="내 벅윗 풍등 등록하기"
        onChange={(e) => setInputValue(e.target.value)}
        onClickButton={() => addBucketMutation.mutate()}
        placeholder="예) 매일 운동하기 / 술 끊기"
        textarea
        type={type}
        setType={setType}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
    </VerticalCentered>
  );
};

export default AddList;
