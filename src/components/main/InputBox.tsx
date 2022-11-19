import React from 'react';
import styled from 'styled-components';
import SubTitle from './SubTitle';
import TextArea from './TextArea';
import Button  from '../Button';

const Wrap = styled.div`
padding: 30px 20px;
background: rgba(52, 55, 68, 0.5);
backdrop-filter: blur(15px);
border-radius: 30px;
`;

const Padding = styled.div`
    padding: 20px 0;
`
export default function InputBox() {
  return (
    <Wrap>
        <SubTitle text={"어떤 종류의 버킷리스트인가요?"}></SubTitle>
        <Padding>
            <TextArea></TextArea>
        </Padding>
        <Button
            onClick={()=>{
                console.log('동작')
            }}
            isRound={true}
            disabled={false}
            text="응원 메시지 보러가기"
            />
    </Wrap>
  )
}

