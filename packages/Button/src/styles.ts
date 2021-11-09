import styled, { css, CSSProp } from "styled-components";

type ButtonContainerProps = {
  variants: "primary" | "alternative" | "ghost" | "danger" | "success";
  css: CSSProp;
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  border: none;
  background-color: #ff5c00;
  color: #fff;
  height: 45px;
  width: 100%;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 0.5px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #d14b00;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    pointer-events: none;
  }

  ${(props) =>
    props.variants === "alternative" &&
    css`
      background-color: transparent;
      border: 1px solid #ff5c00;
      color: #ff5c00;

      &:hover {
        background-color: #ffe9dd;
        border: 1px solid #d14b00;
        color: #d14b00;
      }
    `}

  ${(props) =>
    props.variants === "ghost" &&
    css`
      color: #ff5c00;
      background-color: transparent;

      &:hover {
        background-color: #ffe9dd;
      }
    `}

  ${(props) =>
    props.variants === "danger" &&
    css`
      color: #fff;
      background-color: #ff0000;

      &:hover {
        background-color: #ce0000;
      }
    `}

  ${(props) =>
    props.css &&
    css`
      ${props.css}
    `}
`;
