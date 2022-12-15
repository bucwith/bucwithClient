import React from "react";
import { useNavigate } from "react-router-dom";
import SetInputBox from "../components/main/SetInputBox";
import Title from "../components/Title";
import { ImagedWrapper, VerticalCentered } from "../components/Wrapper";
import { useMutation } from "react-query";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import { putNickName } from "../api/my-api";

const SetNickname = () => {
  const navigate = useNavigate();
  const [userNameValue, setUserNameValue] = React.useState("");

  const { mutate } = useMutation(() => putNickName(userNameValue), {
    onSuccess: () =>
      navigate("/me/add", {
        state: {
          contents: userNameValue,
        },
      }),
  });

  return (
    <ImagedWrapper>
      <VerticalCentered gap="40px">
        <Title
          primary="BucWith에 오신 걸 환영해요!"
          secondary="어떤 닉네임으로 할까요?"
        />
        <SetInputBox
          buttonText="다음"
          placeholder="닉네임을 입력해 주세요."
          onClickButton={() => mutate()}
          onInputChange={(e) => setUserNameValue(e.target.value)}
          buttonDisabled={!userNameValue}
        />

        <NavigationBar />
      </VerticalCentered>
    </ImagedWrapper>
  );
};

export default SetNickname;
