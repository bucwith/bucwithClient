import React, { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import SetInputBox from "../components/main/SetInputBox";
import Title from "../components/Title";
import { ImagedWrapper, VerticalCentered } from "../components/Wrapper";
import { useMutation } from "react-query";
import { putNickName } from "../api/api/my-api"
// import { BucketTypeEnum } from "../@types/enums";

const SetNickname = () => {
  const navigate = useNavigate();
  const [userNameValue, setUserNameValue] = React.useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserNameValue(event.target.value);
  };

  const setNickNameMutation = useMutation(
    () =>
    putNickName({
        userId: 1,
        contents: userNameValue,
        // type: BucketTypeEnum.BT001,
      }),
    {
      onSuccess: () =>
        navigate("/me/add", {
          state: {
            contents: userNameValue,
          },
        }),
    }
  );

  React.useEffect(() => {
    console.log(userNameValue);
  }, [userNameValue]);

  // const handleButtonClick = () => {
  //   // putUserNameMutation.mutate;
  //   navigate("/me/add");
  // };
  return (
    <ImagedWrapper>
      <VerticalCentered gap="40px">
        <Title
          primary="BucWith에 오신 걸 환영해요!"
          secondary="어떤 닉네임으로 할까요?"
        />
        <SetInputBox
          onTextAreaChange={(e) => setUserNameValue(e.target.value)}
          buttonText="다음"
          placeholder="닉네임을 입력해 주세요."
          onClickButton={() => setNickNameMutation.mutate()}
          onInputChange={handleInputChange}
        />
      </VerticalCentered>
    </ImagedWrapper>
  );
};

export default SetNickname;
