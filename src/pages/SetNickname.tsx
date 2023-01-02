import React from "react";
import { useNavigate } from "react-router-dom";
import { Wrap } from "../components/main/SetInputBox";
import Title from "../components/Title";
import { VerticalCentered } from "../components/Wrapper";
import { useMutation } from "react-query";
import { putNickName } from "../api/my-api";
import TextArea from "../components/main/TextArea";
import { PrimaryButton } from "../components/Button";
import { useSetRecoilState } from "recoil";
import { userDataAtom } from "../store/atoms";

const SetNickname = () => {
  const navigate = useNavigate();
  const [userNameValue, setUserNameValue] = React.useState("");
  const setUserData = useSetRecoilState(userDataAtom);
  const { mutate, data } = useMutation(() => putNickName(userNameValue.trim()));

  const handleButtonClick = () => {
    mutate();
    setUserData((prev) => {
      const userData = { ...prev };
      console.log("name", data);
      userData.name = userNameValue;
      return userData;
    });
    console.log("hi");
    navigate("/me/add");
  };

  return (
    <VerticalCentered gap="40px">
      <Title
        primary="BucWith에 오신 걸 환영해요!"
        secondary="어떤 닉네임으로 할까요?"
      />
      <Wrap gap="20px">
        <TextArea
          value={userNameValue.trim()}
          placeholder="닉네임을 입력해 주세요."
          onChange={(e) => setUserNameValue(e.target.value)}
        />
        <PrimaryButton
          onClick={() => handleButtonClick()}
          disabled={userNameValue.length < 2}
        >
          다음
        </PrimaryButton>
      </Wrap>
    </VerticalCentered>
  );
};

export default SetNickname;
