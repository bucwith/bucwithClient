import React from 'react';
import SubTitle from '../components/main/SubTitle';
import Title from '../components/Title';
import { ImagedWrapper } from '../components/Wrapper';
import { VerticalCentered } from '../components/Wrapper';


const Me = () => {
    return (
        <div>
            <ImagedWrapper>
                <VerticalCentered gap="40px">
                    <SubTitle text={`닉네임님의 버킷리스트는`}></SubTitle>
                    <Title primary={`“올해안에 자격증 따기”`}></Title>
                </VerticalCentered>
            </ImagedWrapper>
        </div>
    );
};

export default Me;