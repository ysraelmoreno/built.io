import { styled } from "@kaiju-ui/theme";
import Icon from "@kaiju-ui/icon";

export const InputContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const InputContainer = styled("div", {
  borderBottom: "1px solid $gray6",
  position: "relative",
  display: "flex",
  width: "100%",
  alignItems: "center",

  "svg:last-child": {
    color: "$gray1",
    margin: "0 10px",
    width: 20,
    height: 20,
  },

  variants: {
    variation: {
      primary: {},
      secondary: {
        border: "1px solid $primary",
        borderRadius: "10px",
      },
    },
    hasError: {
      true: {
        borderBottom: "3px solid red",
      },
    },
    theme: {
      light: {},
      primary: {
        svg: {
          color: "$primary !important",
        },
        borderBottom: "1px solid $primary",
      },
    },
  },
});

export const ShowPasswordButton = styled(Icon, {
  cursor: "pointer",
});

export const Label = styled("label", {
  color: "$gray1",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  left: 10,
  transition: "all 0.2s ease",
  opacity: 0.5,
  pointerEvents: "auto",
  cursor: "text",

  svg: {
    marginRight: 10,
  },

  variants: {
    variation: {
      primary: {},
      secondary: {},
    },
    isFocused: {
      true: {
        opacity: 1,
        transform: "translateY(-20px) translateX(-15px) scale(0.8)",
      },
    },
    isFilled: {
      true: {
        opacity: 1,
        transform: "translateY(-20px) translateX(-15px) scale(0.8)",
      },
    },
    disabled: {
      true: {
        opacity: "0.3 !important",
      },
    },
    theme: {
      light: {},
      primary: {
        svg: {
          color: "$primary",
        },
        color: "$gray12",
      },
    },
  },

  compoundVariants: [
    {
      variation: "secondary",
      isFocused: true,
      css: {
        transform: "translateY(-40px) translateX(-15px) scale(0.8)",
      },
    },
    {
      variation: "secondary",
      isFilled: true,
      css: {
        transform: "translateY(-40px) translateX(-15px) scale(0.8)",
      },
    },
  ],
});

export const InputWrapper = styled("input", {
  backgroundColor: "transparent",
  border: "none",
  width: "100%",
  marginTop: 10,
  padding: 10,
  color: "white",
  outline: "none",

  "&:disabled": {
    opacity: 0.3,
  },

  variants: {
    variation: {
      primary: {},
      secondary: {
        height: "fit-content",
        margin: 0,
        padding: "15px 10px",
      },
    },
    theme: {
      light: {},
      primary: {
        color: "$gray12",
      },
    },
  },
});

export const ErrorMessage = styled("span", {
  color: "$gray4 !important",
  fontSize: "0.8rem !important",
  marginTop: "5px",
  variants: {
    theme: {
      light: {},
      primary: {
        color: "$primary !important",
      },
    },
  },
});
