import styled, { css, keyframes } from "styled-components";

interface InputLabelProps {
  isFocused: boolean;
  isFilled: boolean;
  variant?: "primary" | "alternative";
  floatingLabel: boolean;
}

interface InputContainerProps {
  variant?: "primary" | "alternative";
}

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
  } to {
    transform: translateY(0);
  }
`;

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  border-bottom: 1px solid #ff5c00;
  width: 100%;
  position: relative;
  align-items: center;
  height: 48px;

  ${(props) =>
    props.variant === "alternative" &&
    css`
      height: 55px;
      border: 1px solid #ff5c00;
      border-radius: 5px;
      padding: 0 5px;
    `}
`;

export const InputWrapper = styled.input`
  width: 100%;
  border: none;
  padding: 0 10px;
  background-color: transparent;
  display: flex;
  margin-top: 10px;
  align-items: center;
  outline: none;
  color: #333333;
`;

export const InputLabel = styled.label<InputLabelProps>`
  position: absolute;
  display: flex;
  align-items: center;
  left: 10px;
  opacity: 0.5;
  transition: all 0.2s ease-in-out;

  color: #333333;

  svg {
    margin-right: 10px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      opacity: 1;
      transform: translateY(-20px) translateX(-10px) scale(0.8);
    `}

  ${(props) =>
    props.isFilled &&
    css`
      opacity: 1;
      transform: translateY(-20px) translateX(-10px) scale(0.8);
      color: #ff5c00;

      svg {
        stroke: #ff5c00;
      }
    `}

  ${(props) =>
    !props.floatingLabel &&
    css`
      transform: ${props.variant === "alternative"
        ? "translateY(-15px)  translateX(-5px) scale(0.8);"
        : "translateY(-20px) translateX(-10px) scale(0.8)"};
    `}

    ${(props) =>
    props.variant === "alternative" &&
    css`
      transform: ${props.isFilled &&
      "translateY(-15px)  translateX(-5px) scale(0.8);"};

      transform: ${props.isFocused &&
      "translateY(-15px)  translateX(-5px) scale(0.8);"};
    `}
`;

export const ErrorMessage = styled.span`
  color: #ff0000;
  font-size: 11px;
  overflow: hidden;
  animation: ${slideIn} 0.3s ease-in-out;
`;
