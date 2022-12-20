import styled, { css, keyframes } from "styled-components";

const animation = keyframes`
  0% {

    transform:translateY(400px);
  }
  100%{
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
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: -1;
  ${(props) => (props.animation ? moveAnimation : null)}
`;

export const AnimationContexts = styled.div<{ animation: boolean }>`
  width: 100%;
  ${(props) => (props.animation ? contextAnimation : null)};
`;
