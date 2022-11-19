import React from "react";
import { ButtonColor } from "../@types/enums";
import Button from "../components/Button";

const Main = () => {
  return (
    <div>
      <Button
        onClick={() => {
          console.log("동작");
        }}
        disabled={false}
        text="응원 메시지 보러가기"
        color={ButtonColor.Primary}
      />
    </div>
  );
};

export default Main;
