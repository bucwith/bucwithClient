import React, { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import SetInputBox from "../components/main/SetInputBox";
import Title from "../components/Title";
import { ImagedWrapper, VerticalCentered } from "../components/Wrapper";
import { useMutation } from "react-query";

const SetNickname = () => {
  const navigate = useNavigate();
  const [userNameValue, setUserNameValue] = React.useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserNameValue(event.target.value);
  };

  const putUserName = async (data: any) => {
    try {
      const response = await fetch("/user/name", {
        method: "put",
        body: JSON.stringify(data),
        headers: { bearer: "1234" },
      });
      return response.json();
    } catch (error) {
      console.error(error);
    }
  };

  const putUserNameMutation = useMutation({
    mutationFn: () => putUserName({ name: userNameValue }),
  });

  const handleButtonClick = () => {
    putUserNameMutation.mutate;
    navigate("/me/add");
  };
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
          onClickButton={handleButtonClick}
          onInputChange={handleInputChange}
        />
      </VerticalCentered>
    </ImagedWrapper>
  );
};

export default SetNickname;
