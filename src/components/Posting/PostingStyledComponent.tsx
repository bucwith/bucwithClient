import React from "react";
import styled from "styled-components";

interface IconProps {
    image: string;
  }
  
interface TopicProps {
    image: string;
  }  

export const Wrapper = styled.article`
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

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

export const Topic = styled.h2<TopicProps>`
  background-image: ${(props) => `url(${props.image})`};
  background-repeat: no-repeat;
  background-position: 10px center;
  background-size: 16px 16px;
  padding: 9px 10px 9px 30px;
  border-radius: 8px;
  background-color: ${(props) => props.color};
  color: white;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
`

export const Date = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 22px;
  color: #C4C8D3;
`

export const CategoryWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`

export const Category = styled.li`
  border: 1px solid #B5C4C9;
  color: #B5C4C9;
  border-radius: 8px;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  padding: 6px 10px;
`

export const Content = styled.p`
  width: 100%;
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const IconWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

export const Icon = styled.li<IconProps>`
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