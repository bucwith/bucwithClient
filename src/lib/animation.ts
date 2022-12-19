import styled, { css, keyframes } from "styled-components";

const animation = keyframes`
  0% {

    transform:translateY(674px);
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

const contextAnimation = css`
  animation: ${animationContexts} 2s ease-in-out;
`;

const moveAnimation = css`
  animation: ${animation} 2s ease-in-out;
`;

export const AnimationBox = styled.div<{ animation: boolean }>`
  position: relative;
  z-index: -1;
  margin-top: -210px;
  ${(props) => (props.animation ? moveAnimation : null)};
`;

export const AnimationContexts = styled.div<{ animation: boolean }>`
  width: 100%;
  ${(props) => (props.animation ? contextAnimation : null)};
`;
