import ReactDOM from "react-dom";
import { ModalContainer, Overlay } from "./styles";

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
  align?: "left" | "right" | "center" | "bottom" | "top";
  onHide: () => void;
  hasOverlay?: boolean;
}

function Modal({
  open,
  children,
  align = "center",
  hasOverlay = true,
  onHide,
}: ModalProps) {
  return ReactDOM.createPortal(
    open ? (
      <>
        <Overlay onClick={onHide} hasOverlay={hasOverlay} />
        <ModalContainer align={align}>{children}</ModalContainer>
      </>
    ) : null,
    document.querySelector("body") as HTMLElement
  );
}

export default Modal;
