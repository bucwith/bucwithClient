import React from "react";
import styled from "styled-components";

const Posting = () => {

  return (
    <>
        <Wrapper>
            <Topic>벅윗 파티원 모집</Topic>
        </Wrapper>
    </>
  );
};

const Wrapper = styled.ul`
    width: 350px;
    background-color: #24252C;
    border-radius: 30px;
    padding: 20px;
`

const Topic = styled.li`
    padding: 8px 10px;
    border-radius: 8px;
    background-color: #306A83;
    color: white;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
`

export default Posting;
