import { ForwardedRef, forwardRef } from "react";
import ReactDOM from "react-dom";
import { ModalContainer, Overlay } from "./styles";

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
  align?: "left" | "right" | "center" | "bottom" | "top";
  onHide: () => void;
  hasOverlay?: boolean;
}

const Modal = forwardRef(
  (
    { open, children, align, onHide, hasOverlay = true }: ModalProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return ReactDOM.createPortal(
      open ? (
        <>
          <Overlay onClick={onHide} hasOverlay={hasOverlay} />
          <ModalContainer align={align} ref={ref}>
            {children}
          </ModalContainer>
        </>
      ) : null,
      document.querySelector("body") as HTMLElement
    );
  }
);
export default Modal;
