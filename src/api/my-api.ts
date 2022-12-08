import { BucketListType } from "./../pages/List";
import axios from "axios";

export const postBucket = async ({
  userId,
  contents,
  type,
}: BucketListType) => {
  try {
    const response = await axios.post("http://61.97.184.195:8080/bucket", {
      userId: userId,
      contents: contents,
      type: type,
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const getBucketList = async () => {
  try {
    const response = await axios.get("http://61.97.184.195:8080/bucket/1");
    return response.data.data;
  } catch (err) {
    console.error(err);
  }
};

export const checkBucket = async (bucketId: number) => {
  try {
    if (bucketId === -1) {
      throw new Error("there is no bucketId.");
    }
    const response = await axios.post(
      `http://61.97.184.195:8080/bucket/finish/${bucketId}`
    );
    return response.data.data;
  } catch (err) {
    console.error(err);
  }
};

export const putNickName = async (bucketId: number) => {
  try {
    if (bucketId === -1) {
      throw new Error("there is no bucketId.");
    }
    const response = await axios.put(
      `http://61.97.184.195:8080/user/name`
    );
    return response.data.name;
  } catch (err) {
    console.error(err);
  }
};
