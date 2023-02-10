import React from "react";
import styled from "styled-components";
import blank_heart from "../../assets/images/icon_blank_heart.png";
import red_heart from "../../assets/images/icon_heart.png";
import blank_comment from "../../assets/images/icon_blank_comment.png";
import party from "../../assets/images/community/chip/party.png";
import question from "../../assets/images/community/chip/question.png";
import recommend from "../../assets/images/community/chip/recommend.png";

interface IconProps {
  image: string;
}

interface TopicProps {
  image: string;
}

interface PostingProps {
  topic: number;
  date: string;
  category: string[];
  content: string;
  heart: number;
  comment: number;
}

const Posting = ({topic, date, category, content, heart, comment}: PostingProps) => {
  const topicName = ["벅윗 파티원 모집", "질문있어요", "추천해주세요"]
  const topicImage = [party, question, recommend]
  const topicColor = ["#306A83", "#479E74", "#475A9E"]

  return (
    <>
      <Wrapper>
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

const Wrapper = styled.article`
    width: 100%;
    background-color: #24252C;
    border-radius: 30px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
`

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

const Topic = styled.h2<TopicProps>`
  background-image: ${(props) => `url(${props.image})`};
  background-repeat: no-repeat;
  background-position: 10px center;
  background-size: 16px 16px;
  padding: 8px 10px 8px 30px;
  border-radius: 8px;
  background-color: ${(props) => props.color};
  color: white;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
`

const Date = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 22px;
  color: #C4C8D3;
`

const CategoryWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`

const Category = styled.li`
  border: 1px solid #B5C4C9;
  color: #B5C4C9;
  border-radius: 8px;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  padding: 6px 10px;
`

const Content = styled.p`
  width: 100%;
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const IconWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

const Icon = styled.li<IconProps>`
  width: 30px;
  height: 30px;
  background-image: ${(props) => `url(${props.image})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: relative;
  &::after{
    content: attr(data-number);
    font-family: 'Roboto';
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    position: absolute;
    left: 32px;
    top: 50%;
    transform: translateY(-50%)
  }
`

export default Posting;
