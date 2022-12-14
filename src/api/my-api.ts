import { BucketListType } from "./../pages/List";
import axios from "axios";
import { BASE_URL, TOKEN } from "../constant";

export const postBucket = async ({
  userId,
  contents,
  type,
}: BucketListType) => {
  try {
    const response = await axios.post(
      BASE_URL + "/bucket",
      {
        userId: userId,
        contents: contents,
        type: type,
      },
      { headers: { Authorization: TOKEN } }
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const getBucketList = async () => {
  try {
    const response = await axios.get(BASE_URL + "/bucket", {
      headers: { Authorization: TOKEN },
    });
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
    const response = await axios.post(BASE_URL + `/bucket/finish/${bucketId}`, {
      headers: { Authorization: TOKEN },
    });
    return response.data.data;
  } catch (err) {
    console.error(err);
  }
};

export const putNickName = async (name: string) => {
  try {
    const response = await axios.put(
      BASE_URL + "/user/name",
      { name: name },
      { headers: { Authorization: TOKEN } }
    );
    return response.data.data;
  } catch (err) {
    console.error(err);
  }
};

export const getCheerStar = async (id: number) => {
  try {
    const response = await axios.get(BASE_URL + `/star/${id}`);
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
    const response = await axios.post(BASE_URL + "/star", {
      bucketId: bucketId,
      nickname: nickname,
      contents: contents,
      iconCode: `CS00${iconColor}${iconIndex + 1}`,
    });
    return response.data.data;
  } catch (err) {
    console.error(err);
  }
};

export const getToken = async () => {
  const reponse = await axios.get(BASE_URL + "/test/token/3");
};
