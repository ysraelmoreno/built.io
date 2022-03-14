import React from "react";
import { CSS } from "@kaiju-ui/theme";
import { SkeletonWrapper } from "./styles";

export interface SkeletonProps {
  width?: number;
  height?: number;
  css?: CSS;
}

function Skeleton({ width = 300, height = 40, css }: SkeletonProps) {
  return <SkeletonWrapper css={{ ...css, width, height }}></SkeletonWrapper>;
}

export default Skeleton;
