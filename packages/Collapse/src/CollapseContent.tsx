import { useEffect, useState, useRef } from "react";
import React from "react";
import { useCollapse } from "./CollapseContext";
import { CollapseContentContainer } from "./styles";

interface ICollpaseContentProps {
  children: React.ReactNode;
  value: string;
}

function CollapseContent({ children, value }: ICollpaseContentProps) {
  const { contentOpened, collapseType } = useCollapse();

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <CollapseContentContainer
        ref={containerRef}
        type={collapseType}
        active={contentOpened.includes(value)}
        style={{
          [`--collapse-content-height` as any]: `${
            containerRef.current?.scrollHeight
              ? containerRef.current?.scrollHeight + 10
              : 0
          }px`,
        }}
      >
        {children}
      </CollapseContentContainer>
    </>
  );
}

export default CollapseContent;
