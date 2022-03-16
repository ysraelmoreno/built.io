import { styled } from "@kaiju-ui/theme";
import Button from "@kaiju-ui/button/src";

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
