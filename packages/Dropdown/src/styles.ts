import styled, { keyframes } from "styled-components";

interface DropdownProps {}

const grow = keyframes`
  0% {
   transform: translateY(-50%) scaleY(0);
   opacity: 0;
  }
  100% {
    opacity: 1;
    transform:  translateY(0) scaleY(1);
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownWrapper = styled.div`
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.35);
  border-radius: 5px;
  padding: 5px;
  margin-top: 10px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;

  animation: ${grow} 0.5s ease-in-out;
`;
