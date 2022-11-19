import styled from "styled-components";

interface FlexProps {
  gap: string;
}

export const VerticalCentered = styled.div<FlexProps>`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: ${(props) => props.gap};
`;
