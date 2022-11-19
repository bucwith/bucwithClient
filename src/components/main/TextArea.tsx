import React from 'react';
import styled from 'styled-components';
import iconPencil from '../../assets/icon-pencil.png'

const InputArea = styled.textarea`
    width: 100%;
    background: rgba(240, 243, 245, 0.2);
    border-radius: 16px;
    height: 164px;
    border: none;
    resize: none;
    padding:20px;
    color: rgba(255, 255, 255, 0.8);

    &::placeholder {
        padding: 0 0 0 30px;
        line-height: top;
        background-repeat: no-repeat;
        background-image: url(${iconPencil});
        color: rgba(255, 255, 255, 0.8);
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
      }
`;

export default function TextArea() {
  return  (
    <div>
      <InputArea placeholder="예) 매일 운동하기 / 술 끊기"/>
    </div>
    )
}

