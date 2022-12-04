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
