import { CSSProp } from "styled-components";
import { ButtonHTMLAttributes, forwardRef, MutableRefObject } from "react";
import { ButtonContainer } from "./styles";

export type ButtonProps = {
  children: React.ReactNode;
  variants?: "primary" | "alternative" | "ghost" | "danger" | "success";
  css: CSSProp;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef(
  ({ children, variants = "primary", css, ...props }: ButtonProps, ref) => {
    return (
      <ButtonContainer
        variants={variants}
        ref={ref as MutableRefObject<HTMLButtonElement>}
        css={css}
        {...props}
      >
        {children}
      </ButtonContainer>
    );
  }
);

export default Button;
