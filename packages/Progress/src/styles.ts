import styled, { css } from "styled-components";

interface IProgressProps {
  percent: number;
}

export const ProgressContainer = styled.div`
  height: 8px;
  border-radius: 10px;
  position: relative;
  width: 100%;
  background-color: #333333;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.35);
`;

export const ProgressBar = styled.div<IProgressProps>`
  position: absolute;
  height: 100%;

  ${(props) =>
    props.percent &&
    css`
      width: ${props.percent}%;
    `}
  background-color: #ff5c00;
  border-radius: 10px;
`;

export const ProgressIndicator = styled.span`
  color: #333333;
  opacity: 0.5;
`;
