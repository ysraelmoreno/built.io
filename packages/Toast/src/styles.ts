import { VariantProps } from "@stitches/react";
import { styled } from "@kaiju-ui/theme";

export const ToastContainer = styled("div", {
  position: "fixed",
  top: "0",
  right: "0",
  zIndex: "999999",
  width: "100%",
  padding: "10px",
  maxWidth: "300px",
});

export type ToastVariants = VariantProps<typeof ToastContainer>;
