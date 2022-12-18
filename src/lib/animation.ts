import styled, { keyframes } from "styled-components";

const animation = keyframes`
  0% {

    transform:translateY(574px);
    /* opacity: 0; */
  }
  50% {

  }
  100%{

    transform:translateY(0px);
    /* opacity: 1; */
  }
`;

const animationContexts = keyframes`
  0% {

    opacity: 0;
  }
  100%{

    opacity: 1;
  }
`;

export const AnimationBox = styled.div`
  position: relative;
  animation: ${animation} 2s ease-in-out;
`;

export const AnimationContexts = styled.div`
  width: 100%;
  animation: ${animationContexts} 2s ease-in-out;
`;
