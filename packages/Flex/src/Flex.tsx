import React, { forwardRef, HTMLAttributes, RefObject } from "react";
import { BYTCSS } from "@kaiju-ui/theme";
import { FlexVariants, FlexWrapper } from "./styles";

type FlexProps = {
  children?: React.ReactNode;
  css?: BYTCSS;
} & HTMLAttributes<HTMLDivElement> &
  FlexVariants;

const Flex = forwardRef(
  (
    {
      children,
      alignItems = "normal",
      alignContent = "start",
      flexWrap = "nowrap",
      justifyContent = "normal",
      direction = "row",
      css,
      ...props
    }: FlexProps,
    ref
  ) => {
    return (
      <FlexWrapper
        alignItems={alignItems}
        alignContent={alignContent}
        flexWrap={flexWrap}
        css={css}
        direction={direction}
        justifyContent={justifyContent}
        ref={ref as RefObject<HTMLDivElement>}
        {...props}
      >
        {children}
      </FlexWrapper>
    );
  }
);

export default Flex;
