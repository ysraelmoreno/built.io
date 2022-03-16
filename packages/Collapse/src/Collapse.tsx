import React, { useEffect } from "react";
import { CSS } from "@kaiju-ui/theme";
import { CollapseProvider, useCollapse } from "./CollapseContext";
import { CollapseContainer } from "./styles";

interface CollapseProps {
  children: React.ReactNode;
  collapseTitle?: string;
  css?: CSS;
  isSpecial?: boolean;
  isMultiple?: boolean;
  defaultValue?: string | string[];
}

interface CollapseWrapperProps {
  children: React.ReactNode;
  collapseTitle?: string;
  css?: CSS;
  type?: "special" | "default";
  isMultiple?: boolean;
  defaultValue?: string | string[];
}

function Collapse({
  children,
  collapseTitle,
  css,
  isSpecial = false,
  isMultiple = false,
  defaultValue,
}: CollapseProps) {
  return (
    <>
      <CollapseProvider>
        <CollapseWrapper
          collapseTitle={collapseTitle}
          isMultiple={isMultiple}
          css={css}
          type={isSpecial ? "special" : "default"}
          defaultValue={defaultValue}
        >
          {children}
        </CollapseWrapper>
      </CollapseProvider>
    </>
  );
}

function CollapseWrapper({
  children,
  collapseTitle,
  css,
  type,
  isMultiple = false,
  defaultValue,
}: CollapseWrapperProps) {
  const {
    handleCollapseMultiple,
    handleDefaultValue,
    handleCollapseType,
  } = useCollapse();

  useEffect(() => {
    handleCollapseMultiple(isMultiple);
  }, [handleCollapseMultiple, isMultiple]);

  useEffect(() => {
    if (defaultValue) {
      handleDefaultValue(defaultValue);
    }
  }, [handleDefaultValue, defaultValue]);

  useEffect(() => {
    if (type) {
      handleCollapseType(type);
    }
  }, [handleCollapseType, type]);

  return (
    <>
      <CollapseContainer css={css}>
        <h5>{collapseTitle}</h5>
        {children}
      </CollapseContainer>
    </>
  );
}

export default Collapse;
