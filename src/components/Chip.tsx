import React from 'react';
import styled from "styled-components";

interface Chiptypes {
    text: string;
    isFocus: boolean;
}

function Chip( { text, isFocus }: Chiptypes) {
    return (
        <ListItem>
            { isFocus ? 
                <ChipFocusButton>
                    { text }
                </ChipFocusButton> :
                <ChipButton>
                    { text }
                </ChipButton> }
        </ListItem>
    );
}
const ListItem = styled.li`
    list-style: none;
    margin:0px; 
    padding:0px;
`

const ChipButton = styled.button`
    padding: 10px 16px;
    border-radius: 30px;
    color: white;
    background-color: rgba( 255, 255, 255, 0.1 );
    border: 1px solid white;
`

const ChipFocusButton = styled.button`
    padding: 10px 16px;
    background-color = white;
    color: black;
    border-radius: 30px;
`

export default Chip;