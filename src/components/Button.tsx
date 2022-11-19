import React from 'react';
import styled from 'styled-components';

interface BtnPatternProps {
    isRound: boolean;
    disabled: boolean;
  }
  
  interface ButtomProps extends BtnPatternProps {
    text: string;
    onClick: () => void;
  }
  
  export default function Button({ text, isRound, disabled, onClick }: ButtomProps) {
    return (
      <StyledButton isRound={isRound} disabled={disabled} onClick={onClick}>
        {text}
      </StyledButton>
    );
  }
  
  const StyledButton = styled.button<BtnPatternProps>`
    width: 100%;
    color: black;
    font-size: 2.4rem;
    padding: 1.7rem;
    line-height: 2.9rem;
    background-color: #7958fc;
    color: #fff;
    border-radius: 1.8rem;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    `