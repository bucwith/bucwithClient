import React from 'react';
import styled from "styled-components";

interface Chiptypes {
    text: string;
    isFocus: boolean;
}

function Chip( { text, isFocus }: Chiptypes) {
    return (
        <li>
            {isFocus ? 
                <ChipFocusButton>
                    { text }
                </ChipFocusButton> :
                <ChipButton>
                    { text }
                </ChipButton> }
        </li>
    );
}

const ChipButton = styled.button`
    padding: 10px 16px;
    border-radius: 30px;
`

const ChipFocusButton = styled.button`
    padding: 10px 16px;
    background-color = white;
    color: black;
    border-radius: 30px;
`

export default Chip;