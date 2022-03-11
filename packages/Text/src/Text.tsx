import React, { forwardRef, RefObject } from "react";
import { CSS } from "@kaiju-ui/theme";
import { TextContainer, TextVariantsProps } from "./styles";

export interface TextProps extends TextVariantsProps {
  as?:
    | "span"
    | "p"
    | "strong"
    | "label"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";
  color?: string;
  fontWeight?:
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900
    | "regular"
    | "bold"
    | "light";
  children: React.ReactNode;
  css?: CSS;
}

const Text = forwardRef(
  (
    {
      as = "span",
      color = "#000",
      css,
      fontWeight,
      children,
      ...props
    }: TextProps,
    ref
  ) => {
    const textCSS = {
      fontWeight: fontWeight || "regular",
      ...css,
    };
    return (
      <>
        <TextContainer
          as={as}
          css={textCSS}
          ref={ref as RefObject<any>}
          {...props}
        >
          {children}
        </TextContainer>
      </>
    );
  }
);

export default Text;
