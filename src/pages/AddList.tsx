import React from "react";
import Title from "../components/Title";
import InputBox from "../components/main/InputBox";
import { useNavigate } from "react-router-dom";
import { ImagedWrapper, VerticalCentered } from "../components/Wrapper";
import { useMutation } from "react-query";
import { postBucket } from "../api/my-api";
import { bucketType } from "../@types/enums";
import { useRecoilValue } from "recoil";
import { userDataAtom } from "../store/atoms";

const AddList = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = React.useState("");
  const userData = useRecoilValue(userDataAtom);
  const [type, setType] = React.useState<keyof typeof bucketType>(
    bucketType.BT001
  );

  const addBucketMutation = useMutation(
    () =>
      postBucket({
        userId: 1,
        contents: inputValue,
        type: type,
      }),
    {
      onSuccess: () =>
        navigate("/me/completion", {
          state: {
            contents: inputValue,
          },
        }),
    }
  );

  return (
    <VerticalCentered gap="40px">
      <Title
        primary={`${userData?.name}님이\n꿈꾸는 버킷리스트를\n적어주세요.`}
      />
      <InputBox
        onTextAreaChange={(e) => setInputValue(e.target.value)}
        title="어떤 종류의 버킷리스트인가요?"
        buttonText="내 벅윗 풍등 등록하기"
        onClickButton={() => addBucketMutation.mutate()}
        placeholder="예) 매일 운동하기 / 술 끊기"
        textarea
        type={type}
        setType={setType}
      />
    </VerticalCentered>
  );
};

export default AddList;
