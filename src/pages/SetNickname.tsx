import React from "react";
import { useNavigate } from "react-router-dom";
import SetInputBox, { Wrap } from "../components/main/SetInputBox";
import Title from "../components/Title";
import { VerticalCentered } from "../components/Wrapper";
import { useMutation } from "react-query";
import { putNickName } from "../api/my-api";
import TextArea from "../components/main/TextArea";
import { PrimaryButton } from "../components/Button";

const SetNickname = () => {
  const navigate = useNavigate();
  const [userNameValue, setUserNameValue] = React.useState("");

  const { mutate } = useMutation(() => putNickName(userNameValue.trim()), {
    onSuccess: () =>
      navigate("/me/add", {
        state: {
          contents: userNameValue,
        },
      }),
  });

  return (
    <VerticalCentered gap="40px">
      <Title
        primary="BucWith에 오신 걸 환영해요!"
        secondary="어떤 닉네임으로 할까요?"
      />
      <Wrap gap="20px">
        <TextArea
          placeholder="닉네임을 입력해 주세요."
          onInputChange={(e) => setUserNameValue(e.target.value)}
        />
        <PrimaryButton onClick={() => mutate()} disabled={!userNameValue}>
          다음
        </PrimaryButton>
      </Wrap>
    </VerticalCentered>
  );
};

export default SetNickname;
