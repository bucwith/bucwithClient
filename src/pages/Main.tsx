import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import InputBox from '../components/main/InputBox';

const TitleWrap = styled.div`
    padding: 127px 0px 40px 0px;
`

const Main = () => {
    return (
        <div>
            <TitleWrap>
                <Title primary={`소현님이\n꿈꾸는 버킷리스트를\n적어주세요.`}></Title>
            </TitleWrap>
            <InputBox></InputBox>
        </div>
    );
};

export default Main;
