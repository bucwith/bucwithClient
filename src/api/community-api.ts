import axios from "axios";

interface PostCommunityPostProps {
  userId: number;
  contents: string;
  type: string;
  categories?: string[];
}
export const postCommunityPost = async ({
  userId,
  contents,
  type,
  categories,
}: PostCommunityPostProps) => {
  try {
    const response = await axios.post("/community", {
      userId: 25,
      content: contents,
      type: type,
      category: categories,
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
