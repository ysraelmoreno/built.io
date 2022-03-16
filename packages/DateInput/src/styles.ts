import { styled } from "@kaiju-ui/theme";
import Button from "@kaiju-ui/button/src";

export const InputContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: "relative",
  width: "100%",
});

export const InputWrapper = styled("input", {
  width: "100%",
  marginTop: "10px",
  outline: "none",
  border: "none",
  borderBottom: "1px solid $primary",
  padding: 10,
});

export const DateInputLabel = styled("label", {
  position: "absolute",
  transition: "transform 0.2s ease",
  left: 10,
  transform: "translateY(0) translateX(0) scale(1)",
  opacity: 0.5,
  svg: {
    marginRight: 5,
  },

  variants: {
    isFocused: {
      true: {
        opacity: 1,
        transform: "translateY(-20px) translateX(-10px) scale(0.8)",
      },
    },
  },
});

export const InputContent = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  svg: {
    position: "absolute",
    right: 10,
  },
});
