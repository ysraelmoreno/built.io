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

export const CalendarContainer = styled("div", {
  position: "absolute",
  backgroundColor: "white",
  minWidth: "100px",
  padding: "10px",
  borderRadius: "5px",
  width: "300px",
  pointerEvents: "auto",
  boxShadow: "0 0 10px 3px rgba(0, 0, 0, 0.2)",

  "&::before": {
    content: "",
    borderStyle: "solid",
    borderColor: "#ffff transparent",
    borderWidth: "6px 6px 0 6px",
    bottom: "20px",
    top: "0",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%) translateY(-100%) rotateZ(180deg)",
  },
});

export const DayButtonContainer = styled(Button, {
  opacity: "0.5",
  backgroundColor: "transparent",
  color: "$gray11 !important",
  borderRadius: "0",

  "&:disabled": {
    opacity: "1",
    backgroundColor: "transparent !important",
    color: "$gray6 !important",
  },

  "&:hover": {
    opacity: 1,
    color: "$gray12 !important",
    backgroundColor: "rgba(255, 92, 0, 0.4) !important",
  },

  variants: {
    active: {
      true: {
        opacity: 1,
        backgroundColor: "$primary !important",
        color: "white !important",

        "&:hover": {
          color: "$gray1 !important",
          backgroundColor: "rgba(255, 92, 0, 0.4) !important",
          opacity: 1,
        },
      },
    },
  },
});
