import { BucketListType } from "./../pages/List";
import axios from "./intercepter";

export const postBucket = async ({
  userId,
  contents,
  type,
}: BucketListType) => {
  try {
    const response = await axios.post("/bucket", {
      userId: userId,
      contents: contents,
      type: type,
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const editBucket = async ({
  bucketId,
  contents,
  type,
}: BucketListType) => {
  try {
    const response = await axios.put("/bucket", {
      bucketId: bucketId,
      contents: contents,
      type: type,
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const removeBucket = async (bucketId: number) => {
  try {
    const response = await axios.delete(`/bucket/${bucketId}`);

    return response.data.data;
  } catch (err) {
    // console.log(err);
  }
};
export const getBucketList = async () => {
  try {
    const response = await axios.get("/bucket/user");

    return response.data.data;
  } catch (err) {
    // console.log(err);
  }
};

export const checkBucket = async (bucketId: number) => {
  try {
    if (bucketId === -1) {
      throw new Error("there is no bucketId.");
    }

    const response = await axios.post(`/bucket/finish/${bucketId}`);
    return response.data.data;
  } catch (err) {
    console.error(err);
  }
};

export const putNickName = async (name: string) => {
  try {
    const response = await axios.put("/user/name", { name: name });
    return response.data.data;
  } catch (err) {
    console.error(err);
  }
};

export const getCheerStar = async (bucketId: number) => {
  try {
    const response = await axios.get("/star", {
      params: {
        bucketId,
        currentPage: 0,
        starCnt: 7,
        isDesc: false,
      },
    });

    return response.data.data;
  } catch (err) {
    console.error(err);
  }
};

interface PutCheerStarProps {
  bucketId: number;
  nickname: string;
  contents: string;
  iconColor: string;
  iconIndex: number;
}

export const putCheerStar = async ({
  bucketId,
  nickname,
  contents,
  iconColor,
  iconIndex,
}: PutCheerStarProps) => {
  try {
    const response = await axios.post("/star", {
      bucketId: bucketId,
      nickname: nickname,
      contents: contents,
      iconCode: `CS00${iconIndex + 1}${iconColor}`,
    });
    return response.data.data;
  } catch (err) {
    console.error(err);
  }
};

export const DeleteCheerStar = async (starId: number) => {
  try {
    await axios.delete(`/star/${starId}`);
  } catch (error) {
    console.log(error);
  }
};

export const getToken = async () => {
  const response = await axios.get("/test/token/1");
  localStorage.setItem("token", response.data.data);
  return response;
};

export const getUserData = async () => {
  try {
    const response = await axios.get("/user/info");

    return response.data.data;
  } catch (err) {
    console.error(err);
  }
};

export const getBucketData = async (bucketId: number) => {
  try {
    const response = await axios.get(`/bucket/id/${bucketId}`);

    return response.data.data;
  } catch (err) {
    console.error(err);
  }
};
