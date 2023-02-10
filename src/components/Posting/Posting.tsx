import React from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper, HeaderWrapper, Topic, Date, CategoryWrapper, Category, Content, IconWrapper, Icon } from "./PostingStyledComponent";
import blank_heart from "../../assets/images/icon_blank_heart.png";
import red_heart from "../../assets/images/icon_heart.png";
import blank_comment from "../../assets/images/icon_blank_comment.png";
import party from "../../assets/images/community/chip/party.png";
import question from "../../assets/images/community/chip/question.png";
import recommend from "../../assets/images/community/chip/recommend.png";

interface PostingProps {
  topic: number;
  date: string;
  category: string[];
  content: string;
  heart: number;
  comment: number;
}

const Posting = ({topic, date, category, content, heart, comment}: PostingProps) => {
  const navigate = useNavigate();

  const topicName = ["벅윗 파티원 모집", "질문있어요", "추천해주세요"]
  const topicImage = [party, question, recommend]
  const topicColor = ["#306A83", "#479E74", "#475A9E"]

  return (
    <>
      <Wrapper onClick={() => {navigate("/me/myposting/edit")}}>
        <HeaderWrapper>
          <Topic image={topicImage[topic]} color={topicColor[topic]}>{topicName[topic]}</Topic>
          <Date>{date}</Date>
        </HeaderWrapper>
        <CategoryWrapper>
          {category.map((v, key) => {
            return <Category key={key}>{v}</Category>
          })}
        </CategoryWrapper>
        <Content>{content}</Content>
        <IconWrapper>
          <Icon image={heart ? red_heart : blank_heart} data-number={heart ? heart : ""}></Icon>
          <Icon image={blank_comment} data-number={comment ? comment : ""}></Icon>
        </IconWrapper>
      </Wrapper>
    </>
  );
};

export default Posting;
