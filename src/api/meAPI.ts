import { axios } from "axios";
const data = {
  userId: 2,
  contents: "등록 테스트",
  type: "BT001",
};

export const postBucWith = async () => {
  try {
    const response = await axios.post("http://61.97.184.195:8080/bucket", {
      data,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
