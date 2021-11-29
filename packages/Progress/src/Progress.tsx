import { useEffect, useState } from "react";
import { ProgressContainer, ProgressBar, ProgressIndicator } from "./styles";

export interface ProgressProps {
  percent: number;
}

function Progress({ percent = 0, ...props }: ProgressProps) {
  return (
    <>
      <ProgressContainer>
        <ProgressBar percent={percent > 100 ? 100 : percent} />
      </ProgressContainer>
      <ProgressIndicator>{percent}%</ProgressIndicator>
    </>
  );
}

export default Progress;
