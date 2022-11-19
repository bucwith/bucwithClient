import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button'
import Title from '../components/main/Title';

const TitleWrap = styled.div`
    padding: 127px 30px 40px;
`

const Main = () => {
    return (
        <div>
            <TitleWrap>
                <Title text="소현님이"></Title>
                <Title text="꿈꾸는 버킷리스트를 "></Title>
                <Title text="적어주세요."></Title>
            </TitleWrap>
            <Button
            onClick={()=>{
                console.log('동작')
            }}
            isRound={true}
            disabled={false}
            text="응원 메시지 보러가기"
            />
        </div>
    );
};

export default Main;