import React from "react";
import { BYTCSS } from "@kaiju-ui/theme";
import { SkeletonWrapper } from "./styles";

interface SkeletonProps {
  width?: string;
  height?: string;
  css?: BYTCSS;
}

function Skeleton({ width = "300px", height = "40px", css }: SkeletonProps) {
  return <SkeletonWrapper css={{ ...css, width, height }}></SkeletonWrapper>;
}

export default Skeleton;
