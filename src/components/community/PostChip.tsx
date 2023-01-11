import React from "react";
import styled from "styled-components";
import { COMMUNITY_POST_CHIP } from "../../constant";

export const PostType = {
  Party: "party",
  Question: "question",
  Recommend: "recommend",
} as const;

type Values<T> = T[keyof T];

export type PostType = Values<typeof PostType>;

interface PostChipProps {
  type: PostType;
  active: boolean;
  onClick: React.MouseEventHandler<HTMLSpanElement>;
}
const PostChip = ({ type, active, onClick }: PostChipProps) => {
  const data = COMMUNITY_POST_CHIP[type];
  return (
    <PostChipContainer
      bgColor={data.color}
      className={active ? "active" : ""}
      onClick={onClick}
    >
      <img src={data.icon} style={{ marginRight: "4px" }} />
      {data.text}
    </PostChipContainer>
  );
};

export default PostChip;

const PostChipContainer = styled.span<{ bgColor: string }>`
  color: white;
  padding: 9px 10px;
  font-weight: 700;
  font-size: 12px;
  border: 1px solid white;
  border-radius: 8px;
  &.active {
    background-color: ${(props) => props.bgColor};
    border-color: ${(props) => props.bgColor};
  }
`;
