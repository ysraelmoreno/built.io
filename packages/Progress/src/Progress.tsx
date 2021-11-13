import { useEffect, useState } from "react";
import { ProgressContainer, ProgressBar, ProgressIndicator } from "./styles";

interface ProgressProps {
  percent: number;
}

function Progress({ percent, ...props }: ProgressProps) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(percent);
  }, [percent]);
  return (
    <>
      <ProgressContainer>
        <ProgressBar percent={percentage} />
      </ProgressContainer>
      <ProgressIndicator>{percentage}%</ProgressIndicator>
    </>
  );
}

export default Progress;
