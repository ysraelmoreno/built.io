import styled, { css, keyframes } from "styled-components";

interface ModalContainerProps {
  align?: "left" | "right" | "center" | "bottom" | "top";
}

interface OverlayProps {
  hasOverlay: boolean;
}

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  } to {
    transform: translateX(0%);
  }
`;

const slideRight = keyframes`
  from {
    right: -50%;
  } to {
    right: 0;
  }
`;

export const ModalContainer = styled.div<ModalContainerProps>`
  position: fixed;
  background-color: white;
  z-index: 99999999;
  width: 50%;
  top: 50%;
  transform: translateX(50%);
  border-radius: 5px;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);

  ${(props) =>
    props.align === "left" &&
    css`
      left: 0;
      transform: translateX(0);
      height: 100%;
      border-radius: 0;
      top: 0;

      width: 30%;

      animation: ${slideIn} 0.5s ease-in-out;
    `}

  ${(props) =>
    props.align === "right" &&
    css`
      border-radius: 0;
      right: 0;
      height: 100%;
      top: 0;
      transform: translateX(0);
      width: 30%;

      animation: ${slideRight} 0.5s ease-in-out;
    `}
`;

export const Overlay = styled.div<OverlayProps>`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 999;

  ${(props) =>
    !props.hasOverlay &&
    css`
      opacity: 0;
    `}
`;
