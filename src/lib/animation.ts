import styled, { css, keyframes } from "styled-components";

const lanternAnimation = keyframes`
0%{
  transform: translateY(100%) ;
}
100%{
  }
`;

const degreeCss = keyframes`
from {
  /* transform: rotate(-15deg); */
} to{
}
`;

const contentsAnimation = keyframes`
  from {
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

export const Modalon = keyframes`
  0%{
    transform: translateY(100%) ;
  }
  100%{
    transform: translateY(0);
  }
`;

export const Modaloff = keyframes`
  0%{
    transform: translateY(0) ;
  }
  100%{
    transform: translateY(100%);
  }
`;

const contentCSS = css`
  /* easeOutCubic */
  opacity: 0;
  animation: ${contentsAnimation} 0.3s cubic-bezier(0.33, 1, 0.68, 1);
  animation-delay: 3s;
  animation-fill-mode: forwards;
`;

const lanternCss = css`
  animation: ${lanternAnimation} 2s cubic-bezier(0.32, 0, 0.67, 0);
  /* animation-fill-mode: forwards; */
`;

export const AnimationBox = styled.div<{ animation: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: -1;
  ${(props) => (props.animation ? lanternCss : null)}
`;

export const AnimationContexts = styled.div<{ animation: boolean }>`
  width: 100%;
  ${(props) => (props.animation ? contentCSS : null)};
`;
